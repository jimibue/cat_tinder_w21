class Api::CatsController < ApplicationController
  # :authenicate_user! is defined by devise_token_auth
  # check if the token is valid
  # if successfull we will have access to current_user
  # current_user is defined by devise_token_auth
  before_action :authenticate_user!, except: [:yo]

  def yo
    render json: "Public"
  end

  def index
    render json: User.unliked_cats(current_user.liked_cats)
  end

  def update
    # add id to array
    current_user.liked_cats << params[:id].to_i
    # save to db
    current_user.save
  end

  # liked_cats here a class Method (called on class (User))
  def my_cats
    # User.liked_cats - our custom method defined in User model
    # current_user.liked_cats - the text attribute of a user (serialized to array)
    render json: User.liked_cats(current_user.liked_cats)
  end

  # liked_cats here a instance method (called on instance of User)
  def my_cats
    render json: current_user.get_liked_cats
  end
end

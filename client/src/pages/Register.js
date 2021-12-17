import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
const Register = () => {
  const navigate = useNavigate();
  const { handleRegister } = useContext(AuthContext);
  const [email, setEmail] = useState("testx@test.com");
  const [username, setUsername] = useState("username1");
  const [password, setPassword] = useState("123456");
  const [passwordConfrimation, setPasswordConfrimation] = useState("123456");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfrimation) {
      // let user know these don't match
      alert("passwords do not match");
      return;
    }
    // handleRegister in AuthProvider
    handleRegister({ email, password, username }, navigate);
  };
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <p>email</p>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>Username</p>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <p>password</p>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p>password confirmation</p>
        <input
          value={passwordConfrimation}
          onChange={(e) => {
            setPasswordConfrimation(e.target.value);
          }}
        />
        <button>register</button>
      </form>
    </>
  );
};

export default Register;

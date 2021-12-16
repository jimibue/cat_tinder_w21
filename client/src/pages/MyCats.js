import axios from "axios";
import { useState, useEffect } from "react";

const MyCats = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    getCats();
  }, []);
  const getCats = async () => {
    // need api call
    try {
      const res = await axios.get("/api/my_cats");
      setCats(res.data);
    } catch (err) {
      alert("error in getCats");
    }
  };
  return (
    <div>
      <h1>My cats</h1>
      <code>{JSON.stringify(cats)}</code>
    </div>
  );
};
export default MyCats;

import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const Home = () => {
  const { handleLogoutAuth } = useContext(AuthContext);
  const [data, setData] = useState([]);
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     console.log(response);
  //     const result = await response.json();
  //     console.log(result);
  //     setData(result);
  //   } catch (e) {
  //     console.error("Error Fetch data :", e);
  //   }
  // };
  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.error("Error Fetch data :", e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      Home
      <button onClick={handleLogoutAuth}>Logout</button>
      {data.map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </div>
  );
};

export default Home;

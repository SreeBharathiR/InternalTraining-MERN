import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { handleLogoutAuth } = useContext(AuthContext);

  return (
    <div>
      Home
      <button onClick={handleLogoutAuth}>Logout</button>
    </div>
  );
};

export default Home;

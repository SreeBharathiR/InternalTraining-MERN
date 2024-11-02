import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function handleLogin() {
    if (name === "sree") {
      console.log("Login successfully");
      navigate("/about");
    } else {
      console.log("Invalid name or password");
    }
  }
  return (
    <div>
      Name:
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      password:
      <input type="password"></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

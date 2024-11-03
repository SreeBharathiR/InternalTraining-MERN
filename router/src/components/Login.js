import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  // const [isAuth, setIsAuth] = useState(false);
  // function handleLoginAuth() {
  //   console.log(setIsAuth);
  //   console.log(isAuth);
  // }
  const { handleLoginAuth, isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogin() {
    if (name === "sree") {
      console.log("Login successfully");
      handleLoginAuth();

      navigate("/");
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

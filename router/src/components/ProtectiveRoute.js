import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectiveRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  if (!isAuth) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default ProtectiveRoute;

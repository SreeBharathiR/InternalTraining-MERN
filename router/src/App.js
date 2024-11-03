import "./App.css";
import React, { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Param from "./components/Param";
import Layout from "./components/Layout";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectiveRoute from "./components/ProtectiveRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <ProtectiveRoute>
                    <Home />
                  </ProtectiveRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectiveRoute>
                    <About />
                  </ProtectiveRoute>
                }
                caseSensitive
              />
              <Route
                path="/:productId"
                element={
                  <ProtectiveRoute>
                    <Param />
                  </ProtectiveRoute>
                }
              />
              <Route
                path="/:meetId"
                element={
                  <ProtectiveRoute>
                    <Param />
                  </ProtectiveRoute>
                }
              />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

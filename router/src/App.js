import "./App.css";
import React, { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Param from "./components/Param";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} caseSensitive />
          <Route path="*" element={<Error />} />
          <Route path="/:meetId" element={<Param />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Enternal imports
import Home from "./Pages/Home/index";
import Login from "./Pages/Login/index";
import Profile from "./Pages/Profile/index";
import Registration from "./Pages/Registration/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

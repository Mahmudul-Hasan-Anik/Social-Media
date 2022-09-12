import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Enternal imports
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

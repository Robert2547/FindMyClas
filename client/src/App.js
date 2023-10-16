import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./form/Login";
import SignUp from "./form/SignUp";
import Home from "./Home";
import Navbar from "./nav/Navbar";

const App = () => {
  const location = useLocation();

  // Define an array of paths for which you want to hide the Navbar
  const pathsToHideNavbar = ["/login", "/signup"];

  // Check if the current location's path is in the array
  return (
    <div>
      {/* Other components or layout can go here */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./nav/Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" component={Home}/>
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

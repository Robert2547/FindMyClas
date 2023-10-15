import React from "react";
import ReactDOM from "react-dom/client";
import SignUp from "./form/SignUp"
import Login from "./form/Login"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);

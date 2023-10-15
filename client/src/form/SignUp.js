import React from "react";
import useForm from "../hooks/useForm";
import { useState } from "react";

const SignupForm = () => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    messages,
    handleSubmit,
  } = useForm("/signup");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="container mt-5">
      {messages && (
        <div
          className={`alert ${
            messages.includes("successful") ? "alert-success" : "alert-danger"
          }`}
          role="alert"
        >
          {messages}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            required={true}
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            required={true}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            required={true}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={`fa-solid fa-eye${showPassword ? "-slash" : ""}`}
            id="eye"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              top: "40.7%",
              right: "9%",
              cursor: "pointer",
              color: "lightgray",
            }}
          ></i>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type={showConfirm ? "text" : "password"}
            className="form-control"
            required={true}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <i
            className={`fa-solid fa-eye${showConfirm ? "-slash" : ""}`}
            id="eye"
            onClick={() => setShowConfirm(!showConfirm)}
            style={{
              position: "absolute",
              top: "54%",
              right: "9%",
              cursor: "pointer",
              color: "lightgray",
            }}
          ></i>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

import React from "react";
import useForm from "../hooks/useForm";
import { useState } from "react";

const LoginForm = () => {
  const { email, setEmail, password, setPassword, messages, handleSubmit } =
    useForm("/login");
  const [showPassword, setShowPassword] = useState(false);

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
          <div className="input-group">
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
                right: "1%",
                cursor: "pointer",
                color: "lightgray",
              }}
            ></i>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>

      {/* Signup Section */}
      <div className="mt-3">
        <p>Don't have an account?</p>
        <a href="/signup">Sign Up Here</a>
      </div>
    </div>
  );
};

export default LoginForm;

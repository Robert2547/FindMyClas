import React, { useState } from "react";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      });

      if (!response.ok) {
        console.error("Failed to sign up. Status:", response.status);

        // Handle non-JSON response (optional)
        const text = await response.text();
        console.log("Non-JSON response:", text);

        setSuccessMessage(""); // Clear success message
        return;
      }

      console.log("Response received from server:", response);
      const data = await response.json();

      // Log data received from the server
      console.log("Data received:", data);

      // Handle success or error messages from the server
      if (response.status === 200) {
        setSuccessMessage("Signup successful! You can now log in.");
        // Optionally, you can clear the form fields here
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setSuccessMessage("");
    }
  };

  return (
    <div className="container mt-5">
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
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
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

import React, { useState, useEffect } from "react";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messages, setMessages] = useState("");
  const [csrfToken, setCsrfToken] = useState(""); // State to store the CSRF token

  // Fetch CSRF token from the server
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch("/get_csrf_token", {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          setCsrfToken(data.csrf_token);
        } else {
          console.error("Failed to fetch CSRF token");
        }
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []); // Run once when the component mounts

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken, // Include CSRF token in headers
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirm_password: confirmPassword,
          csrf_token: csrfToken,
        }),
      });

      if (!response.ok) {
        console.error("Failed to sign up. Status:", response.status);

        const data = await response.json();

        if (data.errors) {
          // Display validation errors to the user
          setMessages(Object.values(data.errors).flat());
        } else {
          setMessages(["Signup fail. Please check your input"]);
        }
        return;
      }

      console.log("Response received from server:", response);
      const data = await response.json();

      // Log data received from the server
      console.log("Data received:", data);

      // Handle success or error messages from the server
      if (response.status === 200) {
        setMessages("Signup successful! You can now log in.");
        // Optionally, you can clear the form fields here
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setMessages("");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setMessages("Signup fail. Please check your input");
    }
  };

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
            type="password"
            className="form-control"
            required={true}
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
            required={true}
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

import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";


const SignupForm = () => {
  const { values: form, pending } = useFetch("/signup");

  return (
    <div className="content-section">
      <form method="POST" action="">
        <fieldset className="form-group">
          <legend className="border-bottom mb-4">Join Today</legend>
          <div className="form-group">
            <label className="form-control-label">{form.username.label}</label>
            {form.username.errors && (
              <div className="invalid-feedback">
                {form.username.errors.map((error, index) => (
                  <span key={index}>{error}</span>
                ))}
              </div>
            )}
            <input
              type="text"
              className={`form-control form-control-lg ${
                form.username.errors ? "is-invalid" : ""
              }`}
            />
          </div>
          <div className="form-group">
            <label className="form-control-label">{form.email.label}</label>
            {form.email.errors && (
              <div className="invalid-feedback">
                {form.email.errors.map((error, index) => (
                  <span key={index}>{error}</span>
                ))}
              </div>
            )}
            <input
              type="email"
              className={`form-control form-control-lg ${
                form.email.errors ? "is-invalid" : ""
              }`}
            />
          </div>
          <div className="form-group">
            <label className="form-control-label">{form.password.label}</label>
            {form.password.errors && (
              <div className="invalid-feedback">
                {form.password.errors.map((error, index) => (
                  <span key={index}>{error}</span>
                ))}
              </div>
            )}
            <input
              type="password"
              className={`form-control form-control-lg ${
                form.password.errors ? "is-invalid" : ""
              }`}
            />
          </div>
          <div className="form-group">
            <label className="form-control-label">
              {form.confirm_password.label}
            </label>
            {form.confirm_password.errors && (
              <div className="invalid-feedback">
                {form.confirm_password.errors.map((error, index) => (
                  <span key={index}>{error}</span>
                ))}
              </div>
            )}
            <input
              type="password"
              className={`form-control form-control-lg ${
                form.confirm_password.errors ? "is-invalid" : ""
              }`}
            />
          </div>
        </fieldset>
        <div className="form-group">
          <button type="submit" className="btn btn-outline-info">
            {pending ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
      </form>
      <div className="border-top pt-3">
        <small className="text-muted">
          Already Have An Account?
          <Link className="ml-2" to="/login">
            Sign In
          </Link>
        </small>
      </div>
    </div>
  );
};

export default SignupForm;

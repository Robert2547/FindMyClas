import React from "react";
import Authnav from "./Authnav";
import Nonauth from "./Nonauth";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Navbar() {
  const { values: isAuthenticated, pending, errors } = useFetch("/authorized");

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-warning text-decoration-none"
            >
              <span class="fs-3 d-none d-sm-inline">FindMyClass</span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <Link to="/" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>
                  <span
                    style={{ color: "#fcce47" }}
                    class=" fs-5 ms-1 d-none d-sm-inline"
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>
                  <span
                    style={{ color: "#fcce47" }}
                    class="fs-5 ms-1 d-none d-sm-inline"
                  >
                    Login
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>
                  <span
                    style={{ color: "#fcce47" }}
                    class="fs-5 ms-1 d-none d-sm-inline"
                  >
                    Signup
                  </span>
                </Link>
              </li>
            </ul>
            <hr />
            <div>
              {pending ? (
                <div>Loading...</div>
              ) : errors ? (
                <div>Error: {errors}</div>
              ) : isAuthenticated ? (
                <Authnav username="Demo Username" />
              ) : (
                <Nonauth />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

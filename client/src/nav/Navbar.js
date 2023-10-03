import React from "react";
import Authnav from "./Authnav";
import Nonauth from "./Nonauth";
import IsAuth from "./IsAuth";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">FindMyClass</span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <Link to="/" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>
                  <span className="ms-1 d-none d-sm-inline">Login</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>
                  <span className="ms-1 d-none d-sm-inline">Signup</span>
                </Link>
              </li>
            </ul>
            <hr />
            <div>
              <IsAuth>
                {(isAuthenticated) =>
                  isAuthenticated ? (
                    <Authnav username="Demo Username" />
                  ) : (
                    <Nonauth />
                  )
                }
              </IsAuth>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

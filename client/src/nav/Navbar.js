import React from "react";
import Authnav from "./Authnav";
import Nonauth from "./Nonauth";
import IsAuth from "./IsAuth";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="{{ url_for('home') }}"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">FindMyClass</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a
                  href="{{ url_for('home') }}"
                  className="nav-link align-middle px-0"
                >
                  <i className="fs-4 bi-house"></i>
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="{{ url_for('login') }}"
                  className="nav-link align-middle px-0"
                >
                  <i className="fs-4 bi-house"></i>
                  <span className="ms-1 d-none d-sm-inline">Login</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="{{ url_for('signup') }}"
                  className="nav-link align-middle px-0"
                >
                  <i className="fs-4 bi-house"></i>
                  <span className="ms-1 d-none d-sm-inline">Signup</span>
                </a>
              </li>
            </ul>
            <hr />
            //If the user is authenticated, show the Authnav component, else
            show the Nonauth component
            <div>
              <IsAuth>
                {(isAuthenticated) =>
                  isAuthenticated ? <Authnav /> : <Nonauth />
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

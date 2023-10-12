import React from "react";
import Authnav from "./nav/Authnav";
import Nonauth from "./nav/Nonauth";
import useFetch from "./hooks/useFetch";

function App() {
  const { values: isAuthenticated, pending, errors } = useFetch("/authorized");
  return (
    <nav>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-warning text-decoration-none"
              >
                <span class="fs-3 d-none d-sm-inline">FindMyClass</span>
              </a>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li class="nav-item">
                  <a href="/" class="nav-link align-middle px-0">
                    <i class="fs-4 bi-house"></i>
                    <span style={{ color: '#fcce47' }} class=" fs-5 ms-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/" class="nav-link align-middle px-0">
                    <i class="fs-4 bi-house"></i>
                    <span style={{ color: '#fcce47' }} class="fs-5 ms-1 d-none d-sm-inline">Login</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/signup" class="nav-link align-middle px-0">
                    <i class="fs-4 bi-house"></i>
                    <span style={{ color: '#fcce47' }} class="fs-5 ms-1 d-none d-sm-inline">Signup</span>
                  </a>
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
    </nav>
  );
}

export default App;

import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Authnav() {
  const { values: account, pending, errors } = useFetch("/account");
  return (
    <div className="dropdown pb-4">
      <a
        href="#"
        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {pending ? (
          <div>Loading...</div>
        ) : errors ? (
          <div>Error: {errors}</div>
        ) : (
          <img
            src={account.profile_image.data}
            alt="hugenerd"
            width="30"
            height="30"
            className="rounded-circle"
          />
        )}
        {pending ? (
          <div>Loading...</div>
        ) : errors ? (
          <div>Error: {errors}</div>
        ) : (
          <span className="d-none d-sm-inline mx-1">
            {account.username.data}
          </span>
        )}
      </a>
      <ul
        className="dropdown-menu dropdown-menu-dark text-small shadow"
        aria-labelledby="dropdownUser1"
      >
        <li>
          <Link className="dropdown-item" to="/account">
            Settings
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/update">
            Profile
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to="/logout">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Authnav;

import React from "react";
import { Link } from "react-router-dom";

function Authnav({ user, pending, error }) {
  if (pending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="dropdown pb-4">
      <a
        href="#"
        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {/*<img
          src={user.profile_image}
          alt="hugenerd"
          width="30"
          height="30"
          className="rounded-circle"
        />*/}
        <span className="d-none d-sm-inline mx-1">{user.username}</span>
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

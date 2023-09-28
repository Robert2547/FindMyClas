import React from 'react'

function Authnav() {
  return (
    <div className="dropdown pb-4">
    <a
      href="#"
      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
      id="dropdownUser1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        src="https://github.com/mdo.png"
        alt="hugenerd"
        width="30"
        height="30"
        className="rounded-circle"
      />
      <span className="d-none d-sm-inline mx-1">{username}</span>
    </a>
    <ul
      className="dropdown-menu dropdown-menu-dark text-small shadow"
      aria-labelledby="dropdownUser1"
    >
      <li><a className="dropdown-item" href="#">Settings</a></li>
      <li><a className="dropdown-item" href="/account">Profile</a></li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li><a className="dropdown-item" href="/logout">Sign out</a></li>
    </ul>
  </div>
  )
}

export default Authnav;
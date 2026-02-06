import React from "react";
import { NavLink } from "react-router-dom";

//ctrl + f -->find or replace
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-warning" to="#">
            Irise
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <NavLink
                className="nav-link active text-light"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink className="nav-link text-light" to="/about">
                About us
              </NavLink>
              <NavLink className="nav-link text-light" to="/contact">
                Contact
              </NavLink>
              <NavLink className="nav-link text-light" to="/register">
                Register
              </NavLink>
              <NavLink className="nav-link text-light" to="/show">
                Show
              </NavLink>
              <NavLink className="nav-link text-light" to="/login">
                Login
              </NavLink>
               <NavLink className="nav-link text-light" to="/admin">
                Admin
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

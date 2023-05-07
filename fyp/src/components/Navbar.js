import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import reddrop from "../images/reddrop.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <NavLink className="navbar-brand" to="#">
          {" "}
          <img
            src={reddrop}
            alt="RedDrop Logo"
            style={{
              height: "48px",
              marginLeft: "10px",
              marginBottom: "-20px",
              width: "auto",
            }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home<span className="sr-only"></span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " to="/signin">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/signup">
                SignUp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bloodbanks">
                BloodBanks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/calculator">
                Calculator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

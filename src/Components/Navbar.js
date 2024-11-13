import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <img src={logo} alt="logo" className="logo"></img>
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
          <div className="navbar-nav">
            <Link
              to="/"
              className={`nav-link ${activeLink === "/" ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${activeLink === "/about" ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`nav-link ${
                activeLink === "/projects" ? "active" : ""
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${
                activeLink === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

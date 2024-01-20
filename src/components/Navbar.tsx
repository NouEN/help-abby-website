import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../style.css";

function Navbar() {
  return (
    <div className="navbar-top">
      <Link to="/" className="nav-link" aria-current="page">
        <img src="src\assets\images\logo.png" className="rectangle" />
      </Link>
      <Link
        to="/"
        className="title-nav"
        aria-current="page"
        style={{ color: "#F8F7F3", textDecoration: "none" }}
      >
        {" "}
        HelpAbby
      </Link>

      <ul className="navbar-options">
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/food" className="nav-link">
            Food
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/training" className="nav-link">
            Training
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/myths" className="nav-link">
            Myths
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

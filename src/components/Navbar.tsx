import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <div>
          <div className="top-bar">
            <div className="rectangle" />
            <div className="title">HelpAbby</div>
            <ul className="navbar-nav">
              <div className="navbar">
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
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function AdminNavbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          HelpAbby
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/adminHome" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/adminFoodList" className="nav-link">
                Food List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/training" className="nav-link">
                Myth List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;

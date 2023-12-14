import { Component } from "react";
import { Link } from "react-router-dom";

class NavbarView extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            HelpAbby
          </a>
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
              <Link to="/">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </Link>
              <Link to="/">
                <a className="nav-link" href="/">
                  Food
                </a>
              </Link>
              <Link to="/">
                <a className="nav-link" href="/">
                  Training
                </a>
              </Link>
              <Link to="/">
                <a className="nav-link" href="/">
                  Myths
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarView;

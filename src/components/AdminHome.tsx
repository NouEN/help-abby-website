import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import React from "react";

class AdminHome extends React.Component {
  render() {
    return (
      <div>
        <AdminNavbar></AdminNavbar>
        <div>
          <div>
            <Link to="/">
              <button className="btn btn-secondary logoutButton" type="button">
                Logout
              </button>
            </Link>
          </div>
          <div>
            <h1 className="">Welcome, Admin!</h1>
            <h1>What do you want to do today?</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHome;

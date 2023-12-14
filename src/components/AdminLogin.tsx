import { Link } from "react-router-dom";
import React from "react";

class AdminLogin extends React.Component {
  render() {
    return (
      <form>
        <h1>This is an admin page</h1>;
        <div className="mb-3 input-padding-y4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="adminEmail"
            aria-describedby="emailHelp"
            placeholder="Input your admin email"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="adminPassword"
            placeholder="Input your password"
          ></input>
        </div>
        <Link to="/adminHome">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Link>
        <div className="row g-3 align-items-center"></div>
      </form>
    );
  }
}

export default AdminLogin;

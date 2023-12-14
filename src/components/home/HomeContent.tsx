import "bootstrap/dist/css/bootstrap.css";
import { Component, useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import AbbyStanding from "../../assets/images/abby-standing.png";

class HomeContent extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <div style={{ textAlign: "right" }}>
          <h3>
            Are you an admin? <Link to="/adminLogin">Click here</Link>
          </h3>
        </div>
        <div>
          <div style={{ textAlign: "center" }}>
            <img src={AbbyStanding} alt="Abby standing" className="img-fluid" />
            <h1>This is Abby.</h1>
            <h1>She is a lovely 15 years old girl and a foodie.</h1>
          </div>
        </div>
      </>
    );
  }
}

function NextButtonClicked() {
  alert("You clicked next!");
}

export default HomeContent;

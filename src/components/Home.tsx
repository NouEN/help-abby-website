import { Component } from "react";
import NavbarView from "./NavbarView";
import AbbyStanding from "../assets/images/chubby-girl-standing.png";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <NavbarView></NavbarView>
        <div style={{ textAlign: "right" }}>
          <h3>Are you an admin?</h3>
          <Link to="/">Click here</Link>
        </div>
        <div>
          <div style={{ textAlign: "center" }}>
            <img src={AbbyStanding} alt="Abby standing" className="img-fluid" />
            <h1>This is Abby.</h1>
            <h1>She is a lovely 12 years old little girl and a foodie.</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

import { Component } from "react";
import NavbarView from "./NavbarView";
import AbbyStanding from "../assets/images/chubby-girl-standing.png";
import SideSeeing from "../assets/images/side-seeing.png";
import ChocoCake from "../assets/images/chocolate-cake.png";
import Shocked from "../assets/videos/shocked.mp4";
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

          <div style={{ textAlign: "center" }}>
            <h1>She loves to eat these kind of foods.</h1>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={AbbyStanding} className="d-block w-30" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={AbbyStanding} className="d-block w-30" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={AbbyStanding} className="d-block w-30" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div>
              <img src={SideSeeing} alt="seeing the measure" />
              <h1>
                One day, there's a health checkup in her school. She is asked to
                measure her weight.
              </h1>
            </div>

            <div>
              <video src={Shocked} controls></video>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

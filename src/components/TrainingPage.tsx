import React, { Component } from "react";
import "../style.css";
import Navbar from "./Navbar";

class TrainingPage extends Component {
  render() {
    return (
      <div className="page">
        <Navbar></Navbar>
        <div className="section">
          <div className="container">
            <div className="text-wrapper">Training</div>
            <p className="p">
              We need to move our body to burn more calories and reach our
              calorie deficit goals. But what are the types of training that we
              must do?{" "}
            </p>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="text-wrapper">Cardio Training</div>
            <p className="div">
              Burn calories and improve cardiovascular health.
            </p>

            <div className="image-container">
              <div className="image"></div>
            </div>
            <img className="vector" alt="vector" src="vector-200.png" />
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="title-7">Examples of Cardio Exercises</div>
          </div>
          <div className="list-cardio">
            <div className="row">
              <div className="article">
                <div className="image-wrapper-cardio">
                  <div className="image-cardio"></div>
                </div>

                <div className="frame">
                  <div className="title-3">Running</div>
                  <div className="subtitle">Outdoor and indoor activity</div>
                  <p className="div">
                    Running is a great way to improve your stamina and burn
                    calories.
                  </p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Cardiovascular</div>
                    </div>
                    <div className="label-normal">
                      <div className="label-text">Stamina</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="article">
                <div className="image-wrapper-cardio">
                  <div className="image-cardio"></div>
                </div>
                <div className="frame">
                  <div className="title-3">Cycling</div>
                  <div className="subtitle">Outdoor and indoor activity</div>
                  <p className="div">
                    Cycling is a low-impact exercises that is great for
                    improving your stamina and burn calories.
                  </p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Cardiovascular</div>
                    </div>
                    <div className="label-normal">
                      <div className="label-text">Stamina</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="article">
                <div className="image-wrapper-cardio">
                  <div className="image-cardio"></div>
                </div>
                <div className="frame">
                  <div className="title-3">Cycling</div>
                  <div className="subtitle">Outdoor and indoor activity</div>
                  <p className="div">
                    Cycling is a low-impact exercises that is great for
                    improving your stamina and burn calories.
                  </p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Cardiovascular</div>
                    </div>
                    <div className="label-normal">
                      <div className="label-text">Stamina</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingPage;

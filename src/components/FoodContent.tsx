import React, { Component } from "react";
import "./FoodContent.css";
import Navbar from "./Navbar";

class FoodContent extends Component {
  render() {
    return (
      <div className="page">
        <Navbar></Navbar>
        <div className="section">
          <div className="container">
            <div className="text-wrapper">Calorie Calculator</div>
            <p className="description">
              Calculate the number of calories you need to consume daily
            </p>
            <div className="button">
              <div className="secondary">
                <div className="div">What Can I Eat?</div>
              </div>
              <div className="secondary">
                <div className="div">Calculate</div>
              </div>
            </div>
          </div>
          <img className="vector" src="vector-200.svg" alt="Vector" />
        </div>

        <div className="section">
          <div className="container-2">
            <div className="title-3">Macronutrients</div>
            <p className="p">Learn about the three essential macronutrients</p>
          </div>
        </div>

        <div className="list">
          <div className="row">
            <div className="article">
              <div className="image-container">
                <div className="image"></div>
              </div>
              <div className="frame">
                <div className="title-4">Carbohydrates</div>
                <div className="subtitle">Primary source of energy</div>
                <p className="subtitle-2">
                  Carbohydrates provide the body with energy for daily
                  activities and exercise. They are found in foods like bread,
                  rice, and pasta.
                </p>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">Energy</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Fiber</div>
                  </div>
                </div>

                <div className="user">
                  <div className="avatar">
                    <div className="avatar-2"></div>
                    <div className="title-wrapper">
                      <div className="title-5">Dr.Nutrition</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="article">
              <div className="image-container">
                <div className="image"></div>
              </div>
              <div className="frame">
                <div className="title-4">Carbohydrates</div>
                <div className="subtitle">Primary source of energy</div>
                <p className="subtitle-2">
                  Carbohydrates provide the body with energy for daily
                  activities and exercise. They are found in foods like bread,
                  rice, and pasta.
                </p>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">Energy</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Fiber</div>
                  </div>
                </div>

                <div className="user">
                  <div className="avatar">
                    <div className="avatar-2"></div>
                    <div className="title-wrapper">
                      <div className="title-5">Dr.Nutrition</div>
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

export default FoodContent;

import React, { Component } from "react";
import "../style.css";
import Navbar from "./Navbar";

interface FoodState {
  submitted: boolean;
  age: number;
  gender: string;
  weight: number;
  height: number;
  activity: string;
}

class FoodContent extends Component<FoodState> {
  constructor(props: FoodState) {
    super(props);
    this.state = {
      submitted: "false",
      age: 0,
      gender: "",
      weight: 0,
      height: 0,
      activity: "",
    };
  }
  render() {
    return (
      <div className="page">
        <Navbar></Navbar>
        <div className="section">
          <div className="container">
            <div className="text-wrapper">Food</div>
            <p className="div">
              The first key to achieving the healthy body is through your food.
              Food is an essential part in our life to get the energy to get
              through the day. But to lose weight we need to know exactly how
              many calories we need to consume in a day. You can find out by
              inputing your measurement in the calculator. Try it out yourself!{" "}
            </p>

            <div>
              <form action="">
                <div className="title">Enter Your Information</div>
                <div className="div-form">
                  <label className="title-4">Age</label>
                  <input
                    type="text"
                    className="textfield"
                    id="age"
                    placeholder="Enter your age"
                  />
                  <div className="subtitle">in years</div>
                </div>

                <div className="div-form">
                  <label className="title-4">Gender</label>
                  <select className="textfield">
                    <option selected>Choose...</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                  <div className="subtitle">Select your gender</div>
                </div>

                <div className="div-form">
                  <label className="title-4">Height</label>
                  <input
                    type="text"
                    className="textfield"
                    id="height"
                    placeholder="Enter your height"
                  />
                  <div className="subtitle">in centimeters</div>
                </div>

                <div className="div-form">
                  <label className="title-4">Weight</label>
                  <input
                    type="text"
                    className="textfield"
                    id="weight"
                    placeholder="Enter your weight"
                  />
                  <div className="subtitle">in kilograms</div>
                </div>

                <div className="div-form">
                  <label className="title-4">Activity Level</label>
                  <div className="chip-group textfield">
                    <div className="chip-2">
                      <button type="button" className="div btn btn-secondary">
                        Sedentary{" "}
                      </button>
                    </div>
                    <div className="chip-2">
                      <button type="button" className="div btn btn-secondary">
                        Lightly Active{" "}
                      </button>
                    </div>

                    <div className="chip-2">
                      <button type="button" className="div btn btn-secondary">
                        Moderately Active{" "}
                      </button>
                    </div>
                    <div className="chip-2">
                      <button type="button" className="div btn btn-secondary">
                        Very Active{" "}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="div-form">
                  <button type="reset" className="button btn-form">
                    <div className="secondary">
                      <div className="title-12">Reset</div>
                    </div>
                  </button>
                  <button className="button btn-form" type="submit">
                    <div className="primary">
                      <div className="title-2">Calculate</div>
                    </div>
                  </button>
                </div>
              </form>
            </div>

            <p className="div">Currently Abby </p>
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

import React, { Component } from "react";
import "../style.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

interface FoodState {
  submitted: boolean;
  age: number;
  gender: string;
  weight: number;
  height: number;
  activity: string;
}

class FoodContent extends Component {
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
            <p className="div-desc">
              The first key to achieving the healthy body is through your food.
              Food is an essential part in our life to get the energy to get
              through the day. But to lose weight we need to know exactly how
              many calories we need to consume in a day.
            </p>
            <p className="div-desc">
              Total calories that we burn throughout the day just by breathing
              and doing nothing is called Basal Metabolic Rate (BMR). Meanwhile
              total calories that we burn by processing the food we eat,
              exercising, studying, and other leisure activities is called Total
              Daily Energy Expenditure (TDEE). Let's find out more below!
            </p>
            <p className="div-desc">
              Currently Abby is 15 years old, 160 cm, and 85kg with Sedentary
              activity level. Can you help her figure out what her BMR and TDEE
              calories is?
            </p>

            <div className="calculator">
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
                  <div className="subtitle-calculator">in years</div>
                </div>

                <div className="div-form">
                  <label className="title-4">Gender</label>
                  <select className="textfield" defaultValue="">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                  <div className="subtitle-calculator">Select your gender</div>
                </div>

                <div className="div-form">
                  <label className="title-4">Height</label>
                  <input
                    type="text"
                    className="textfield"
                    id="height"
                    placeholder="Enter your height"
                  />
                  <div className="subtitle-calculator">in centimeters</div>
                </div>

                <div className="div-form">
                  <label className="title-4">Weight</label>
                  <input
                    type="text"
                    className="textfield"
                    id="weight"
                    placeholder="Enter your weight"
                  />
                  <div className="subtitle-calculator">in kilograms</div>
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

            <div className="list-calorie">
              <div className="metric">
                <div className="title-13">Basal Metabolic Rate</div>
                <div className="data">1300</div>
              </div>

              <div className="metric">
                <div className="title-13">Total Daily Energy Expenditure</div>
                <div className="data">2000</div>
              </div>
            </div>

            <div className="div">
              <div className="title">Great!</div>
              <div className="div-desc">
                Now we know what her BMR and TDEE calories is. To lose weight,
                we should eat at 200 - 500 less than our TDEE calories. Let's
                find out what Abby can eat in that range of calories.
              </div>
              <div className="button-eat-container">
                <Link to="/whattoeat">
                  <button className="button btn-eat">
                    <div className="primary">
                      <div className="title-2">What To Eat</div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="title">Macronutrients</div>
            <p className="div-desc">
              Learn about the three essential macronutrients
            </p>

            <div className="list-nutrition">
              <div className="row">
                <div className="article">
                  <div className="image-container">
                    <div className="image"></div>
                  </div>
                  <div className="frame">
                    <div className="title-3">Carbohydrates</div>
                    <div className="subtitle-macro">
                      Primary source of energy
                    </div>
                    <p className="subtitle-2">
                      Carbohydrates provide the body with energy for daily
                      activities and exercise. They are found in foods like
                      bread, rice, and pasta.
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
                    <div className="title-3">Protein</div>
                    <div className="subtitle-macro">
                      Building Blocks for Growth and Repair
                    </div>
                    <p className="subtitle-2">
                      Protein is essential for muscle growth and repair, as well
                      as supporting various bodily functions. Sources of protein
                      include meat, fish, and legumes.
                    </p>
                    <div className="selection">
                      <div className="label-normal">
                        <div className="label-text">Muscle</div>
                      </div>
                      <div className="label-normal">
                        <div className="label-text">Repair</div>
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
                    <div className="title-3">Fats</div>
                    <div className="subtitle-macro">
                      Energy Storage and Insulation
                    </div>
                    <p className="subtitle-2">
                      Fats provide long-term energy storage for the body, as
                      well as insulation and protection of vital organs. They
                      can be found in foods such as nuts, oils, and avocados.
                    </p>
                    <div className="selection">
                      <div className="label-normal">
                        <div className="label-text">Energy Storage</div>
                      </div>
                      <div className="label-normal">
                        <div className="label-text">Insulation</div>
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
        </div>
        <div className="section">
          <div className="container">
            <div className="div">
              <div className="title">
                Ohoho! You're getting smarter now, eh?
              </div>
              <p className="div">
                Curious to find out more about food nutritional value?
              </p>
              <div className="button-eat-container">
                <Link to="/foodlist">
                  <button className="button btn-eat">
                    <div className="primary">
                      <div className="title-2">List of Nutritional Value</div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="div">
              <p className="title">Or ready to get into the next step?</p>
              <div className="button-eat-container">
                <Link to="/training">
                  <button className="button btn-eat">
                    <div className="secondary">
                      <div className="title-3">Go to Training➡️ </div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="container-wrapper">
              <div className="container-3">
                <p className="title-1">HelpAbby © 2024. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodContent;

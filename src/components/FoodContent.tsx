import React, { Component } from "react";
import "../style.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { left } from "@popperjs/core";

interface CalorieState {
  tdee: number;
  bmr: number;
}

function FoodContent() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);
  const [calculated, setCalculated] = useState(false);
  const [count, setCount] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { age, gender, weight, height, activityLevel };

    const response = await axios.post(
      "http://127.0.0.1:8000/food/submit",
      data
    );
    console.log(response);
    setCalculated(true);

    if (response.data.status == "SUCCESS") {
      setBmr(response.data.bmr);
      setTdee(response.data.tdee);
      setCalculated(true);
      console.log("calculated is {}", calculated);
    } else {
      alert("Wrong input! Input Abby's measurement details.");
    }
  };

  const handleReset = async () => {
    setBmr(0);
    setTdee(0);
    window.location.reload();
  };

  return (
    <div className="page">
      <Navbar></Navbar>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">Food</div>
          <p className="div-desc">
            The first key to achieving the healthy body is through your food.
            Food is an essential part in our life to get the energy to get
            through the day. But to lose weight we need to know exactly how many
            calories we need to consume in a day.
          </p>
          <p className="div-desc">
            Total calories that we burn throughout the day just by breathing and
            doing nothing is called Basal Metabolic Rate (BMR). Meanwhile total
            calories that we burn by processing the food we eat, exercising,
            studying, and other leisure activities is called Total Daily Energy
            Expenditure (TDEE). Let's find out more below!
          </p>
          <p className="div-desc">
            Currently Abby is 15 years old, 160 cm, and 85kg with Sedentary
            activity level. Can you help her figure out what her BMR and TDEE
            calories is?
          </p>

          <p className="div-desc" style={{ color: "orange" }}>
            (Hint : Use the calorie calculator below!)
          </p>

          <div className="calculator">
            <form method="post" onSubmit={handleSubmit}>
              <div className="title">Calorie Calculator</div>
              <div className="div-form">
                <label className="title-4">Age</label>
                <input
                  type="text"
                  className="textfield"
                  id="age"
                  placeholder="Enter your age"
                  required
                  onChange={(e) => setAge(Number(e.target.value))}
                />
                <div className="subtitle-calculator">in years</div>
              </div>

              <div className="div-form">
                <label className="title-4 form-label">Gender</label>
                <select
                  className="textfield"
                  required
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
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
                  required
                  onChange={(e) => setHeight(Number(e.target.value))}
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
                  required
                  onChange={(e) => setWeight(Number(e.target.value))}
                />
                <div className="subtitle-calculator">in kilograms</div>
              </div>

              <div className="div-form">
                <label className="title-4">Activity Level</label>
                <div className="chip-group textfield">
                  <div className="chip-2">
                    <button
                      type="button"
                      className="div btn btn-secondary"
                      onClick={() => setActivityLevel("Sedentary")}
                    >
                      Sedentary{" "}
                    </button>
                  </div>
                  <div className="chip-2">
                    <button
                      type="button"
                      className="div btn btn-secondary"
                      onClick={() => setActivityLevel("Lightly Active")}
                    >
                      Lightly Active{" "}
                    </button>
                  </div>

                  <div className="chip-2">
                    <button
                      type="button"
                      className="div btn btn-secondary"
                      onClick={() => setActivityLevel("Moderately Active")}
                    >
                      Moderately Active{" "}
                    </button>
                  </div>
                  <div className="chip-2">
                    <button
                      type="button"
                      className="div btn btn-secondary"
                      onClick={() => setActivityLevel("Very Active")}
                    >
                      Very Active{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="div-form">
                <button
                  type="reset"
                  className="button btn-form"
                  onClick={() => handleReset()}
                >
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
              <p className="subtitle-calculator">
                *BMR Formula is based on Revised Harris-Benedict Equation by
                <a
                  href="https://www.mdpi.com/2218-1989/13/2/189"
                  className="subtitle-calculator"
                >
                  Pavlidou, et. al (2023)
                </a>
              </p>
              <p className="subtitle-calculator">
                *Activity level categories :
                <ul>
                  <li>Sedentary : Rarely or never works out</li>
                  <li>Lightly Active : Works out 1-2x/week</li>
                  <li>Moderately Active : Works out 3-5x/week</li>
                  <li>Very Active : Works out twice a day or 6-7x/week</li>
                </ul>
              </p>
            </form>
          </div>

          <div className="list-calorie">
            <div className="metric">
              <div className="title-13">Basal Metabolic Rate</div>
              <div className="data" id="data">
                {bmr}
              </div>
            </div>

            <div className="metric">
              <div className="title-13">Total Daily Energy Expenditure</div>
              <div className="data">{tdee}</div>
            </div>
          </div>

          <div className="div" hidden={calculated == true ? false : true}>
            <div className="title">Great!</div>
            <div className="div-desc">
              Now we know what her BMR and TDEE calories is. To lose weight, we
              should eat at 200 - 500 less than our TDEE calories and DON'T go
              below the BMR calories. Let's find out what Abby can eat in that
              range of calories.
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
                  <img
                    className="image-cardio"
                    src="src\assets\images\bread.png"
                  ></img>
                </div>
                <div className="frame">
                  <div className="title-3">Carbohydrates</div>
                  <div className="subtitle-macro">Primary source of energy</div>
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
                      <img
                        className="ava-2"
                        src="src\assets\images\doctor.png"
                      ></img>
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
                  <img
                    className="image-cardio"
                    src="src\assets\images\turkey.png"
                  ></img>
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
                      <img
                        className="ava-2"
                        src="src\assets\images\doctor.png"
                      ></img>
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
                  <img
                    className="image-cardio"
                    src="src\assets\images\cheese.png"
                  ></img>
                </div>
                <div className="frame">
                  <div className="title-3">Fats</div>
                  <div className="subtitle-macro">
                    Energy Storage and Insulation
                  </div>
                  <p className="subtitle-2">
                    Fats provide long-term energy storage for the body, as well
                    as insulation and protection of vital organs. They can be
                    found in foods such as nuts, oils, and avocados.
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
                      <img
                        className="ava-2"
                        src="src\assets\images\doctor.png"
                      ></img>
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
            <div className="title">Ohoho! You're getting smarter now, eh?</div>
            <p className="div">
              Curious to find out more about food nutritional value?
            </p>
            <div className="button-eat-container">
              <Link to="/food/foodlist">
                <button className="btn-eat">
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
// }

export default FoodContent;

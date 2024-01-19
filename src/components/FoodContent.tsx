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
  const [isTrue, setisTrue] = useState(false);
  const [isFalse, setisFalse] = useState(false);

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

  const handleTrueClick = async () => {
    setisTrue(true);
  };

  const handleFalseClick = async () => {
    setisFalse(true);
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
                <label className="title-4-calculator">Age</label>
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
                <label className="title-4-calculator form-label">Gender</label>
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
                <label className="title-4-calculator">Height</label>
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
                <label className="title-4-calculator">Weight</label>
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
                <label className="title-4-calculator">Activity Level</label>
                <div className="chip-group textfield">
                  <div className="chip-2">
                    <button
                      type="button"
                      className="div btn btn-secondary"
                      style={{ backgroundColor: "#BA9898" }}
                      onClick={() => setActivityLevel("Sedentary")}
                    >
                      Sedentary{" "}
                    </button>
                  </div>
                  <div className="chip-2">
                    <button
                      type="button"
                      className="div btn btn-secondary"
                      style={{ backgroundColor: "#BA9898" }}
                      onClick={() => setActivityLevel("Lightly Active")}
                    >
                      Lightly Active{" "}
                    </button>
                  </div>

                  <div className="chip-2">
                    <button
                      type="button"
                      className="div btn btn-secondary"
                      style={{ backgroundColor: "#BA9898" }}
                      onClick={() => setActivityLevel("Moderately Active")}
                    >
                      Moderately Active{" "}
                    </button>
                  </div>
                  <div className="chip-2">
                    <button
                      type="button"
                      className="div btn btn-secondary"
                      style={{ backgroundColor: "#BA9898" }}
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
                  <div className="primary-pink">
                    <div className="title-2">Calculate</div>
                  </div>
                </button>
              </div>
              <p className="subtitle-calculator">
                *BMR Formula is based on Revised Harris-Benedict Equation by
                <a
                  href="https://www.mdpi.com/2218-1989/13/2/189"
                  className="subtitle-calculator-a"
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
              below the BMR calories.
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="div-quiz">
            <p className="title-13">QUICK QUIZ</p>
            <p className="title-13">
              Abby should eat around 1728 kcal for her to lose weight.
            </p>
            <div className="div-form">
              <div className="button-eat-container">
                <button
                  className="button-boolean-left"
                  onClick={() => handleTrueClick()}
                  disabled={isTrue == true || isFalse == true ? true : false}
                >
                  <div
                    className="primary-pink"
                    style={{
                      backgroundColor: isTrue ? "#77DD77" : "",
                      color: isTrue ? "white" : "",
                    }}
                  >
                    <div className="title-2">TRUE</div>
                  </div>
                </button>

                <button
                  className="button-boolean-right"
                  onClick={() => handleFalseClick()}
                  disabled={isTrue == true || isFalse == true ? true : false}
                >
                  <div
                    className="primary-pink"
                    style={{
                      backgroundColor: isFalse ? "#FF6961" : "",
                      color: isFalse ? "white" : "",
                    }}
                  >
                    <div className="title-2">FALSE</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" hidden={isTrue == true ? false : true}>
        <div className="container">
          <div className="div">
            <p className="title" style={{ color: "green" }}>
              Correct!
            </p>
            <p className="div-desc">
              1928 - 200 is 1728. So her deficit calories is around 1700
              calories.
            </p>
          </div>
        </div>
      </div>
      <div className="section" hidden={isFalse == true ? false : true}>
        <div className="container">
          <div className="div">
            <p className="title" style={{ color: "red" }}>
              Wrong!
            </p>
            <p className="div-desc">
              1928 - 200 is 1728. So her deficit calories is around 1700
              calories.
            </p>
          </div>
        </div>
      </div>
      <div
        className="section"
        hidden={isFalse == true || isTrue == true ? false : true}
      >
        <div className="container">
          <div className="div">
            <p className="div-desc">
              Now let's see what can we eat in those calories.
            </p>
            <div className="button-eat-container">
              <Link to="/whattoeat">
                <button className="button btn-eat">
                  <div className="primary-pink">
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
                  <p className="div-desc">
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
                        <div className="title-4-avatar">Dr.Nutrition</div>
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
                  <p className="div-desc">
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
                        <div className="title-4-avatar">Dr.Nutrition</div>
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
                  <p className="div-desc">
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
                        <div className="title-4-avatar">Dr.Nutrition</div>
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
                  <div className="primary-pink-large">
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

import React, { Component } from "react";
import "../style.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class TrainingPage extends Component {
  render() {
    return (
      <div className="page">
        <Navbar></Navbar>
        <div className="section">
          <div className="container">
            <div className="text-wrapper">Training</div>
            <p className="div-desc">
              We need to move our body to burn more calories and reach our
              calorie deficit goals. But what are the types of training that we
              must do?{" "}
            </p>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="text-wrapper">Cardio Training</div>
            <p className="div-desc">
              Cardio training is any activity that mostly involves the heart and
              lungs to work harder. It usually increases your heart rate to a
              certain level based on how vigorous your effort is when doing it.
              Cardio training involves multiple muscle on your body so it can
              also be considered a full body exercise.
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
                    improving your stamina and burn calories. It is also working
                    your legs.
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
                  <div className="title-3">Swimming</div>
                  <div className="subtitle">Outdoor and indoor activity</div>
                  <p className="div">
                    Swimming is a full body exercise that will train your heart
                    without stressing your body. It is a low impact exercise
                    which means it is suitable for people with joint problems.
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

        <div className="section">
          <div className="container">
            <div className="text-wrapper-title">Benefits of Cardio</div>
            <div className="list">
              <div className="row">
                <div className="article">
                  <div className="image-container-benefit">
                    <div className="image"></div>
                  </div>
                  <div className="frame">
                    <div className="text-wrapper-benefit-title">
                      Lower Blood Pressure
                    </div>
                    <p className="div">
                      Regular cardio exercise can help lower blood pressure and
                      improve overall cardiovascular health.
                    </p>
                  </div>
                </div>
                <div className="article">
                  <div className="image-container-benefit">
                    <div className="image"></div>
                  </div>
                  <div className="frame">
                    <div className="text-wrapper-benefit-title">
                      Increase Endurance
                    </div>
                    <p className="div">
                      Cardio exercises improve stamina and endurance, allowing
                      you to perform physical activities for longer periods.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="article">
                  <div className="image-container-benefit">
                    <div className="image"></div>
                  </div>
                  <div className="frame">
                    <div className="text-wrapper-benefit-title">
                      Burn Calories
                    </div>
                    <p className="div">
                      Engaging in cardio activities aids in burning calories,
                      helping with weight loss and maintaining a healthy body.
                    </p>
                  </div>
                </div>
                <div className="article">
                  <div className="image-container-benefit">
                    <div className="image"></div>
                  </div>
                  <div className="frame">
                    <div className="text-wrapper-benefit-title">
                      Reduce Stress
                    </div>
                    <p className="div">
                      Cardio workouts release endorphins, which help in reducing
                      stress and promoting mental well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="text-wrapper">Strength Training</div>
            <p className="div-desc">
              Strength training also known as weight or resistance training. It
              is an exercise designed to strengthen the muscle of your body by
              progressively increasing the force output of the muscle either by
              increasing the lifted weights or the number of repetitions.
              Strength training can be done with bodyweight exercise or with
              equipments such as dumbbells, barbell, resistance band, and
              machine.
            </p>

            <div className="image-container">
              <div className="image"></div>
            </div>
            <img className="vector" alt="vector" src="vector-200.png" />
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="title-7">
              Examples of Strength Training Exercises
            </div>
          </div>
          <div className="list-cardio">
            <div className="row">
              <div className="article">
                <div className="image-wrapper-cardio">
                  <div className="image-cardio"></div>
                </div>

                <div className="frame">
                  <div className="title-3">Squats</div>
                  <div className="subtitle">Lower body exercise</div>
                  <p className="div">
                    Squats target your quads, hamstrings, and glutes for overall
                    lower body strength.
                  </p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Muscle Building</div>
                    </div>
                    <div className="label-normal">
                      <div className="label-text">Leg Strength</div>
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
                  <div className="title-3">Push-ups</div>
                  <div className="subtitle">Upper body exercise</div>
                  <p className="div">
                    Push-ups work your chest, shoulders, triceps, and core for a
                    strong upper body.
                  </p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Upper Body Strength</div>
                    </div>
                    <div className="label-normal">
                      <div className="label-text">Muscle Building</div>
                    </div>
                    <div className="label-normal">
                      <div className="label-text">Core Stability</div>
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
                  <div className="title-3">Planks</div>
                  <div className="subtitle">Core exercise</div>
                  <p className="div">
                    Planks works your core stability adn strength to protect
                    your back in your daily life.
                  </p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Core Stability</div>
                    </div>
                    <div className="label-normal">
                      <div className="label-text">Muscle Building</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="text-wrapper-title">
              Benefits of Strength Training
            </div>
            <div className="list">
              <div className="row">
                <div className="article">
                  <div className="image-container-benefit">
                    <div className="image"></div>
                  </div>
                  <div className="frame">
                    <div className="text-wrapper-benefit-title">
                      Increased Muscle Mass
                    </div>
                    <p className="div">
                      Strength training promotes muscle growth and maintains
                      lean body mass.
                    </p>
                  </div>
                </div>
                <div className="article">
                  <div className="image-container-benefit">
                    <div className="image"></div>
                  </div>
                  <div className="frame">
                    <div className="text-wrapper-benefit-title">
                      Improved Bone Density
                    </div>
                    <p className="div">
                      Resistance exercises strengthen bones and reduce the risk
                      of osteoporosis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="text-wrapper">Flexibility Training</div>
            <p className="div-desc">
              Cardio training is any activity that mostly involves the heart and
              lungs to work harder. It usually increases your heart rate to a
              certain level based on how vigorous your effort is when doing it.
              Cardio training involves multiple muscle on your body so it can
              also be considered a full body exercise.
            </p>

            <div className="image-container">
              <div className="image"></div>
            </div>
            <img className="vector" alt="vector" src="vector-200.png" />
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="title-7">
              Examples of Flexibility Training Exercises
            </div>
          </div>
          <div className="list-cardio">
            <div className="row">
              <div className="article">
                <div className="image-wrapper-cardio">
                  <div className="image-cardio"></div>
                </div>

                <div className="frame">
                  <div className="title-3">Stretching</div>
                  <p className="div">
                    Stretching exercises help to maintain or improve
                    flexibility.
                  </p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Flexibility</div>
                    </div>
                    <div className="label-normal">
                      <div className="label-text">Muscle Recovery</div>
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
                  <div className="title-3">Yoga</div>
                  <div className="subtitle">Mind-body exercise</div>
                  <p className="div">
                    Yoga combines stretching, balance, and breathing for overall
                    flexibility and relaxation.
                  </p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Flexibility</div>
                    </div>
                    <div className="label-normal">
                      <div className="label-text">Stress Relief</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="text-wrapper-title">
              Benefits of Flexibility Training
            </div>
            <div className="list">
              <div className="row">
                <div className="article">
                  <div className="image-container-benefit">
                    <div className="image"></div>
                  </div>
                  <div className="frame">
                    <div className="text-wrapper-benefit-title">
                      Improved Range of Motion
                    </div>
                    <p className="div">
                      Flexibility exercises enhance joint and muscle mobility.
                    </p>
                  </div>
                </div>
                <div className="article">
                  <div className="image-container-benefit">
                    <div className="image"></div>
                  </div>
                  <div className="frame">
                    <div className="text-wrapper-benefit-title">
                      Reduced Muscle Soreness
                    </div>
                    <p className="div">
                      Flexibility training can alleviate muscle stiffness and
                      soreness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="div">
              <div className="button-eat-container">
                <Link to="/myths">
                  <button className="button btn-eat">
                    <div className="secondary">
                      <div className="title-3">Go to Myths➡️ </div>
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

export default TrainingPage;

import React, { Component, useState } from "react";
import "../style.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function TrainingPage() {
  const [run, setRun] = useState(false);
  const [swim, setSwim] = useState(false);
  const [walk, setWalk] = useState(false);
  const [cycle, setCycle] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleSubmitQuiz = async () => {
    if ((swim || walk || cycle) && !run) {
      setIsAnswerCorrect(true);
      alert("Correct! :)");
    } else {
      setIsAnswerCorrect(false);
      alert("Wrong answer! Try again.");
    }
  };

  return (
    <div className="page">
      <Navbar></Navbar>
      <div className="section">
        <div className="container">
          <div className="title-training">Training</div>
          <p className="div-desc">
            Aside from nutrition, training also plays a big role in keeping our
            health and fitness in a great shape, it's one of the best way to
            reach holistic physical well-being. Training may aid our weight loss
            goals in a lot of ways. But what are the types of training that we
            must do?{" "}
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="title-training-2">Cardio Training</div>
          <hr
            style={{
              borderBottom: "4px solid #685656",
              width: "1000px",
              height: "3px",
            }}
          />
          <p className="div-desc">
            Cardio training is any activity that mostly involves the heart and
            lungs to work harder. It usually increases your heart rate to a
            certain level based on how vigorous your effort is when doing it.
            Cardio training involves multiple muscle on your body so it can also
            be considered a full body exercise.
          </p>
          <p className="div-desc">
            World Health Organization (WHO) recommends children and adolescents
            (age 5-17) should do at least an average of 60 minutes per day of
            moderate to vigorous intensity, mostly aerobic, physical activity,
            across the week. meanwhile for adults (age 18-64) and older adults
            (age 65 or older)should do at least 150– 300 minutes of moderate
            intensity aerobic physical activity; or at least 75–150 minutes of
            vigorous intensity aerobic physical activity.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="title-training-3">Examples of Cardio Exercises</div>
        </div>
        <div className="list-cardio">
          <div className="row">
            <div className="article">
              <div className="image-wrapper-cardio">
                <img
                  className="image-cardio"
                  src="src\assets\images\running.gif"
                ></img>
              </div>

              <div className="frame">
                <div className="title-training-4">Running</div>
                <div className="subtitle">Outdoor and indoor activity</div>
                <p className="div">
                  Running is a great way to improve your stamina and burn
                  calories.
                </p>
                <a
                  href="https://youtu.be/_kGESn8ArrU?si=asgqCBgD2cuFMnXI"
                  target="__blank"
                  className="training-link"
                >
                  How to Run in Proper Form
                </a>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">High Impact</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Not Pregnancy Friendly</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Not Joint Friendly</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Minimal Equipment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="article">
              <div className="image-wrapper-cardio">
                <img
                  className="image-cardio"
                  src="src\assets\images\cycling.gif"
                ></img>
              </div>
              <div className="frame">
                <div className="title-training-4">Cycling</div>
                <div className="subtitle">Outdoor and indoor activity</div>
                <p className="div">
                  Cycling is a low-impact exercises that is great for improving
                  your stamina and burn calories. It is also working your legs.
                </p>
                <a
                  href="https://youtu.be/rEqRmKAQ5xM?si=pPDwYsey9Pj-NQxo"
                  target="__blank"
                  className="training-link"
                >
                  Follow Along Stationary Bike Workout
                </a>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">Low Impact</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">All Ages</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Joint Friendly</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Pregnancy Friendly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="article">
              <div className="image-wrapper-cardio">
                <img
                  className="image-cardio"
                  src="src\assets\images\swimming-2.gif"
                ></img>
              </div>
              <div className="frame">
                <div className="title-training-4">Swimming</div>
                <div className="subtitle">Outdoor and indoor activity</div>
                <p className="div">
                  Swimming is a full body exercise that will train your heart
                  without stressing your body. It is a low impact exercise which
                  means it is suitable for people with joint problems.
                </p>
                <a
                  href="https://youtu.be/AQy_c30lNjI?si=6kPfPUrpWdEwTk3f"
                  target="__blank"
                  className="training-link"
                >
                  How To Swim Freestyle (Technique Tutorial)
                </a>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">Low Impact</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Full Body</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Pregnancy Friendly</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">All Ages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="text-wrapper-title-training">Benefits of Cardio</div>
          <div className="list">
            <div className="row">
              <div className="article">
                <div className="image-container-benefit">
                  <img
                    className="image-cardio"
                    src="src\assets\images\blood-pressure.gif"
                  ></img>
                </div>
                <div className="frame-training">
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
                  <img
                    className="image-cardio"
                    src="src\assets\images\heartbeat.gif"
                  ></img>
                </div>
                <div className="frame-training">
                  <div className="text-wrapper-benefit-title">
                    Increase Endurance
                  </div>
                  <p className="div">
                    Cardio exercises improve stamina and endurance, allowing you
                    to perform physical activities for longer periods.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="image-container-benefit">
                  <img
                    className="image-cardio"
                    src="src\assets\images\fire.gif"
                  ></img>
                </div>
                <div className="frame-training">
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
                  <img
                    className="image-cardio"
                    src="src\assets\images\laughing.gif"
                  ></img>
                </div>
                <div className="frame-training">
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

          <ul className="subtitle-training">
            <p className="source-title">Source :</p>

            <li className="source-desc">
              Agarwal S. K. (2012). Cardiovascular benefits of exercise.
              International journal of general medicine, 5, 541–545.
              https://doi.org/10.2147/IJGM.S30113
            </li>
            <li className="source-desc">
              Nystoriak, M. A., & Bhatnagar, A. (2018). Cardiovascular Effects
              and Benefits of Exercise. Frontiers in cardiovascular medicine, 5,
              135. https://doi.org/10.3389/fcvm.2018.00135
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="title-training-2">Strength Training</div>
          <hr
            style={{
              borderBottom: "4px solid #685656",
              width: "1000px",
              height: "3px",
            }}
          />
          <p className="div-desc">
            Strength training also known as weight or resistance training. It is
            an exercise designed to strengthen the muscle of your body by
            progressively increasing the force output of the muscle either by
            increasing the lifted weights or the number of repetitions. Strength
            training can be done with bodyweight exercise or with equipments
            such as dumbbells, barbell, resistance band, and machine.
          </p>
          <p className="div-desc">
            WHO recommends children and adolescents to incorporate strength
            training for at least 3 days a week. Meanwhile for adults and older
            adults, it is recommended to do at least 2 days of strength training
            that involve all major muscle groups.
          </p>

          <hr />
          <div className="image-container">
            <div className="image"></div>
          </div>
          <img className="vector" alt="vector" src="vector-200.png" />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="title-training-3">
            Examples of Strength Training Exercises
          </div>
        </div>
        <div className="list-cardio">
          <div className="row">
            <div className="article">
              <div className="image-wrapper-cardio">
                <img
                  className="image-cardio"
                  src="src\assets\images\squat.gif"
                ></img>
              </div>

              <div className="frame">
                <div className="title-training-4">Squats</div>
                <div className="subtitle">Lower body exercise</div>
                <p className="div">
                  Squats target your quads, hamstrings, and glutes for overall
                  lower body strength.
                </p>
                <a
                  href="https://youtu.be/2t3Ab7a2ZM4?si=dtaqL1kAiUfh45Et"
                  target="__blank"
                  className="training-link"
                >
                  How To Squat Properly
                </a>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">Muscle Building</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Leg Strength</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Weighted or Bodyweighted</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">All Ages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="article">
              <div className="image-wrapper-cardio">
                <img
                  className="image-cardio"
                  src="src\assets\images\pushups.gif"
                ></img>
              </div>
              <div className="frame">
                <div className="title-training-4">Push-ups</div>
                <div className="subtitle">Upper body exercise</div>
                <p className="div">
                  Push-ups work your chest, shoulders, triceps, and core for a
                  strong upper body.
                </p>
                <a
                  href="https://youtu.be/bt5b9x9N0KU?si=sI0Zz38--dRtN6Bz"
                  target="__blank"
                  className="training-link"
                >
                  How To Push-up Properly
                </a>
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
                  <div className="label-normal">
                    <div className="label-text">No Equipment</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">All Ages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="article">
              <div className="image-wrapper-cardio">
                <img
                  className="image-cardio"
                  src="src\assets\images\plank.svg"
                ></img>
              </div>
              <div className="frame">
                <div className="title-training-4">Planks</div>
                <div className="subtitle">Core exercise</div>
                <p className="div">
                  Planks works your core stability adn strength to protect your
                  back in your daily life.
                </p>
                <a
                  href="https://youtu.be/y1uinA_JknM?si=RnhYZgQcGDm0igzF"
                  target="__blank"
                  className="training-link"
                >
                  How To Do Planks Properly
                </a>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">Core Stability</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Muscle Building</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">No Equipment</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">All Ages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="text-wrapper-title-training">
            Benefits of Strength Training
          </div>
          <div className="list">
            <div className="row">
              <div className="article">
                <div className="image-container-benefit">
                  <img
                    className="image-cardio"
                    src="src\assets\images\muscle.gif"
                  ></img>
                </div>
                <div className="frame-training">
                  <div className="text-wrapper-benefit-title">
                    Increased Muscle Mass
                  </div>
                  <p className="div">
                    Strength training promotes muscle growth and maintains lean
                    body mass.
                  </p>
                </div>
              </div>
              <div className="article">
                <div className="image-container-benefit">
                  <img
                    className="image-cardio"
                    src="src\assets\images\skull.gif"
                  ></img>
                </div>
                <div className="frame-training">
                  <div className="text-wrapper-benefit-title">
                    Improved Bone Density
                  </div>
                  <p className="div">
                    Resistance exercises strengthen bones and reduce the risk of
                    osteoporosis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="subtitle-training">
            <p className="source-title">Source :</p>
            <li className="source-desc">
              Thomas, M. H., & Burns, S. P. (2016). Increasing Lean Mass and
              Strength: A Comparison of High Frequency Strength Training to
              Lower Frequency Strength Training. International journal of
              exercise science, 9(2), 159–167.
            </li>
          </ul>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="title-training-2">Flexibility Training</div>
          <hr
            style={{
              borderBottom: "4px solid #685656",
              width: "1000px",
              height: "3px",
            }}
          />
          <p className="div-desc">
            Flexibility training is a low-intensity exercise that has a goal to
            increase the total range of motion of a joint or group of joints.
            Flexibility training also involves working on stability because it
            decreases the chance for muscle imbalance so it prevents us from
            injuries. Flexibility training can boost our quality of life by
            boosting our sport performance and making daily activities easier.
          </p>

          <div className="image-container">
            <div className="image"></div>
          </div>
          <img className="vector" alt="vector" src="vector-200.png" />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="title-training-3">
            Examples of Flexibility Training Exercises
          </div>
        </div>
        <div className="list-cardio">
          <div className="row">
            <div className="article">
              <div className="image-wrapper-cardio">
                <img
                  className="image-cardio"
                  src="src\assets\images\stretching.gif"
                ></img>
              </div>

              <div className="frame">
                <div className="title-training-4">Stretching</div>
                <p className="div">
                  Stretching exercises help to maintain or improve flexibility.
                </p>
                <a
                  href="https://youtu.be/g_tea8ZNk5A?si=bqSpgLLrSPWVis2S"
                  target="__blank"
                  className="training-link"
                >
                  15 Minutes Full Body Stretching Routine
                </a>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">Low Impact</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Flexibility</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Muscle Recovery</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Pregnancy Friendly</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">All Ages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="article">
              <div className="image-wrapper-cardio">
                <img
                  className="image-cardio"
                  src="src\assets\images\yoga.gif"
                ></img>
              </div>
              <div className="frame">
                <div className="title-training-4">Yoga</div>
                <div className="subtitle">Mind-body exercise</div>
                <p className="div">
                  Yoga combines stretching, balance, and breathing for overall
                  flexibility and relaxation.
                </p>
                <a
                  href="https://youtu.be/ZiQh8jA5tVM?si=M7DsVpi8eI4giHr1"
                  target="__blank"
                  className="training-link"
                >
                  Healthy Body Yoga
                </a>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">Low Impact</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Flexibility</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Stress Relief</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Pregnancy Friendly</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">All Ages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper-title-training">
            Benefits of Flexibility Training
          </div>
          <div className="list">
            <div className="row">
              <div className="article">
                <div className="image-container-benefit">
                  <img
                    className="image-cardio"
                    src="src\assets\images\rom.gif"
                  ></img>
                </div>
                <div className="frame-training">
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
                  <img
                    className="image-cardio"
                    src="src\assets\images\dance.gif"
                  ></img>
                </div>
                <div className="frame-training">
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
          <ul className="subtitle-training">
            <p className="source-title">Source :</p>
            <li className="source-desc">
              Bouguezzi, R., Sammoud, S., Markov, A., Negra, Y., & Chaabene, H.
              (2023). Why flexibility deserves to be further considered as a
              standard component of Physical Fitness: A narrative review of
              existing insights from static stretching study interventions.
              Youth, 3(1), 146–156. doi:10.3390/youth3010010{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="div-quiz">
            <p className="title-13">QUICK QUIZ</p>
            <p className="title-13">
              Abby love to see the nature. But she doesn't like something too
              high impact or energy draining. She also loves to socialize with
              other people. What kind of cardio exercises suits her the best?
            </p>
            <p
              className="subtitle-training"
              style={{ textAlign: "center", fontSize: "15px" }}
            >
              (You can select more than one)
            </p>
            <div className="div-form">
              <label className="container-checkbox">
                Running
                <input
                  type="checkbox"
                  checked={run}
                  onClick={() => setRun(!run)}
                ></input>
                <span className="checkmark"></span>
              </label>
              <label className="container-checkbox">
                Walking
                <input
                  type="checkbox"
                  checked={walk}
                  onClick={() => setWalk(!walk)}
                ></input>
                <span className="checkmark"></span>
              </label>
              <label className="container-checkbox">
                Cycling
                <input
                  type="checkbox"
                  checked={cycle}
                  onClick={() => setCycle(!cycle)}
                ></input>
                <span className="checkmark"></span>
              </label>
              <label className="container-checkbox">
                Swimming
                <input
                  type="checkbox"
                  checked={swim}
                  onClick={() => setSwim(!swim)}
                ></input>
                <span className="checkmark"></span>
              </label>
              <button
                className="button btn-form"
                onClick={() => handleSubmitQuiz()}
                style={{ textAlign: "center", alignContent: "center" }}
              >
                <div className="primary-pink">
                  <div className="title-2">Submit</div>
                </div>
              </button>
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
                  <div className="primary-brown-large">
                    <div className="title-2">Go to Myths➡️ </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="container-3">
          <p className="title-footer">HelpAbby © 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default TrainingPage;

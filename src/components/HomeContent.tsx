import React, { Component } from "react";
import "../style.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class HomeContent extends Component {
  render() {
    return (
      <div className="page">
        <Navbar></Navbar>
        <div className="section">
          <div className="container">
            <div className="subtitle">
              Are you an admin?
              <Link
                to="http://127.0.0.1:8000/admin/login"
                target="__blank"
                className="subtitle"
              >
                Click here
              </Link>
            </div>
            <div className="text-wrapper">Help Abby Get Healthy!</div>
            <p className="div-text">
              Join Abby&#39;s journey to overcome her weight issues and adopt a
              healthy lifestyle.
            </p>
            <Link to="/food">
              <button className="button">
                <div className="primary-pink">
                  <div className="title-2">Start Now</div>
                </div>
              </button>
            </Link>
          </div>
          <div className="image-container">
            <img src="src\assets\images\kid-tree.png" />
          </div>
        </div>
        <div className="section">
          <div className="image-wrapper">
            <img src="src\assets\images\abby-hello.gif" className="image" />
          </div>
          <div className="container">
            <div className="text-wrapper">Meet Abby</div>
            <p className="div-text">
              Abby is a cheerful little girl who loves to eat junk food and play
              games. However, her love for unhealthy snacks has led to weight
              gain.
            </p>
            <div className="list">
              <div className="row">
                <div className="article">
                  <div className="div-wrapper">
                    <img
                      src="src\assets\images\pizza.png"
                      className="image-2"
                    />
                  </div>
                  <div className="frame">
                    <div className="title-3">Abby&#39;s Favorite Foods</div>
                    <p className="div-text">
                      Abby enjoys burgers, pizza, ice cream, and soda. These
                      foods are tasty, but they are not good for her health.
                    </p>
                    <div className="selection">
                      <div className="label-normal">
                        <div className="label-text">Junk Food</div>
                      </div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img
                          src="src\assets\images\abby-logo.png"
                          className="ava-2"
                        />
                        <div className="title-wrapper">
                          <div className="title-4-avatar">Abby</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-ref">
                    <p className="subtitle-calculator">
                      <a
                        href="https://iconscout.com/3d-illustrations/pizza"
                        className="ref-link"
                        target="_blank"
                      >
                        Pizza
                      </a>{" "}
                      by{" "}
                      <a
                        href="https://iconscout.com/contributors/morpvin"
                        className="ref-link"
                        target="_blank"
                      >
                        Voxnoru
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="article">
                  <div className="div-wrapper">
                    <img
                      src="src\assets\images\scared-mind.png"
                      className="image-2"
                    />
                  </div>
                  <div className="frame">
                    <div className="title-3">Reality Check</div>
                    <p className="div-text">
                      During a school check-up, Abby was shocked to learn that
                      she is considered overweight by her doctor. It&#39;s time
                      for a change!
                    </p>
                    <div className="selection">
                      <div className="label-normal">
                        <div className="label-text">Overweight</div>
                      </div>
                      <div className="label-normal">
                        <div className="label-text">Health Concern</div>
                      </div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img
                          src="src\assets\images\doctor-1.png"
                          className="ava-2"
                        />
                        <div className="title-wrapper">
                          <div className="title-4-avatar">School Doctor</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-ref">
                    <p className="subtitle-calculator">
                      <a
                        href="https://iconscout.com/3d-illustrations/scared-mind"
                        className="ref-link"
                        target="_blank"
                      >
                        Scared Mind
                      </a>{" "}
                      by{" "}
                      <a
                        href="https://iconscout.com/contributors/flowicon"
                        className="ref-link"
                      >
                        Flowicon
                      </a>{" "}
                      on{" "}
                      <a href="https://iconscout.com" className="ref-link">
                        IconScout
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="article">
                  <div className="div-wrapper">
                    <img src="src\assets\images\note.png" className="image-2" />
                  </div>
                  <div className="frame">
                    <div className="title-3">Physical Challenges</div>

                    <p className="div-text">
                      During a physical education class, Abby struggled to run,
                      felt out of breath, and got dizzy. It&#39;s important for
                      her to improve her fitness level.
                    </p>
                    <div className="selection">
                      <div className="label-normal">
                        <div className="label-text">Fitness</div>
                      </div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img
                          src="src\assets\images\pe-teach.png"
                          className="ava-2"
                        />
                        <div className="title-wrapper">
                          <div className="title-4-avatar">PE Teacher</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-ref">
                    <p className="subtitle-calculator">
                      <a
                        href="https://iconscout.com/3d-illustrations/notes"
                        className="ref-link"
                        target="_blank"
                      >
                        Notes
                      </a>{" "}
                      by{" "}
                      <a
                        href="https://iconscout.com/contributors/ncrte3d"
                        className="ref-link"
                      >
                        Naufal Imaanullah
                      </a>{" "}
                      on{" "}
                      <a href="https://iconscout.com" className="ref-link">
                        IconScout
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="article">
                  <div className="div-wrapper">
                    <img src="src\assets\images\sad.png" className="image-2" />
                  </div>
                  <div className="frame">
                    <div className="title-3">Feeling Sad</div>
                    <p className="div-text">
                      Abby feels sad about her current health and body. But
                      don&#39;t worry, with your help, she can turn things
                      around!
                    </p>
                    <div className="selection">
                      <div className="label-normal">
                        <div className="label-text">Emotional Well-being</div>
                      </div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img
                          src="src\assets\images\abby-logo.png"
                          className="ava-2"
                        />
                        <div className="title-wrapper">
                          <div className="title-4-avatar">Abby</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-ref">
                    <p className="subtitle-calculator">
                      <a
                        href="https://iconscout.com/3d-illustrations/emoji"
                        className="ref-link"
                        target="_blank"
                      >
                        Emoji
                      </a>{" "}
                      by{" "}
                      <a
                        href="https://iconscout.com/contributors/zusma-gotama"
                        className="ref-link"
                      >
                        ZuGo Studio
                      </a>{" "}
                      on{" "}
                      <a href="https://iconscout.com" className="ref-link">
                        IconScout
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="article">
                  <div className="div-wrapper">
                    <img src="src\assets\images\fist.png" className="image-2" />
                  </div>
                  <div className="frame">
                    <div className="title-3">Getting Motivated</div>
                    <p className="div-text">
                      Abby is ready to make a change and start her journey
                      towards a healthier lifestyle. Are you willing to help
                      Abby too?
                    </p>
                    <div className="selection">
                      <div className="label-normal">
                        <div className="label-text">Motivation</div>
                      </div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img
                          src="src\assets\images\abby-logo.png"
                          className="ava-2"
                        />
                        <div className="title-wrapper">
                          <div className="title-4-avatar">Abby</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-ref">
                    <p className="subtitle-calculator">
                      <a
                        href="https://iconscout.com/3d-illustrations/solidarity-fist"
                        className="ref-link"
                        target="_blank"
                      >
                        Solidarity Fist
                      </a>{" "}
                      by{" "}
                      <a
                        href="https://iconscout.com/contributors/welsonhendra"
                        className="ref-link"
                      >
                        Welson Hendra
                      </a>{" "}
                      on{" "}
                      <a href="https://iconscout.com" className="ref-link">
                        IconScout
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="img" alt="Vector" src="image.svg" />
        </div>
        <div className="section">
          <div className="container-wrapper">
            <div className="container-3">
              <p className="title-footer">
                HelpAbby © 2024. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContent;

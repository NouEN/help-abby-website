import React from "react";
import "../style.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export const HomeContent = (): JSX.Element => {
  return (
    <div className="page">
      <div className="top-bar">
        <div className="rectangle" />
        <div className="title">HelpAbby</div>
        <Navbar></Navbar>
      </div>
      <div className="section">
        <div className="container">
          <div className="subtitle">
            Are you an admin?
            <Link to="/adminLogin" className="subtitle">
              Click here
            </Link>
          </div>
          <div className="text-wrapper">Help Abby Get Healthy!</div>
          <p className="div">
            Join Abby&#39;s journey to overcome her weight issues and adopt a
            healthy lifestyle.
          </p>
          <button className="button">
            <div className="primary">
              <div className="title-2">Start Now</div>
            </div>
          </button>
        </div>
        <div className="image-container">
          <div className="image" />
        </div>
        <img className="vector" alt="Vector" src="vector-200.svg" />
      </div>
      <div className="section">
        <div className="image-wrapper">
          <div className="image" />
        </div>
        <div className="container">
          <div className="text-wrapper">Meet Abby</div>
          <p className="div">
            Abby is a cheerful little girl who loves to eat junk food and play
            games. However, her love for unhealthy snacks has led to weight
            gain.
          </p>
          <div className="list">
            <div className="row">
              <div className="article">
                <div className="div-wrapper">
                  <div className="image-2" />
                </div>
                <div className="frame">
                  <div className="title-3">Abby&#39;s Favorite Foods</div>
                  <p className="div">
                    Abby enjoys burgers, pizza, ice cream, and soda. These foods
                    are tasty, but they are not good for her health.
                  </p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Junk Food</div>
                    </div>
                  </div>
                  <div className="user">
                    <div className="avatar">
                      <div className="avatar-2" />
                      <div className="title-wrapper">
                        <div className="title-4">Abby</div>
                      </div>
                    </div>
                    <div className="icon-buttons">
                      <div className="icon">😊</div>
                      <div className="icon">👍</div>
                      <div className="icon">💪</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="div-wrapper">
                  <div className="image-2" />
                </div>
                <div className="frame">
                  <div className="title-3">Reality Check</div>
                  <p className="div">
                    During a school check-up, Abby was shocked to learn that she
                    is considered overweight by her doctor. It&#39;s time for a
                    change!
                  </p>
                  <div className="user">
                    <div className="avatar">
                      <div className="avatar-2" />
                      <div className="title-wrapper">
                        <div className="title-4">School Doctor</div>
                      </div>
                    </div>
                    <div className="icon-buttons">
                      <div className="icon">😊</div>
                      <div className="icon">👍</div>
                      <div className="icon">💪</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="div-wrapper">
                  <div className="image-2" />
                </div>
                <div className="frame">
                  <div className="title-3">Physical Challenges</div>
                  <div className="subtitle">PE Class</div>
                  <p className="div">
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
                      <div className="avatar-2" />
                      <div className="title-wrapper">
                        <div className="title-4">PE Teacher</div>
                      </div>
                    </div>
                    <div className="icon-buttons">
                      <div className="icon">😊</div>
                      <div className="icon">👍</div>
                      <div className="icon">💪</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="div-wrapper">
                  <div className="image-2" />
                </div>
                <div className="frame">
                  <div className="title-3">Feeling Sad</div>
                  <p className="div">
                    Abby feels sad about her current health and body. But
                    don&#39;t worry, with your help, she can turn things around!
                  </p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Emotional Well-being</div>
                    </div>
                  </div>
                  <div className="user">
                    <div className="avatar">
                      <div className="avatar-2" />
                      <div className="title-wrapper">
                        <div className="title-4">Abby</div>
                      </div>
                    </div>
                    <div className="icon-buttons">
                      <div className="icon">😊</div>
                      <div className="icon">👍</div>
                      <div className="icon">💪</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="div-wrapper">
                  <div className="image-2" />
                </div>
                <div className="frame">
                  <div className="title-3">Getting Motivated</div>
                  <p className="div">
                    Abby is ready to make a change and start her journey towards
                    a healthier lifestyle. Are you willing to help Abby too?
                  </p>
                  <div className="user">
                    <div className="avatar">
                      <div className="avatar-2" />
                      <div className="title-wrapper">
                        <div className="title-4">Abby</div>
                      </div>
                    </div>
                    <div className="icon-buttons">
                      <div className="icon">😊</div>
                      <div className="icon">👍</div>
                      <div className="icon">💪</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="img" alt="Vector" src="image.svg" />
      </div>

      <div className="container-wrapper">
        <div className="container-3">
          <p className="title-1">HelpAbby © 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;

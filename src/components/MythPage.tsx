import React, { Component } from "react";
import Navbar from "./Navbar";
import "../style.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type Myth = {
  id: number;
  mythDesc: string;
  factDesc: string;
  source: string;
};

function MythPage() {
  const [mythList, setMythList] = useState([]);
  const [mythClicked, setMythClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const apiURL = "http://127.0.0.1:8000/myths";
  const fetchData = async () => {
    const response = await axios.get(apiURL);
    console.log(response);
    setMythList(response.data);
    console.log(mythList);
    console.log(response.data);
  };

  const handleMythClicked = async () => {
    setMythClicked(!mythClicked);
  };
  return (
    <div className="page">
      <Navbar></Navbar>
      <div className="section">
        <div className="container">
          <div className="text-wrapper-title">Myths and Facts</div>
          <div className="title-13-what-to-eat">
            Dispelling common misconceptions about health and fitness
          </div>
          <div className="div">
            <div
              className="button-eat-container"
              hidden={mythClicked ? true : false}
            >
              <button
                className="button btn-eat"
                onClick={() => handleMythClicked()}
              >
                <div className="primary-pink-large">
                  <div className="title-2">Reveal the facts </div>
                </div>
              </button>
            </div>
            <div
              className="button-eat-container"
              hidden={mythClicked ? false : true}
            >
              <button
                className="button btn-eat"
                onClick={() => handleMythClicked()}
              >
                <div className="primary-brown-large">
                  <div className="title-2">Hide the facts </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {mythList.map((myth: Myth, index) => (
        <div className="section">
          <div className="container">
            <div className="text-wrapper-myth">Myth #{myth.id}</div>
            <p className="myth-desc">{myth.mythDesc}</p>
          </div>
          <div
            className="list-myth"
            hidden={mythClicked === true ? false : true}
          >
            <div className="myth-item">
              <div className="myth-div">
                <div className="text-wrapper-myth">Fact</div>
                <div className="div-fact">{myth.factDesc}</div>
              </div>
              <p className="subtitle-myth">Source : {myth.source}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="title-footer">More myths to be debunked coming soon!</div>
      <div className="container-wrapper">
        <div className="container-3">
          <p className="title-footer">HelpAbby © 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default MythPage;

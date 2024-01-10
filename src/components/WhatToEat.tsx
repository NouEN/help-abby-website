import React, { Component } from "react";
import "./WhatToEat.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

type FoodProps = {
  foodId: string;
  foodName: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
};

function WhatToEat(props: FoodProps) {
  return (
    <div className="page">
      <div className="section">
        <div className="container">
          <div className="subtitle">
            <Link to="/food" className="subtitle">
              ⬅️Back to Food
            </Link>
          </div>
          <div className="title-page">Weight Loss Meal Plan</div>
          <p className="title-13">
            Here is an example of a weight loss meal plan for 1700 calories for
            Abby.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="title-14">Recommended Meals</div>
          <div className="list">
            <div className="row">
              <div className="article">
                <div className="frame">
                  <div className="title-3">Breakfast</div>
                  <p className="subtitle">{props.calories} calories</p>
                  <p className="div">{props.foodName}</p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Healthy Food</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="frame">
                  <div className="title-3">Lunch</div>
                  <p className="subtitle">{props.calories} calories</p>
                  <p className="div">{props.foodName}</p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Healthy Food</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="frame">
                  <div className="title-3">Dinner</div>
                  <p className="subtitle">{props.calories} calories</p>
                  <p className="div">{props.foodName}</p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Healthy Food</div>
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
          <div className="title-14">Additional Supplements</div>
          <p className="div">Some supplements to support weight loss</p>
          <div className="list-image">
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="text-wrapper">Image of multivitamin</div>
                  <div className="tag">
                    <div className="text">Vitamins</div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <div className="div">Multivitamins</div>
                <div className="subtitle">Provides essential nutrients</div>
                <div className="icon-buttons">
                  <div className="icon">💊</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="text-wrapper">Image of multivitamin</div>
                  <div className="tag">
                    <div className="text">Vitamins</div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <div className="div">Multivitamins</div>
                <div className="subtitle">Provides essential nutrients</div>
                <div className="icon-buttons">
                  <div className="icon">💊</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="text-wrapper">Image of multivitamin</div>
                  <div className="tag">
                    <div className="text">Vitamins</div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <div className="div">Multivitamins</div>
                <div className="subtitle">Provides essential nutrients</div>
                <div className="icon-buttons">
                  <div className="icon">💊</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="text-wrapper">Image of multivitamin</div>
                  <div className="tag">
                    <div className="text">Vitamins</div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <div className="div">Multivitamins</div>
                <div className="subtitle">Provides essential nutrients</div>
                <div className="icon-buttons">
                  <div className="icon">💊</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="container-3">
          <p className="title-1">HelpAbby © 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default WhatToEat;

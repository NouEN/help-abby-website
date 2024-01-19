import React, { Component } from "react";
import "../style.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

type FoodProps = {
  foodId: string;
  foodName: string;
  calories: number;
  category: string;
  carbs: number;
  protein: number;
  fat: number;
};

function WhatToEat(props: FoodProps) {
  return (
    <div className="page">
      <div className="section">
        <div className="container">
          <div>
            <Link to="/food" className="title-9">
              ⬅️Back to Food
            </Link>
          </div>
          <div className="text-wrapper-title">Weight Loss Meal Plan</div>
          <p className="title-13">
            Here is an example of a weight loss meal plan for 1700 calories for
            Abby.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="list">
            <div className="row">
              <div className="article">
                <div className="frame">
                  <div className="title-3">Breakfast</div>
                  <p className="subtitle">445kcal</p>
                  <ul>
                    <li>Scrambled egg (200g) 298kcal</li>
                    <li>Whole wheat bread (50g) 131kcal</li>
                    <li>Saus sambal ABC (20g) 62kkal</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="frame">
                  <div className="title-3">Lunch</div>
                  <p className="subtitle">383kcal</p>
                  <ul>
                    <li>White rice, cooked (100g) 130kcal</li>
                    <li>Grilled chicken breast (100g) 131kcal</li>
                    <li>Stir fry bokchoy (little bit of oil) (50g) 102kkal</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="frame">
                  <div className="title-3">Dinner</div>
                  <p className="subtitle">383kcal</p>
                  <ul>
                    <li>White rice, cooked (100g) 130kcal</li>
                    <li>White fish fillet, raw (150g) 258kcal</li>
                    <li>Stir fry broccoli (little bit of oil) (85g) 144kkal</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="frame">
                  <div className="title-3">Snacks</div>
                  <p className="subtitle">206kcal</p>
                  <ul>
                    <li>Papaya (200g) 86kcal</li>
                    <li>Whey protein powder (30g) 120kcal</li>
                    <li>Granola (30g) 139kcal</li>
                  </ul>
                </div>
              </div>
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

export default WhatToEat;

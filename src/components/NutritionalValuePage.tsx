import React, { Component } from "react";
import AdminNavbar from "./AdminNavbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface Food {
  foodId: number;
  foodName: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  source: string;
}

function NutritionalValuePage() {
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const apiURL = "http://127.0.0.1:8000/food/foodlist";
  const fetchData = async () => {
    const response = await axios.get(apiURL);
    console.log(response);
    setFoodList(response.data);
    console.log(foodList);
    console.log(response.data);
  };
  return (
    <div className="main-section">
      <h1>All Books</h1>
      <div className="list">
        {foodList.map((food: Food, index) => (
          <ul>
            <li>Food Name: {food.foodName}</li>
            <li>Calories: {food.calories}</li>
            <li>Carbs: {food.carbs}</li>
            <li>Protein: {food.protein}</li>
            <li>Fats: {food.fat}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default NutritionalValuePage;

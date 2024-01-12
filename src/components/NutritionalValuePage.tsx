import React, { Component } from "react";
import AdminNavbar from "./AdminNavbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import ReactPaginate from "react-paginate";

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
  const [itemOffset, setItemOffset] = useState(0);

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

  const endOffset = itemOffset + 5;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const foodListSliced = foodList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(foodList.length / 5);
  const handleClickPage = (event) => {
    const newOffset = (event.selected * 10) % foodList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="page">
      <div className="section">
        <div className="container">
          <div className="subtitle">
            <Link to="/food" className="subtitle">
              ⬅️Back to Food
            </Link>
          </div>
          <h1 className="title-page">Nutritional Value of Foods</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="list">
            {foodListSliced.map((food: Food, index) => (
              <div className="row">
                <div className="article">
                  <div className="frame">
                    <div className="icon">⭐</div>
                    <div className="title-3">{food.foodName}</div>
                    <div className="subtitle"> {food.calories} kcal (100g)</div>
                    <div className="div">Carbs: {food.carbs}g </div>
                    <div className="div">Protein: {food.protein}g </div>
                    <div className="div">Fats: {food.fat}g </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              onPageChange={handleClickPage}
              pageCount={pageCount}
              previousLabel="Prev"
              renderOnZeroPageCount={null}
              className="paginate"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutritionalValuePage;

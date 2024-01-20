import React, { Component } from "react";
import AdminNavbar from "./AdminNavbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

interface Food {
  foodId: number;
  foodName: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  category: string;
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

  const [filterStr, setFilterStr] = useState("");
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="section">
        <div className="container">
          <div>
            <a onClick={() => navigate(-1)} className="title-9">
              ⬅️Back to Food
            </a>
          </div>
          <h1 className="text-wrapper-title">Nutritional Value of Foods</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <input
            type="text"
            value={filterStr}
            onChange={(e) => setFilterStr(e.target.value)}
            placeholder="Search food name.."
            className="input-nutritional-value"
          />
          <div className="list">
            {foodList
              .filter(function filterFood(food: Food) {
                if (filterStr === "") {
                  return foodList;
                }
                return food.foodName
                  .toLowerCase()
                  .includes(filterStr.toLowerCase());
              })
              .map((food: Food, index) => (
                <div className="row">
                  <div className="article-nutrition">
                    <div className="frame">
                      <div className="icon">⭐</div>
                      <div className="title-3">{food.foodName}</div>
                      <div className="div">{food.category}</div>
                      <div className="subtitle">
                        {" "}
                        {food.calories} kcal (100g)
                      </div>
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
      <div className="container-wrapper">
        <div className="container-3">
          <p className="title-footer">HelpAbby © 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default NutritionalValuePage;

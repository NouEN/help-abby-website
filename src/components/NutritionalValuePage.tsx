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
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = foodList.slice(startIndex, endIndex);

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
    setTotalPages(Math.ceil(response.data.length / itemsPerPage));
  };
  const [filterStr, setFilterStr] = useState("");
  const navigate = useNavigate();

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="page">
      <div className="section">
        <div className="container">
          <div>
            <a onClick={() => navigate(-1)} className="title-9-what-to-eat">
              ⬅️Back to Food
            </a>
          </div>
          <h1 className="text-wrapper-title-nutritional-value">
            Nutritional Value of Foods
          </h1>
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
            {(filterStr === "" ? subset : foodList)
              .filter(function filterFood(food: Food) {
                if (filterStr === "") {
                  return subset;
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
            <div className="pagination-container">
              <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageChange}
                forcePage={currentPage}
                breakLabel="..."
                containerClassName="paginate"
                pageClassName="page-item"
                previousLabel="Prev"
                previousLinkClassName="prev-label"
                nextLabel="Next"
                nextLinkClassName="next-label"
              />
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

export default NutritionalValuePage;

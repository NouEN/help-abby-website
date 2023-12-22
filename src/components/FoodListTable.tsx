import React, { Component } from "react";
import AdminNavbar from "./AdminNavbar";

interface Food {
  foodId: number;
  foodName: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  source: string;
}

class FoodListTable extends Component<Food> {
  items = [
    {
      foodId: 1,
      foodName: "Abc",
      calories: 0,
      carbs: 0,
      protein: 0,
      fat: 0,
      source: "nowhere",
    },
    {
      foodId: 2,
      foodName: "Abc",
      calories: 0,
      carbs: 0,
      protein: 0,
      fat: 0,
      source: "nowhere",
    },
  ] as Food[];
  state = {
    newFood: {
      foodId: 0,
      foodName: "",
      calories: 0,
      carbs: 0,
      protein: 0,
      fat: 0,
      source: "",
    } as Food,
  };

  handleAddFood = () => {
    this.setState((prevState) => ({
      newFood: {
        foodId: 0,
        foodName: "Food A",
        calories: 0,
        carbs: 0,
        protein: 0,
        fat: 0,
        source: "",
      },
    }));
  };

  render() {
    return (
      <div>
        <AdminNavbar></AdminNavbar>
        <button type="button" onClick={this.handleAddFood}>
          Register Food
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Food ID</th>
              <th>Food Name</th>
              <th>Calories</th>
              <th>Carbs</th>
              <th>Protein</th>
              <th>Fats</th>
              <th>Source</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.items.map((oneFood) => {
              return (
                <tr key={oneFood.foodId}>
                  <td>{oneFood.foodId}</td>
                  <td>{oneFood.foodName}</td>
                  <td>{oneFood.calories}</td>
                  <td>{oneFood.carbs}</td>
                  <td>{oneFood.protein}</td>
                  <td>{oneFood.fat}</td>
                  <td>{oneFood.source}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FoodListTable;

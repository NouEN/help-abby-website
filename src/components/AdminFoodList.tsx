import AdminNavbar from "./AdminNavbar";
import React from "react";

type Food = {
  foodId: String;
  foodName: String;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  source: String;
};

class AdminFoodList extends React.Component {
  render() {
    return (
      <div>
        <AdminNavbar></AdminNavbar>
        <div>
          <h1>Food List</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const dummyData = () => {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push({
      id: i,
      foodName: `Item ${i}`,
      calories: 25 * (i + 1),
      carbs: 25 * (i + 1),
      protein: 25 * (i + 1),
      fat: 25 * (i + 1),
      source: "www.google.com",
    });
  }
  return items;
};

export default AdminFoodList;

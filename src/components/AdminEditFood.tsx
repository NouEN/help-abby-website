import React, { Component } from "react";
import "../style.css";
import AdminNavbar from "./AdminNavbar";

export class AdminEditFood extends Component {
  render() {
    return (
      <div>
        <AdminNavbar></AdminNavbar>
        <div className="food-list-edit">
          <div className="edit-food-details-wrapper">
            <div className="edit-food-details">
              <div className="overlap">
                <div className="save-food">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="text-wrapper">Save</div>
                  </div>
                </div>
                <div className="protein-name-fields">
                  <div className="div" />
                  <div className="text-wrapper-2">Source</div>
                </div>
                <div className="text-wrapper-3">Edit Food Details</div>
                <div className="food-name-fields">
                  <div className="rectangle-2" />
                  <div className="text-wrapper-2">Food Name</div>
                </div>
                <div className="calories-name-fields">
                  <div className="rectangle-2" />
                  <div className="text-wrapper-2">Calories</div>
                </div>
                <div className="calories-name-fields-2">
                  <div className="rectangle-2" />
                  <div className="text-wrapper-2">Carbs</div>
                </div>
                <div className="protein-name-fields-2">
                  <div className="rectangle-2" />
                  <div className="text-wrapper-2">Protein</div>
                </div>
                <div className="protein-name-fields-3">
                  <div className="rectangle-2" />
                  <div className="text-wrapper-2">Fat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

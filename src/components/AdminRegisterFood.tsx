import React from "react";
import "../style.css";
import AdminNavbar from "./AdminNavbar";

export const RegisterFood = () => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <div className="register-food">
        <div className="div">
          <div className="overlap">
            <div className="text-wrapper">Register Food</div>
            <div className="text-wrapper">Register Food</div>
          </div>
          <div className="overlap-group">
            <p className="fill-in-the-food">
              Fill in the food nutritional details&nbsp;&nbsp;below
            </p>
            <p className="fill-in-the-food">
              Fill in the food nutritional details&nbsp;&nbsp;below
            </p>
          </div>
          <div className="frame">
            <div className="one-field">
              <div className="text-wrapper-2">Name :</div>
              <div className="rectangle" />
            </div>
            <div className="one-field-2">
              <div className="text-wrapper-2">Carbs :</div>
              <div className="rectangle-2" />
            </div>
            <div className="one-field-3">
              <div className="text-wrapper-2">Calories :</div>
              <div className="rectangle" />
            </div>
            <div className="one-field-4">
              <div className="text-wrapper-2">Protein :</div>
              <div className="rectangle-2" />
            </div>
            <div className="one-field-5">
              <div className="text-wrapper-2">Fat :</div>
              <div className="rectangle" />
            </div>
            <div className="one-field-6">
              <div className="text-wrapper-2">Source :</div>
              <div className="rectangle-2" />
            </div>
            <button className="submit-button">
              <div className="group">
                <div className="div-wrapper">
                  <div className="text-wrapper-3">SUBMIT</div>
                </div>
              </div>
            </button>
          </div>
          <div className="rectangle-wrapper">
            <div className="rectangle-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFood;

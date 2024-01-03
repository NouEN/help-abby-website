import React, { Component } from "react";
import Navbar from "./Navbar";
import "../style.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

type Myth = {
  mythDesc: string;
  factDesc: string;
  source: string;
};

function MythPage() {
  const [mythList, setMythList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const apiURL = "http://127.0.0.1:8000/myths";
  const fetchData = async () => {
    const response = await axios.get(apiURL);
    console.log(response);
    setMythList(response.data);
    console.log(mythList);
    console.log(response.data);
  };
  return (
    <div className="page">
      <Navbar></Navbar>
      <div className="section">
        <div className="container">
          <div className="text-wrapper-title">Myths and Facts</div>
          <div className="p-text-wrapper">
            Dispelling common misconceptions about health and fitness
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="book-list">
            {mythList.map((myth, index) => (
              <ul>
                <li>{myth.id}</li>
                <li>Myth Name: {myth.mythDesc}</li>
                <li>Calories: {myth.factDesc}</li>
              </ul>
            ))}
            {mythList.map((myth: Myth, index) => (
              <p>{myth.source}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  // render() {
  //   return (
  //     <div className="page">
  //       <Navbar></Navbar>

  //       <div className="section">
  //         <div className="container">
  //           <div className="text-wrapper-title">Myths and Facts</div>
  //           <div className="p-text-wrapper">
  //             Dispelling common misconceptions about health and fitness
  //           </div>
  //         </div>
  //       </div>
  //       <div className="section">
  //         <div className="container">
  //           <div className="title-myth">Myth {this.props.mythId}</div>
  //           <p className="p">{this.props.mythDesc}</p>
  //         </div>
  //         <div className="container">
  //           <div className="list-2">
  //             <div className="item">
  //               <div className="frame-2">
  //                 <div className="subtitle">Fact</div>
  //               </div>
  //               <p className="subtitle-2">{this.props.factDesc}</p>
  //               <p className="subtitle-2">Source : {this.props.source}</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}

export default MythPage;
import React, { Component } from "react";
import Navbar from "./Navbar";
import "../style.css";
import PropTypes from "prop-types";

type MythProps = {
  mythId: string;
  mythDesc: string;
  factDesc: string;
  source: string;
};

class MythPage extends Component<MythProps> {
  render() {
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
            <div className="title-myth">Myth {this.props.mythId}</div>
            <p className="p">{this.props.mythDesc}</p>
          </div>
          <div className="container">
            <div className="list-2">
              <div className="item">
                <div className="frame-2">
                  <div className="subtitle">Fact</div>
                </div>
                <p className="subtitle-2">{this.props.factDesc}</p>
                <p className="subtitle-2">Source : {this.props.source}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MythPage;

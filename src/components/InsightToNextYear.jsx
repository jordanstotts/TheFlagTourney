//NOTES
//update insights


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/InsightToNextYear.css";
import SiteNavBar from "./SiteNavBar";

export default function InsightToNextYear() {
  return (
    <div className="predictionPage">
      <SiteNavBar />
      <h1 className="predictionsHeader">Insight To Next Year</h1>
      <div className="predictionLayout">
        <div className="ourPredictions">
          <p id="predictionName">Austin's prediction:</p>
          <div>
            <p id="prediction">Boot: Austin</p>
            <p id="prediction">2nd: Connor</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Jordan</p>
            <p id="prediction">Flag: Grant</p>
          </div>
        </div>
        <div className="ourPredictions">
          <p id="predictionName">Connor's prediction:</p>
          <div>
            <p id="prediction">Boot: Connor</p>
            <p id="prediction">2nd: Austin</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Jordan</p>
            <p id="prediction">5th: Derrick</p>
            <p id="prediction">Flag: Grant</p>
          </div>
        </div>
        <div className="ourPredictions">
          <p id="predictionName">Derrick's prediction:</p>
          <div>
            <p id="prediction">Boot: Jordan</p>
            <p id="prediction">2nd: Austin</p>
            <p id="prediction">3rd: Derrick</p>
            <p id="prediction">4th: Connor</p>
            <p id="prediction">5th: Grant</p>
            <p id="prediction">Flag: Ryan</p>
          </div>
        </div>
        <div className="ourPredictions">
          <p id="predictionName">Grant's prediction:</p>
          <div>
            <p id="prediction">Boot: Austin</p>
            <p id="prediction">2nd: Connor</p>
            <p id="prediction">3rd: Grant</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Jordan</p>
            <p id="prediction">Flag: Ryan</p>
          </div>
        </div>
        <div className="ourPredictions">
          <p id="predictionName">Jordan's prediction:</p>
          <div>
            <p id="prediction">Boot: Jordan</p>
            <p id="prediction">2nd: Ryan</p>
            <p id="prediction">3rd: Austin</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Grant</p>
          </div>
        </div>
        <div className="ourPredictions">
          <p id="predictionName">Ryan's prediction:</p>
          <div>
            <p id="prediction">Boot: Austin</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Connor</p>
            <p id="prediction">4th: Ryan</p>
            <p id="prediction">5th: Grant</p>
            <p id="prediction">Flag: Derrick</p>
          </div>
        </div>
      </div>
    </div>
  );
};
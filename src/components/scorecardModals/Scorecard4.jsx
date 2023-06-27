import React from "react";
import scorecard4 from "../scorecardModals/theflag_2016card.jpg";
import "./Scorecard.css";

export default function Scorecard4({closeModal4}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard4} alt="2016 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal4(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
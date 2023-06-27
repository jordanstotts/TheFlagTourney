import React from "react";
import scorecard3 from "../scorecardModals/theflag_2015card.jpg";
import "./Scorecard.css";

export default function Scorecard3({closeModal3}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard3} alt="2015 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal3(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
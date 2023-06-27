import React from "react";
import scorecard6 from "../scorecardModals/theflag_2018card.jpg";
import "./Scorecard.css";

export default function Scorecard6({closeModal6}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard6} alt="2018 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal6(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
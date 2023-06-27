import React from "react";
import scorecard5 from "../scorecardModals/theflag_2017card.jpg";
import "./Scorecard.css";

export default function Scorecard5({closeModal5}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard5} alt="2017 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal5(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
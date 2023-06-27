import React from "react";
import scorecard10 from "../scorecardModals/theflag_2022card.jpeg";
import "./Scorecard.css";

export default function Scorecard10({closeModal10}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard10} alt="2022 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal10(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
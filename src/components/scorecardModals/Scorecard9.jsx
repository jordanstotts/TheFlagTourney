import React from "react";
import scorecard9 from "../scorecardModals/theflag_2021card.jpg";
import "./Scorecard.css";

export default function Scorecard9({closeModal9}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src={scorecard9} alt="2021 scorecard" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal9(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
//NOTES


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/FlagRecipients.css";
import SiteNavBar from "./SiteNavBar";
import Scorecard1 from "./scorecardModals/Scorecard1";
import Scorecard2 from "./scorecardModals/Scorecard2";
import Scorecard3 from "./scorecardModals/Scorecard3";
import Scorecard4 from "./scorecardModals/Scorecard4";
import Scorecard5 from "./scorecardModals/Scorecard5";
import Scorecard6 from "./scorecardModals/Scorecard6";
import Scorecard7 from "./scorecardModals/Scorecard7";
import Scorecard8 from "./scorecardModals/Scorecard8";
import Scorecard9 from "./scorecardModals/Scorecard9";
import Scorecard10 from "./scorecardModals/Scorecard10";
import flag2013 from "../FlagSitePics/theflag_2013flag.jpg";
import flag2014 from "../FlagSitePics/theflag_2014flag.jpg";
import flag2015 from "../FlagSitePics/theflag_2015flag.jpg";
import flag2016 from "../FlagSitePics/theflag_2016flag.jpg";
import flag2017 from "../FlagSitePics/theflag_2017flag.jpg";
import flag2018 from "../FlagSitePics/theflag_2018flag.jpg";
import flag2019 from "../FlagSitePics/theflag_2019flag.jpg";
import flag2020 from "../FlagSitePics/theflag_2020flag.jpg";
import flag2021 from "../FlagSitePics/theflag_2021flag.jpg";
import flag2022 from "../FlagSitePics/theflag_2022flag.jpeg";

export default function FlagRecipients() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);
  const [openModal7, setOpenModal7] = useState(false);
  const [openModal8, setOpenModal8] = useState(false);
  const [openModal9, setOpenModal9] = useState(false);
  const [openModal10, setOpenModal10] = useState(false);

  return (
    <div className="flagRecipientPage">
      <SiteNavBar />
      <h1 className="flagRecipientHeader">Flag Recipients</h1>
      <div className="flagRecipientLayout">
        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Grant Luther</p>
            <p>Toad Valley</p>
            <p>2013</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2013}
          />

          <button className="openModalBtn" onClick={() => setOpenModal1(true)}>
            Scorecard
          </button>
          {openModal1 && <Scorecard1 closeModal1={setOpenModal1} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Derrick Wiley</p>
            <p>The Legacy Golf Club</p>
            <p>2014</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2014}
          />
          <button className="openModalBtn" onClick={() => setOpenModal2(true)}>
            Scorecard
          </button>
          {openModal2 && <Scorecard2 closeModal2={setOpenModal2} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Grant Luther</p>
            <p>Honey Creek Golf Club</p>
            <p>2015</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2015}
          />
          <button className="openModalBtn" onClick={() => setOpenModal3(true)}>
            Scorecard
          </button>
          {openModal3 && <Scorecard3 closeModal3={setOpenModal3} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Derrick Wiley</p>
            <p>Bos Landen Golf Club</p>
            <p>2016</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2016}
          />
          <button className="openModalBtn" onClick={() => setOpenModal4(true)}>
            Scorecard
          </button>
          {openModal4 && <Scorecard4 closeModal4={setOpenModal4} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Connor Girkin</p>
            <p>Blue Top Ridge at Riverside</p>
            <p>2017</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2017}
          />
          <button className="openModalBtn" onClick={() => setOpenModal5(true)}>
            Scorecard
          </button>
          {openModal5 && <Scorecard5 closeModal5={setOpenModal5} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Ryan Biegger</p>
            <p>Tournament Club of Iowa</p>
            <p>2018</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2018}
          />
          <button className="openModalBtn" onClick={() => setOpenModal6(true)}>
            Scorecard
          </button>
          {openModal6 && <Scorecard6 closeModal6={setOpenModal6} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Ryan Biegger</p>
            <p>Amana Colonies Golf Club</p>
            <p>2019</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2019}
          />
          <button className="openModalBtn" onClick={() => setOpenModal7(true)}>
            Scorecard
          </button>
          {openModal7 && <Scorecard7 closeModal7={setOpenModal7} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Derrick Wiley</p>
            <p>Whitebirch at Breezy Point</p>
            <p>2020</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2020}
          />
          <button className="openModalBtn" onClick={() => setOpenModal8(true)}>
            Scorecard
          </button>
          {openModal8 && <Scorecard8 closeModal8={setOpenModal8} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Derrick Wiley</p>
            <p>Quarry Oaks Golf Club</p>
            <p>2021</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2021}
          />
          <button className="openModalBtn" onClick={() => setOpenModal9(true)}>
            Scorecard
          </button>
          {openModal9 && <Scorecard9 closeModal9={setOpenModal9} />}
        </div>

        <div className="flagRecipientCard">
          <div className="flagRecipientTitle">
            <p>Connor Girkin</p>
            <p>Raven Golf Club</p>
            <p>2022</p>
          </div>
          <img
            className="flagRecipientPic"
            alt="flag recipient"
            src={flag2022}
          />
          <button className="openModalBtn" onClick={() => setOpenModal10(true)}>
            Scorecard
          </button>
          {openModal10 && <Scorecard10 closeModal10={setOpenModal10} />}
        </div>
      </div>
    </div>
  );
};
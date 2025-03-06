import React from "react";
import classes from "./Sponsors.module.css";
import country from "../../Assests/Country.png";
import learners from "../../Assests/Learners.png";
import schools from "../../Assests/Schools.png";
import faculty from "../../Assests/Faculty.png";
import certification from "../../Assests/Certification.png";
import teeside from "../../Assests/Teeside.png";
import Bank from "../../Assests/bank.png";
import Finoculus from "../../Assests/Finoculus 1.png";
import Sentienze from "../../Assests/sentienz  1.png";
import HDB from "../../Assests/HDB 1.png";
import Solution from "../../Assests/IT Solution Services 1.png";
import Neptune from "../../Assests/Neptune .png";

const Sponsors = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h2>Our Sponsors</h2>
      </div>
      
      <div className={classes.sponsor2}>
        <div className={classes.iconImage}>
          <img src={Bank} alt="icon" />
        </div>
        <div className={classes.iconImage}>
          <img src={Finoculus} alt="icon" />
        </div>
        <div className={classes.iconImage}>
          <img src={Sentienze} alt="icon" />
        </div>
        <div className={classes.iconImage}>
          <img src={HDB} alt="icon" />
        </div>
        <div className={classes.iconImage}>
          <img src={Solution} alt="icon" />
        </div>
        <div className={classes.iconImage}>
          <img src={Neptune} alt="icon" />
        </div>
      </div>
      <p>
        Disclaimer: The aforementioned companies have no obligation to recruit
        NIIT students each year
      </p>

      <div className={classes.sponsor}>
        <div className={classes.icons}>
          <div className={classes.iconImage}>
            <img src={country} alt="icon" />
          </div>
          <div className={classes.iconText}>
            <h5>PRESENT IN 40 COUNTRIES WORLDWIDE</h5>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconImage}>
            <img src={learners} alt="icon" />
          </div>
          <div className={classes.iconText}>
            <h5>IMPACTED OVER 35 MILLION LEARNERS</h5>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconImage}>
            <img src={schools} alt="icon" />
          </div>
          <div className={classes.iconText}>
            <h5>IMPACTED 17,000 SCHOOLS WORLDWIDE</h5>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconImage}>
            <img src={faculty} alt="icon" />
          </div>
          <div className={classes.iconText}>
            <h5>WE HAVE EXPERIENCED FACULTIES</h5>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconImage}>
            <img src={certification} alt="icon" />
          </div>
          <div className={classes.iconText}>
            <h5>INTERNATIONAL CERTIFICATION MAPPED COURSES</h5>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconImage}>
            <img src={teeside} alt="icon" />
          </div>
          <div className={classes.iconText}>
            <h5>TIE-UP WITH TEESIDE UNIVERSITY</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

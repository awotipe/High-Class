import React from "react";
import classes from "./AboutHome.module.css";
import Student from "../../Assests/About/about4.png";
import { Link } from "react-router-dom";

const AboutHome = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.aboutImage}>
          <img src={Student} alt="Student" />
        </div>
        <div className={classes.aboutText}>
          <h5>About Us</h5>
          <p>
            High-Class Tech Hub is a cutting-edge platform dedicated to
            empowering individuals and organizations with the skills and
            knowledge needed to thrive in the rapidly evolving technological
            landscape.
          </p>
          <p>
            We are a forward-thinking community committed to bridging the gap
            between current capabilities and future demands.
          </p>
        </div>
      </div>
      <div className={classes.aboutBtn}>
          <Link to="/aboutus">
            <button>Learn More</button>
          </Link>
      </div>
    </div>
  );
};

export default AboutHome;

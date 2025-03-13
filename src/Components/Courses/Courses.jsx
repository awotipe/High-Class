import React from "react";
import classes from "./Courses.module.css";
import Student from "../../Assests/Courses/Frontend.png";
import Student2 from "../../Assests/Courses/data.png";
import Student3 from "../../Assests/Courses/backend.png";
import { Link } from "react-router-dom";
// import { FaCalendar } from "react-icons/fa";

const Courses = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.topCourses}>
        <h3>OUR COURSES</h3>
          <p>
            Our program is designed with a project-based learning methodology,
            making it ideal for both beginers and those with prior experience.
          </p>
          <div className={classes.line}>
            <hr />
          </div>
        </div>
        <div className={classes.cardWrap}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Student} alt="Student"  className={classes.myImages}/>
              <h3 className={classes.course}>FRONTEND DEVELOPMENT</h3>
              <div className={classes.cardText}>
              <h3>FRONTEND DEVELOPMENT</h3>
                <hr/>
                <p>Duration: 4 Months</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Student2} alt="Student" className={classes.myImages} />
              <h3 className={classes.course}>DATA ANALYSIS</h3>
              <div className={classes.cardText}>
              <h3>DATA ANALYSIS</h3>
                <hr/>
                <p>Duration: 4 Months</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Student3} alt="Student" className={classes.myImages}/>
              <h3 className={classes.course}>BACKEND DEVELOPMENT</h3>
              <div className={classes.cardText}>
              <h3>BACKEND DEVELOPMENT</h3>
                <hr/>
                <p>Duration: 4 Months</p>
                <Link to="/register">
                <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.butt}>
        <Link to="/courses">
          <button>EXPLORE MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;

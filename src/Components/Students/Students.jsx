import React from "react";
import classes from "./Students.module.css";
import Student from "../../Assests/About/about.png";
import { Link } from "react-router-dom";

const Students = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h2>
          Simple Steps to Transition into Tech at High-Class Tech Hub Today!
        </h2>
        <div className={classes.studentWrap}>
          <div className={classes.studentText}>
            <div className={classes.part}>
              <div className={classes.part1}>
                <h1>1</h1>
                <hr />
              </div>
              <div className={classes.part2}>
                <h4>Discover Your Path:</h4>
                <p>
                  Explore the wide range of tech programs tailored to your
                  interests—coding, data science, cybersecurity, and more.
                </p>
              </div>
            </div>
            <div className={classes.part}>
              <div className={classes.part1}>
                <h1>2</h1>
                <hr />
              </div>
              <div className={classes.part2}>
                <h4>Enroll with Ease:</h4>
                <p>
                  Join High-Class Tech Hub and gain access to world-class
                  resources, expert mentors, and a supportive community.
                </p>
              </div>
            </div>
            <div className={classes.part}>
              <div className={classes.part1}>
                <h1>3</h1>
                <hr />
              </div>
              <div className={classes.part2}>
                <h4>Learn by Doing: </h4>
                <p>
                  Dive into hands-on projects and real-world scenarios to build
                  practical skills that employers value.
                </p>
              </div>
            </div>
            <div className={classes.part}>
              <div className={classes.part1}>
                <h1>4</h1>
                <hr />
              </div>
              <div className={classes.part2}>
                <h4>Build Your Network: </h4>
                <p>
                  Connect with industry professionals, alumni, and like-minded
                  peers to open doors to new opportunities.
                </p>
              </div>
            </div>
            <div className={classes.part}>
              <div className={classes.part1}>
                <h1>5</h1>
              </div>
              <div className={classes.part2}>
                <h4>Land Your Dream Role: </h4>
                <p>
                  With career support and guidance, step confidently into the
                  tech industry and secure your future.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.studentImage}>
            <img src={Student} alt="Students" />
          </div>
        </div>
        <div className={classes.studentButton}>
          <Link to="/register">
            <button>Enroll Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Students;

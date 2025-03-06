import React from 'react';
import classes from "./Students.module.css";
import Student from "../../Assests/register.png";
import { Link } from "react-router-dom";

const Students = () => {
    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <h2>Three Easy Steps  To Becoming An NIIT Student Today!</h2>
                <div className={classes.studentWrap}>
                    <div className={classes.studentText}>
                        <div className={classes.part}>
                            <div className={classes.part1}>
                                <h1>1</h1>
                                <hr />
                            </div>
                            <div className={classes.part2}>
                                <h4>Click the Register up button</h4>
                                <p>You can do this on both your mobile and web devices.</p>
                            </div>
                        </div>
                        <div className={classes.part}>
                            <div className={classes.part1}>
                                <h1>2</h1>
                                <hr />
                            </div>
                            <div className={classes.part2}>
                                <h4>Register within minutes</h4>
                                <p>Tell us a few details about you to help us create your transferwise account quickly.</p>
                            </div>
                        </div>
                        <div className={classes.part}>
                            <div className={classes.part1}>
                                <h1>3</h1>
                            </div>
                            <div className={classes.part2}>
                                <h4>Enroll in any of the courses</h4>
                                <p>You’re ready to go. Kick Start your IT Career  with ease</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.studentImage}>
                        <img src={Student} alt="Students" />
                    </div>
                </div>
                <div className={classes.studentButton}>
                <Link to="/register">
                <button>Register</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Students
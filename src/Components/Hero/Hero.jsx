import React, { Component } from "react";
import classes from "./Hero.module.css";
import Slider from "react-slick";


export default class Hero extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
    return (
      <div className={classes.container}>
        <Slider {...settings} className={classes.slider}>
          <div className={classes.innerContainer}>
            <div className={classes.hero}>
              <h2> <span>WELCOME</span> TO<br /> HIGH-CLASS TECH HUB</h2>
              <p>
                A platform that provides everything you need to upskill for the future.
              </p>
            </div>
          </div>
          <div className={classes.innerContainer2}>
            <div className={classes.hero}>
              <h2><span>EMPOWER</span> YOURSELF FOR THE FUTURE OF WORK.</h2>
              <p>
                 <span>Let us help you make that dream a reality with our well-tailored curriculum and industry standard technologies to build the career of your dreams!</span>
              </p>
            </div>
          </div>
          {/* <div className={classes.innerContainer3}>
      <div className={classes.hero}>
        <h2>TRANSOFRM YOURSELF FROM A GRADUATE TO A FULL STACK PROFESSIONAL</h2>
        <p>
        Join our post graduate programme in FULL STACK java programming and get job-ready with NIIT Digital.
        </p>
      </div>
    </div> */}
        </Slider>
      </div>
    );
  };
}



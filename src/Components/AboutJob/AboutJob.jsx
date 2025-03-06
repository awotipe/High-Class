import React from "react";
import classes from "./AboutJob.module.css";
import Ready from "../../Assests/About/about.png";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AboutJob = () => {
  return (
    <div className={classes.container}>
      <div className={classes.techvision}>
        <div className={classes.vision}>
          <h3>Vision</h3>
          <p>
            Our vision is to impart crucial tech skills to young individuals,
            empowering them to enhance their expertise and thrive in the
            evolving landscape of opportunities.
          </p>
        </div>
        <div className={classes.mission}>
          <h3>Mission</h3>
          <p>
            Our mission is to establish a nurturing environment where young
            adults can realize and successfully attain their career goals in the
            ever evolving field of technology.
          </p>
        </div>
      </div>
      <div className={classes.jobWrap}>
        <div className={classes.jobImage}>
          <div className={classes.image1}>
            <img src={Ready} alt="About-Image" />
          </div>
        </div>
        <div className={classes.jobText}>
          <div className={classes.talent}>
            <h3>ho We Are:</h3>
            <p>
              High-Class Tech Hub is a cutting-edge platform dedicated to
              empowering individuals and organizations with the skills and
              knowledge needed to thrive in the rapidly evolving technological
              landscape. We are a forward-thinking community committed to
              bridging the gap between current capabilities and future demands.
            </p>
          </div>
          <div className={classes.talent}>
            <h3>What We Do:</h3>
            <p>
              We provide comprehensive resources, training, and support to help
              individuals upskill and reskill for the future. Our offerings
              include courses, workshops, mentorship programs, and access to the
              latest tools and technologies. Whether you're a beginner or an
              experienced professional, we cater to all levels of expertise to
              ensure you stay ahead in the tech-driven world.
            </p>
          </div>
          <div className={classes.talent}>
            <h3>Our Method of Teaching:</h3>
            <p>
              At High-Class Tech Hub, we believe in a hands-on, practical
              approach to learning. Our teaching methodology includes:<br/>
              <b>Interactive Learning:</b> Engaging courses with real-world
              applications to ensure practical understanding. <br/>
              <b>Personalized Guidance:</b> Tailored mentorship and support to meet individual
              learning goals.<br/> 
              <b>Collaborative Environment:</b> Opportunities to work
              on projects and collaborate with peers and industry professionals.<br/>
              <b>Cutting-Edge Tools:</b> Access to the latest technologies and
              resources to enhance learning outcomes.<br/> 
              <b>Continuous Improvement:</b> Regular updates to our curriculum to align with industry trends
              and advancements.<br/> 
            </p>
            <p>
              High-Class Tech Hub is your gateway to mastering
              the skills of tomorrow, today. Join us to future-proof your career
              and unlock your full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJob;

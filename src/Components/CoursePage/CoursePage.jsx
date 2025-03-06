import React from "react";
import classes from "./CoursePage.module.css";
import Frontend from "../../Assests/Courses/Frontend.png";
import Backend from "../../Assests/Courses/backend.png";
import Analysis from "../../Assests/Courses/data.png";
import Cybersecurity from "../../Assests/Courses/cyber.png";
import Fullstack from "../../Assests/Courses/Fullstack.png";
import UI from "../../Assests/Courses/UI (1).png";
import Product from "../../Assests/Courses/product.png";
import Graphic from "../../Assests/Courses/Graphics.png";
import Digital from "../../Assests/Courses/digital.png";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";

const CoursePage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <h3>OUR COURSES</h3>
      </div>
      <div className={classes.innerContainer}>
        <div className={classes.topCourses}>
          <h3>DISCOVER THE IDEAL PROGRAM FOR YOU</h3>
          <p>
            Our program is designed with a project-based learning methodology,
            making it ideal for both beginers and those with prior experience.
          </p>
          <hr />
        </div>
        <div className={classes.cardWrap}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Frontend} alt="Frontend" className={classes.myImages} />
            </div>
            <div className={classes.cardText}>
              <h3>FRONTEND WEB DEVELOPMENT</h3>
              <p>
              Kickstart your career as a Front-End Web Developer today! Master the skills to craft high-quality websites and dynamic applications, delivering exceptional user experiences that stand out.
              </p>
              <div className={classes.calender}>
                <p><FaCalendar />  6months </p>
                <p><TbCalendarTime /> 3 days a week </p>
              </div>
              <Link to="/register">
                <button>Register Now</button>
              </Link>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Backend} alt="Backend" className={classes.myImages} />
            </div>
            <div className={classes.cardText}>
              <h3>BACKEND WEB DEVELOPMENT</h3>
              <p>
              Start your career as a Backend Web Developer today! Learn to build strong server-side apps, handle databases, and create smooth functionality for high-quality websites and dynamic user experiences.
              </p>
              <div className={classes.calender}>
                <p><FaCalendar />  6months </p>
                <p><TbCalendarTime /> 3 days a week </p>
              </div>
              <Link to="/register">
                <button>Register Now</button>
              </Link>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Analysis} alt="Data Analysis" className={classes.myImages} />
              <div className={classes.cardText}>
                <h3>DATA ANALYSIS</h3>
                <p>
                 Learn to analyze complex datasets, uncover valuable insights, and create data-driven solutions that empower businesses to make smarter decisions and achieve impactful results.
                </p>
                <div className={classes.calender}>
                <p><FaCalendar />  6months </p>
                <p><TbCalendarTime /> 3 days a week </p>
              </div>
                <Link to="/register">
                  <button>Register Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img
                src={Cybersecurity}
                alt="Cybersecurity"
                className={classes.myImages}
              />
            </div>
            <div className={classes.cardText}>
              <h3>CYBERSECURITY</h3>
              <p>
              Learn to uncover vulnerabilities and implement data-driven security solutions, empowering organizations to strengthen defenses, mitigate risks and protection against evolving threats.
              </p>
              <div className={classes.calender}>
                <p><FaCalendar />  6months </p>
                <p><TbCalendarTime /> 3 days a week </p>
              </div>
              <Link to="/register">
                <button>Register Now</button>
              </Link>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={UI} alt="UI/UX" className={classes.myImages} />
            </div>
            <div className={classes.cardText}>
              <h3>UI/UX DESIGN</h3>
              <p>
              UI and UX design are in high demand across industries, focusing on customer-centric solutions. Essential for creating intuitive, engaging experiences to drive satisfaction in digital products.
              </p>
              <div className={classes.calender}>
                <p><FaCalendar />  6months </p>
                <p><TbCalendarTime /> 3 days a week </p>
              </div>
              <Link to="/register">
                <button>Register Now</button>
              </Link>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img
                src={Fullstack}
                alt="Fullstack"
                className={classes.myImages}
              />
            </div>
            <div className={classes.cardText}>
              <h3>FULLSTACK WEB DEVELOPMENT</h3>
              <p>
              Whether it's crafting engaging visuals or optimizing server performance, this is your gateway to becoming a versatile Fullstack Web Developer ready to tackle any challenge in the tech industry.
              </p>
              <div className={classes.calender}>
                <p><FaCalendar />  6months </p>
                <p><TbCalendarTime /> 3 days a week </p>
              </div>
              <Link to="/register">
                <button>Register Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Product} alt="Product" className={classes.myImages} />
            </div>
            <div className={classes.cardText}>
              <h3>PRODUCT MANAGEMENT</h3>
              <p>
               Master the art of strategic planning and product lifecycle management. Learn to define product vision and work seamlessly with engineering, design, and marketing teams to bring ideas to life.
              </p>
              <div className={classes.calender}>
                <p><FaCalendar />  6months </p>
                <p><TbCalendarTime /> 3 days a week </p>
              </div>
              <Link to="/register">
                <button>Register Now</button>
              </Link>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img
                src={Graphic}
                alt="Graphic"
                className={classes.myImages}
              />
            </div>
            <div className={classes.cardText}>
              <h3>GRAPHIC DESIGN</h3>
              <p>
              Master the art of visual storytelling and creative design. Define design concepts and collaborate seamlessly with clients and marketing teams to bring ideas to life through stunning visuals.
              </p>
              <div className={classes.calender}>
                <p><FaCalendar />  6months </p>
                <p><TbCalendarTime /> 3 days a week </p>
              </div>
              <Link to="/register">
                <button>Register Now</button>
              </Link>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Digital} alt="Digital" className={classes.myImages} />
            </div>
            <div className={classes.cardText}>
              <h3>DIGITAL MARKETING</h3>
              <p>
              Mastering digital marketing involves understanding and leveraging online channels like SEO, social media, email, and content marketing to reach and engage your target audience. 
              </p>
              <div className={classes.calender}>
                <p><FaCalendar />  6months </p>
                <p><TbCalendarTime /> 3 days a week </p>
              </div>
              <Link to="/register">
                <button>Register Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;

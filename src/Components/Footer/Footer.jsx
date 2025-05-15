import React, { useEffect } from "react";
import classes from "./Footer.module.css";
import Logo from "../../Assests/Logos/LogoBG.png";
import { Link, NavLink } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
// import { PiPaperPlaneTiltFill } from "react-icons/pi";

const Footer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={classes.container}>
      <footer>
        <hr />
        <div className={classes.footWrap}>
          <div className={classes.footLeft}>
            <div className={classes.footLogo}>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className={classes.high}>
              <h3>Our Mission </h3>
              <p>
                To establish a nurturing environment where young individuals can
                realize and successfully attain their career goals in the ever
                evolving field of technology.
              </p>
            </div>
            <div className={classes.high}>
              <h3>Our Vision</h3>
              <p>
                To impart crucial tech skills to young
                individuals, empowering them to enhance their expertise and
                thrive in the evolving landscape of opportunities.
              </p>
            </div>
          </div>
          <div className={classes.footRight}>
            <div className={classes.info}>
              <h5>Quick links</h5>
              <NavLink to="/">
                <p>Home</p>
              </NavLink>
              <NavLink to="/aboutus">
                <p>About Us</p>
              </NavLink>
              <NavLink to="/contactus">
                <p>Contact Us</p>
              </NavLink>
              <NavLink to="/courses">
                <p>Courses</p>
              </NavLink>
              <NavLink to="/register">
                <p>Get Started</p>
              </NavLink>
            </div>

            <div className={classes.info}>
              <h5>Courses</h5>
              <p>Frontend Dev</p>
              <p>Backend Dev</p>
              <p>Data Analytics</p>
              <p>CyberSecurity</p>
              <p>Mobile App Dev</p>
            </div>

            <div className={classes.infoo}>
              <h5>Contacts</h5>
              <p>
                <TiLocation /> Timeline Bazaar, Beside Peakolam Suites, Funaab
                Road, Camp, Abeokuta, Nigeria.
              </p>
              <p>
                <IoCall /> (+234) 9115 0210 78
              </p>
              <p>
                <MdOutlineMail /> info@highclasstechhub.com.ng
              </p>
              <div className={classes.socials}>
                <div className={classes.media}>
                  <a href="https://www.facebook.com/share/18Xjhj4jra/">
                  <FaFacebook />
                  </a>
                </div>
                <div className={classes.media}>
                  <a href="https://www.instagram.com/highclasstechhub?igsh=b3NtMGh5a3FxZmkz">
                  <IoLogoInstagram />
                  </a>
                </div>
                <div className={classes.media}>
                  <a href="https://x.com/highclastechhub">
                  <FaXTwitter />
                  </a>
                </div>
                <div className={classes.media}>
                  <a href="https://www.linkedin.com/in/high-class-tech-hub/">
                  <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.copyright}>
          <hr />
          <p>Copyright ©High-Class Tech Hub 2025. All Rights Reserved</p>
        </div>
      </footer>
      <div
        className={classes.scrollUp}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <BsFillArrowUpCircleFill className={classes.iconscroll} />
      </div>
    </div>
  );
};

export default Footer;

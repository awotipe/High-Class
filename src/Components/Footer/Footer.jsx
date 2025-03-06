import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../Assests/Logos/LogoBG.png";
import Facebook from "../../Assests/facebook.png";
import Instagram from "../../Assests/instagram.png";
import Twitter from "../../Assests/twitter.png";
import Linkedin from "../../Assests/linkedin.png";
import { Link, NavLink } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
// import { PiPaperPlaneTiltFill } from "react-icons/pi";

const Footer = () => {
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
              To establish a nurturing environment where young individuals can realize and successfully attain their career goals in the ever evolving field of technology.
              </p>
            </div>
            <div className={classes.address}>
              <h3>Address</h3>
              <p>
                <TiLocation /> Abeokuta, Ogun State, Nigeria
              </p>
              <p>
                <IoCall />  09115021078
              </p>
              <p><MdOutlineMail /> highclasstechhub@gmail.com</p>
            </div>
            <div className={classes.socials}>
            <div className={classes.media}>
                <a href="https://www.facebook.com/share/1BECYvYqmo/">
                <img src={Facebook} alt="Facebook" />
                </a>
              </div>
              <div className={classes.media}>
                <a href="https://www.instagram.com/niit_agbara_center/profilecard/?igsh=b3EwbXB3b21xeHAx">
                <img src={Instagram} alt="Instagram" />
                </a>
              </div>
              <div className={classes.media}>
                <a href="https://x.com/niit_abeokuta?t=Bm-iln8Fyxznt2M3onrd4w&s=09">
                <img src={Twitter} alt="Twitter" />
                </a>
              </div>
              <div className={classes.media}>
                <a href="https://www.linkedin.com/company/niit-abeokuta/">
                <img src={Linkedin} alt="Linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className={classes.footRight}>
            <div className={classes.info}>
              <h5>Quick links</h5>
              <NavLink
              to="/">
              <p>Home</p>
              </NavLink>
              <NavLink
              to="/aboutus">
              <p>About Us</p>
              </NavLink>
              <NavLink
              to="/contactus">
              <p>Contact Us</p>
              </NavLink>
              <NavLink
              to="/courses">
              <p>Courses</p>
              </NavLink>
              <NavLink
              to="/register">
              <p>Register</p>
              </NavLink>
            </div>

            <div className={classes.info}>
              <h5>Account</h5>
              <p>My Account</p>
              <p>Checkout</p>
              <p>My Cert</p>
              <p>My Catalog</p>
            </div>

            <div className={classes.info}>
              <h5>Socials</h5>
              <p> <a href="https://www.facebook.com/share/1BECYvYqmo/">Facebook</a></p>
              <p><a href="https://www.instagram.com/niit_agbara_center/profilecard/?igsh=b3EwbXB3b21xeHAx">Instagram</a></p>
              <p> <a href="https://x.com/niit_abeokuta?t=Bm-iln8Fyxznt2M3onrd4w&s=09">Twitter</a></p>
              <p> <a href="https://www.linkedin.com/company/niit-abeokuta/">Linkedin</a></p>
            </div>
          </div>
          {/* <div className={classes.subscribe}>
            <h5>Stay Updated</h5>
            <form className={classes.Form}>
              <input type="email" name="email" placeholder="Enter Your Email" />
              <button type="submit">
                <PiPaperPlaneTiltFill />
              </button>
            </form>
          </div> */}
        </div>
        <div className={classes.copyright}>
          <hr />
          <p>Copyright ©High-Class Tech Hub 2025. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

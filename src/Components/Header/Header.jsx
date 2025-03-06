import React, { useState } from "react";
import classes from "./Header.module.css";
import styles from "./Header.module.css";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assests/Logos/LogoBG.png";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
  
    const handleNavToggle = () => {
      setNavOpen(!navOpen);
    };
  
    const handleNavLinkClick = () => {
      setNavOpen(false);
    };
    return (
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <header>
          <div className={classes.logo}>
          <Link to="/">
          <img src={Logo} alt="Logo" />
          </Link>
          </div>
            <nav className={classes.navMenu}>
            <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? styles.active : "")}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) => (isActive ? styles.active : "")}>
              Contact Us
            </NavLink>
             
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? styles.active : "")}>
              Courses
            </NavLink>
          </li>
          <button>
          <Link
            to="/register"
            className={classes.navLink}
            onClick={handleNavLinkClick}>
            Register
          </Link>
        </button>
            </nav>
        <div className={classes.hamburger} onClick={handleNavToggle}>
          {!navOpen ? (
            <IoMdMenu className={classes.Icons} />
          ) : (
            <IoMdClose className={classes.Icons} />
          )}
        </div>
        <div className={navOpen ? classes.actives : classes.mobileMenu}>
        <nav className={classes.mobileNav}>
        <li> 
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={handleNavLinkClick}
              >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={handleNavLinkClick}
              >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={handleNavLinkClick}>
              Contact Us
            </NavLink>
             
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={handleNavLinkClick}>
              Courses
            </NavLink>
          </li>
        <button>
          <Link
            to="/register"
            className={classes.navLink}
            onClick={handleNavLinkClick}>
            Register
          </Link>
        </button>
            </nav>
            </div>
          </header>
        </div>
      </div>
    );
  };
  
  export default Header;
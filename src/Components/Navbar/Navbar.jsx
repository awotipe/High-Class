import React, { useState } from "react";
import classes from "./Navbar.module.css";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assests/NIIT Logo.png";
import Logo2 from "../../Assests/IT CORE LOGO.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleNavLinkClick = () => {
    if (navOpen) {
      setNavOpen(false);
    }
  };

  return (
    <div className={classes.container}>
      <header>
      <div className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
          <img src={Logo2} alt="Logo" />
        </Link>
      </div>
        <ul className={classes.navMenu}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Contact Us
            </NavLink>
             
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Courses
            </NavLink>
          </li>
        <button>
          <Link
            to="/register"
            className={classes.navLink}
            onClick={handleNavLinkClick}
          >
            Register
          </Link>
        </button>
        </ul>
      <div className={classes.hamburger} onClick={handleNavToggle}>
        {navOpen ? (
          <MdClose className={classes.Icons} />
        ) : (
          <RxHamburgerMenu className={classes.Icons} />
        )}
      </div>
        <div className={navOpen ? classes.actives : classes.mobileMenu}>
        <ul className={classes.mobileNav}>
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
              onClick={handleNavLinkClick}
              >
              Contact Us
            </NavLink>{" "}
             
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={handleNavLinkClick}
            >
              Courses
            </NavLink>
          </li>
        <button>
          <Link
            to="/register"
            className={classes.navLink}
            onClick={handleNavLinkClick}
          >
            Register
          </Link>
        </button>
        </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

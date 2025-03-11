import React from 'react'
import styles from './Grow.module.css'
import { Link } from "react-router-dom";
import Experts from "../../Assests/Know/industry.png";
import Certificate from "../../Assests/Know/certi.png";
import Skills from "../../Assests/Know/InDemand.png";
import Environment from "../../Assests/Know/environment.png";
import Approach from "../../Assests/Know/standard.png";
import Calendar from "../../Assests/Know/calendar.png";
import Partners from "../../Assests/Know/partners.png";
import Collaborate from "../../Assests/Know/collaborate.png";



const Grow = () => {
  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <h1>Grow Your Career With High-Class Tech Hub</h1>
            <div className={styles.card}>
                <div className={styles.cardText}>
                    <h2>In-Demand Tech Skills</h2>
                    <p>Transform your future with our hands-on tech training program. Gain the most sought-after skills in today’s job market and fast-track your career in technology.</p>
                </div>
                <div className={styles.cardImage}>
                    <img src={Skills} alt="Skills"/>
                </div>
            </div>
          
            <div className={styles.card2}>
                <div className={styles.cardImage}>
                    <img src={Experts} alt="Experts"/>
                </div>
                <div className={styles.cardText}>
                    <h2>Learn From Industry Experts</h2>
                    <p>Our courses are designed and taught by industry professionals who are passionate about sharing their knowledge and experience with aspiring tech enthusiasts.</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardText}>
                    <h2>Conducive Environment </h2>
                    <p>With us, you’ll learn in comfort. Enjoy a supportive environment equipped with all the essential amenities you need to thrive.</p>
                </div>
                <div className={styles.cardImage}>
                    <img src={Environment} alt="Environment"/>
                </div>
            </div>

            <div className={styles.card2}>
                <div className={styles.cardImage}>
                    <img src={Approach} alt="Approach"/>
                </div>
                <div className={styles.cardText}>
                    <h2>Industry Standard Approach </h2>
                    <p> At High-Class Tech Hub, we equip you with the essential, in-demand skills and industry best practices necessary to excel in today’s dynamic workplace.</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardText}>
                    <h2>Flexible Calendars  </h2>
                    <p>Discover flexible learning options tailored to your schedule! Join our weekday or weekend classes, available both in-person and online. We make it easy for you to learn and grow with us.</p>
                </div>
                <div className={styles.cardImage}>
                    <img src={Calendar} alt="Calendar"/>
                </div>
            </div>

            <div className={styles.card2}>
                <div className={styles.cardImage}>
                    <img src={Collaborate} alt="Collaborate"/>
                </div>
                <div className={styles.cardText}>
                    <h2>You’re not Alone</h2>
                    <p>Join a vibrant and supportive community where you’ll connect with like-minded students, collaborate on exciting projects, and grow together under the guidance of our experienced facilitators.</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardText}>
                    <h2>Get Certified</h2>
                    <p>Our courses are designed and taught by industry professionals who are passionate about sharing their knowledge and experience with aspiring tech enthusiasts.</p>
                </div>
                <div className={styles.cardImage}>
                    <img src={Certificate} alt="Certificate"/>
                </div>
            </div>
            <div className={styles.card2}>
            <div className={styles.cardImage}>
                    <img src={Partners} alt="Partners"/>
                </div>
                <div className={styles.cardText}>
                    <h2>Hiring Partners</h2>
                    <p>We provide the ideal tech talent tailored to your team’s requirements. Our professionals are fully equipped with the essential skills to deliver cutting-edge, industry-standard tech solutions.</p>
                </div>
            </div>
                <div className={styles.btn}>
                     <Link to="/courses">
                    <button>Explore Courses</button>
                     </Link>
                </div>
        </div>
    </div>
  )
}

export default Grow

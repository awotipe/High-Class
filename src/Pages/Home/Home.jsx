import React from 'react'
import Hero from "../../Components/Hero/Hero"
// import Sponsors from "../../Components/Sponsors/Sponsors";
import AboutUs from "../../Components/AboutHome/AboutHome";
import Grow from "../../Components/Grow/Grow";
import Courses from "../../Components/Courses/Courses";
import Students from "../../Components/Students/Students";
import Testimony from "../../Components/Testimonials/Testimonials";


const Home = () => {
  return (
    <div className="container">
        <Hero/>
        {/* <Sponsors/> */}
        <AboutUs/>
        <Grow/>
        <Courses/>
        <Students/>
        <Testimony/>
    </div>
  )
}

export default Home
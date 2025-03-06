import React, {Component} from 'react'
import classes from "./Testimonials.module.css";
import Adesina from "../../Assests/adesina.png";
import Favour from "../../Assests/Taiwo.png";
import Junior from "../../Assests/William.png";
import Slider from "react-slick";

export default class Testimonials extends Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
          fade: false,
          speed: 6000,
          autoplaySpeed: 5000,
          cssEase: "linear",
        };
    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <h2>TESTIMONIALS</h2>
                <Slider {...settings} className={classes.slider}>
                <div className={classes.testimonySlide}>
                    <div className={classes.paragraph}>
                        <p>"Before coming to NIIT, I had only Microsoft Office and Graphic Design skills. But after spending 12 Months in NIIT, I have achieved a lot. With great joy, now I can prouldy say I have acquired Java programing and Web Development Skills."</p>
                    </div>
                    <div className={classes.wrap}>
                        <div className={classes.clientImage}>
                            <img src={Adesina} alt="Adesina" />
                        </div>
                        <div className={classes.clientName}>
                            <h5>Adesina Oluwayanmife Justified</h5>
                            <p>SOFTWARE ENGINEER</p>
                        </div>
                    </div>
                </div>
                <div className={classes.testimonySlide}>
                    <div className={classes.paragraph}>
                        <p>"My journey with NIIT transformed my passion for design into a tangible skillset. Their UI/UX course not only equipped me with the latest tools and techniques but also instilled a user-centric approach. The hands-on projects and industry-relevant curriculum prepared me for real-world challenges. Today, I confidently navigate the complex world of design, thanks to the solid foundation laid by NIIT."</p>
                    </div>
                    <div className={classes.wrap}>
                        <div className={classes.clientImage}>
                            <img src={Favour} alt="Adesina" />
                        </div>
                        <div className={classes.clientName}>
                            <h5>Reuben Favour</h5>
                            <p>SOFTWARE ENGINEER</p>
                        </div>
                    </div>
                </div>
                <div className={classes.testimonySlide}>
                    <div className={classes.paragraph}>
                        <p>"My journey with NIIT was a turning point in my career. The comprehensive web development program equipped me with the skills and knowledge I needed to succeed. The experienced instructors, hands-on projects, and supportive learning environment were invaluable. Today, I confidently build dynamic websites and applications, and I owe a lot of my success to the solid foundation NIIT provided."</p>
                    </div>
                    <div className={classes.wrap}>
                        <div className={classes.clientImage}>
                            <img src={Junior} alt="Adesina" />
                        </div>
                        <div className={classes.clientName}>
                            <h5>Junior Fuekang</h5>
                            <p>SOFTWARE ENGINEER</p>
                        </div>
                    </div>
                </div>
                </Slider>
            </div>
        </div>
    )
}
}

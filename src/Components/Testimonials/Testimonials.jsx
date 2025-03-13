import React, { Component } from "react";
import classes from "./Testimonials.module.css";
import Slider from "react-slick";

export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      fade: false,
      speed: 6000,
      autoplaySpeed: 5000,
      cssEase: "linear",

      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 858,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <h2>TESTIMONIALS</h2>
          <Slider {...settings} className={classes.slider}>
            <div className={classes.testimonySlide}>
              <div className={classes.paragraph}>
                <p>
                  "Studying at high-class tech hub has been nothing short of
                  transformative. The cutting-edge facilities and access to
                  industry-leading mentors have allowed me to turn my ideas into
                  tangible projects. The collaborative environment pushed me to
                  think bigger and work smarter. This tech hub isn’t just a
                  place to learn; it’s a launchpad for the next generation of
                  innovators."
                </p>
              </div>
              <div className={classes.clientName}>
                <h5>Olumuyiwa Davies</h5>
                <p>FRONTEND DEVELOPER</p>
              </div>
            </div>
            <div className={classes.testimonySlide}>
              <div className={classes.paragraph}>
                <p>
                  "Before joining high-class tech hub, I always felt like I was
                  solving problems in a vacuum. Here, I found a community of
                  like-minded individuals who challenge and inspire me every
                  day. The hands-on projects and real-world case studies have
                  sharpened my problem-solving skills in ways I never imagined.
                  This place doesn’t just teach you how to code or build,it
                  teaches you how to think critically and make an impact."
                </p>
              </div>
              <div className={classes.clientName}>
                <h5>Blessing Adams</h5>
                <p>CYBERSECURITY</p>
              </div>
            </div>
            <div className={classes.testimonySlide}>
              <div className={classes.paragraph}>
                <p>
                  "I’ve always been fascinated by technology, but I never
                  thought I could turn my passion into a career. From day one, I
                  was immersed in an environment that encouraged experimentation
                  and creativity. High-Class Tech Hub has given me the tools,
                  confidence, and network to turn my dreams into reality. It’s
                  more than a school—it’s a family of future tech leaders."
                </p>
              </div>
              <div className={classes.clientName}>
                <h5>Juliet Onobong</h5>
                <p>DATA ANALYST</p>
              </div>
            </div>
            <div className={classes.testimonySlide}>
              <div className={classes.paragraph}>
                <p>
                  "What sets High-Class Tech Hub apart is its emphasis on
                  collaboration. I’ve had the opportunity to work on
                  multidisciplinary projects with peers from diverse
                  backgrounds—engineers, designers, and marketers. This hub has shown
                  me that the future of technology isn’t just about individual
                  brilliance—it’s about collective genius."
                </p>
              </div>
              <div className={classes.clientName}>
                <h5>Igemu Festus</h5>
                <p>FRONTEND ENGINEER</p>
              </div>
            </div>
            <div className={classes.testimonySlide}>
              <div className={classes.paragraph}>
                <p>
                  "At High-Class Tech Hub, learning never stops. The curriculum is
                  designed to keep pace with the rapidly evolving tech
                  landscape, and the instructors are always pushing us to
                  explore new frontiers. The hub’s emphasis on
                  continuous learning has instilled in me a mindset of growth
                  and adaptability. I’m not just prepared for the jobs of today;
                  I’m ready to shape the jobs of tomorrow."
                </p>
              </div>
              <div className={classes.clientName}>
                <h5>Toheeb Abdulrahman</h5>
                <p>BACKEND ENGINEER</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

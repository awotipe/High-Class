import React,  {useRef, useState} from 'react';
import classes from "./ContactUs.module.css";
import emailjs from "@emailjs/browser";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Result = () => {
  return <p>Your message has been sent successfully.</p>;
};

const ContactUs = () => {
  const [result, showResult] = useState(false, true);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_inc6555",
        "template_lepu5an",
        form.current,
        "iZpWHBemGw-7m1CWd"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(
            "Your message has been sent successfully."
          );
        },
        (error) => {
          console.log(error.text);
          console.log("Message not sent");
        }
      );

    form.current.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className={classes.container}>
    <div className={classes.hero}>
     <h3>CONTACT US</h3>
    </div>
    <div className={classes.innerContainer}>
    <div className={classes.contactSide}>
    <div className={classes.high}>
              <p>
              Let us help you make that dream a reality with our well-tailored curriculum and industry standard technologies to build the career of your dreams!
              </p>
            </div>
            <div className={classes.address}>
              <h3>Address:</h3>
              <p>
                 <TiLocation /> Timeline Bazaar, Beside Peakolam Suites, Funaab Road, Camp, Abeokuta, Ogun State, Nigeria.
              </p>
              <p>
                <IoCall />  (+234) 9115 0210 78
              </p>
              <p><MdOutlineMail /> info@highclasstechhub.com.ng</p>
            </div>
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
    <form ref={form} onSubmit={sendEmail} className={classes.register}>
       <h3>Get In Touch With Us</h3>
       <p>We would love to hear from you</p>
       <label for="full_Name" >Full Name<span>*</span></label><br/>
       <input type="name" id="full_Name" name="full_Name" placeholder='e.g. Victor Nelson' required/><br/>

       <label for="Email" >Email<span>*</span></label><br/>
       <input type="email" id="email" name="email" placeholder='you@gmail.com' required/><br/>

       <label for="phone_Number" >Phone Number<span>*</span></label><br/>
       <input type="phone" id="phone" name="phone"  placeholder='+23480xxxxxxxx' required/><br/>

       <label for="address" >Message<span>*</span></label><br/>
       <textarea name="message" id="message" placeholder='Leave us a message' rows={4} required></textarea>
       
       <div className={classes.submit}>
           <button>SUBMIT</button>
       </div>
       <div className={classes.myRow}>{result ? <Result /> : null} </div>
      </form>
    </div>
 </div>
  )
}

export default ContactUs

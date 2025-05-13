import React,  {useRef, useState} from 'react';
import classes from "./Application.module.css";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>Your application has been submitted successfully.</p>;
};

const Application = () => {
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
            "Your application has been submitted successfully."
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
     <h3>COURSE REGISTRATION</h3>
    </div>
    <form ref={form} onSubmit={sendEmail} className={classes.register}>
       <h3>WELCOME TO HIGH-CLASS TECH HUB</h3>
       <p>Please fill the form below appropriately.</p>
       <label for="full_Name" >Full Name<span>*</span></label><br/>
       <input type="name" id="full_Name" name="full_Name" placeholder='e.g. Victor Nelson' required/><br/>

       <label for="Email" >Email<span>*</span></label><br/>
       <input type="email" id="email" name="email" placeholder='you@gmail.com' required/><br/>

       <label for="phone_Number" >Phone Number<span>*</span></label><br/>
       <input type="phone" id="phone" name="phone"  placeholder='+23480xxxxxxxx' required/><br/>

       <label for="address" >Address<span>*</span></label><br/>
       <input type="address" id="address" name="address" placeholder='City, State & Country' required/><br/>

       <label for="gender" >Gender<span>*</span></label><br/>
       <input type="text" id="gender" name="gender" placeholder='Male or Female' required/><br/>

       <label for="course" >Course to Study<span>*</span></label><br/>
       <input type="text" id="course" name="course" placeholder='Your preffered course' required/><br/>

       <label for="attendance" >Mode of Training<span>*</span></label><br/>
       <input type="text" id="attendance" name="attendance" placeholder='Virtual or Onsite' required/><br/>
       
       <div className={classes.submit}>
           <button>SUBMIT</button>
       </div>
       <div className={classes.myRow}>{result ? <Result /> : null} </div>
    </form>
 </div>
  )
}

export default Application

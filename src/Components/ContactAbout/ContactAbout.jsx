import React from "react";
import TextProps from "../../Components/TestProps/TestProps";
import Logo from "../../Assests/IT CORE LOGO.png";
import Student from "../../Assests/web.png";
import Background from "../../Assests/backImage.png";

const ContactAbout = () => {
  return (
    <div>
      <TextProps
        background={Background}
        logo={Logo}
        about="Contact"
        text1="ipsum dolor sit amet, consectetur adipiscing elit. Sed in condimentum ipsum. Nulla facilisi. Nulla facilisi. Sed in condimentum ipsum."
        text2="With a strong focus on assuming leadership role in the Digital Learning World and to further accelerate NIIT's growth and profitability, the company has charted a focused business strategy to address the Digital Transformation needs for individuals and corporate customers by offering training and consulting to help them re-invent themselves & their organisations."
        more="Explore More"
        student={Student}
      />
    </div>
  );
};

export default ContactAbout;
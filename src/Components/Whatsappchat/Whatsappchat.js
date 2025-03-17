import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import classes from "./Whatsappchat.module.css"

const Whatsappchat = () => {
  return (
    <div className={classes.container}>
    <div className={classes.sideText}>
      <p>Chat with us</p>
    </div>
    <div className={classes.Whatsappchat}>
        <a href="https://wa.me/message/KSZ63NLUS3HPL1">
        <FaWhatsappSquare className={classes.icon} />
        </a>
    </div>
    </div>
  )
}

export default Whatsappchat
import React from "react";
import classes from "./Contact.module.css";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BiPhoneCall } from "react-icons/bi";

export const Contact = () => {
  return (
    <div id="Contact" className={classes.contact}>
      <div className={classes.contactCard}>
        <form className={classes.form}>
          <h1 style={{ color: "rgb(255, 255, 255)", fontSize: "calc(1vw + 1.2rem)", textAlign: "start" }}>SEND MAFA A MESSAGE</h1>

          <input className={classes.input} placeholder="Full name" id="name" name="name" />
          <input className={classes.input} placeholder="Email" id="email" name="email" />
          <input className={classes.input} placeholder="Subject" id="subject" name="subject" />

          <textarea id="textarea" name="text" className={classes.textArea}></textarea>
        </form>
        <div className={classes.contactInfo}>
          <h1 style={{ color: "rgb(255, 255, 255)", fontSize: "calc(1vw + 1.2rem)", textAlign: "start" }}>GET IN TOUCH</h1>

          <p style={{ fontSize: "calc(.5vw + 16px)", textAlign: "start", marginLeft: "0px", color:"rgb(255, 255, 255, .7)" }}>Thank you for considering reaching out. Should you wish to contact me, please utilize the provided contact form or conveniently connect with me via our social media platforms by clicking on the respective logos. I appreciate your interest and eagerly anticipate the opportunity to engage with you.</p>

          <ul className={classes.contactContainer}>
            <li className={classes.contactIconAndInfo}>
              <CiLocationOn size={15}/> <p style={{color:"rgb(255, 255, 255, .7)"}}> Intongomane st, Greenville Fisantekraal 7550</p>
            </li>

            <li className={classes.contactIconAndInfo}>
              <BiPhoneCall size={15}  /> <p style={{color:"rgb(255, 255, 255, .7)"}}>(+27) 73 187 4276</p>
            </li>

            <li className={classes.contactIconAndInfo}>
              <TfiEmail size={15}  />
              <p style={{color:"rgb(255, 255, 255, .7)", width:"fit-content"}}>maketelamafa2@gmail.com</p>
            </li>
          </ul>
          <ul className = {classes.iconContainer}>
            <li className = {classes.socialMediaIcon}>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100086971557256">
                <CiFacebook className={classes.icon}/>
              </a>
            </li>
            <li className={classes.socialMediaIcon}>
              {" "}
              <a target="_blank" href="https://www.linkedin.com/in/mafa-maketela-b8b8981b8/">
                <CiLinkedin className={classes.icon} />
              </a>
            </li>
            <li className={classes.socialMediaIcon}>
              <a target="__blank" href="https://twitter.com/MafaMaketela">
                <CiTwitter className={classes.icon} />
              </a>
            </li>
            <li className={classes.socialMediaIcon}>
              <a target="_blank" href="https://wa.me/+27712208870/?text=Hello Mafa, I have been directed by the portfolio.">
                <FaWhatsapp className={classes.icon}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

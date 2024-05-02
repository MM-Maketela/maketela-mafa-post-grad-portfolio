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
  const size = 25;
  return (
    <div className={classes.contact}>
      <div className={classes.contactCard}>
        <form className={classes.form}>
          <h1 style={{ color: "teal", fontSize: "2rem", textAlign: "start" }}>SEND MAFA A MESSAGE</h1>

          <input className={classes.input} placeholder="Full name" id="name" name="name" />
          <input className={classes.input} placeholder="Email" id="email" name="email" />
          <input className={classes.input} placeholder="Subject" id="subject" name="subject" />

          <textarea id="textarea" name="text" className={classes.textArea}></textarea>
        </form>
        <div className={classes.contactInfo}>
          <h1 style={{ color: "teal", fontSize: "2rem", textAlign: "start" }}>GET IN TOUCH</h1>

          <p style={{ fontSize: "1.5rem", textAlign: "start", marginLeft: "0px" }}>Feel free to utilize either the form provided or our social media links to reach out for any inquiries. I am here to assist you promptly and look forward to connecting with you!</p>

          <ul className={classes.contactContainer}>
            <li className={classes.contactIconAndInfo}>
              <CiLocationOn size={20} /> <p> Intongomane st, Greenville Fisantekraal 7550</p>
            </li>

            <li className={classes.contactIconAndInfo}>
              <BiPhoneCall size={20} /> <p>(+27) 73 187 4276</p>
            </li>

            <li className={classes.contactIconAndInfo}>
              <TfiEmail size={20} />
              <p>maketelamafa2@gmail.com</p>
            </li>
          </ul>

          <ul className={classes.iconContainer}>
            <li className={classes.socialMediaIcon}>
              <a target="_blank"  href="https://www.facebook.com/profile.php?id=100086971557256">
                <CiFacebook size={size} />
              </a>
            </li>
            <li className={classes.socialMediaIcon}>
              {" "}
              <a target="_blank" href="https://www.linkedin.com/in/mafa-maketela-b8b8981b8/">
                <CiLinkedin size={size} />
              </a>
            </li>
            <li className={classes.socialMediaIcon}>
              <a target="__blank" href="https://twitter.com/MafaMaketela">
                <CiTwitter size={size} />
              </a>
            </li>
            <li className={classes.socialMediaIcon}>
              <a target="_blank" href="https://wa.me/+27712208870/?text=Hello Mafa, I have been directed by the portfolio.">
                <FaWhatsapp size={size} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

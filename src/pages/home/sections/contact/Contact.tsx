import React, { ReactNode, useState, useRef } from "react";
import classes from "./Contact.module.css";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BiPhoneCall } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userText, setUserText] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const sendEmail = (e: any) => {
    e.preventDefault();

    const templateParams = {
      subject: userSubject,
      user_name: userName,
      user_email: userEmail,
      message: userText,
    };
    emailjs
      .send("service_wfalcvm", "template_ct1b0en", templateParams, {
        publicKey: "JnWMxCBVw6O6pQjD3",
      })
      .then(
        (response) => {
          toast.success("message sent", { autoClose: 3000 });
        },
        (err) => {
          toast.error("message failed", {
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div id="Contact" className={classes.contact}>
      <div className={classes.contactCard}>
        <form
          className={classes.form}
          id="form"
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <h1 style={{ color: "rgb(255, 255, 255)", fontSize: "calc(1vw + 1.2rem)", textAlign: "start" }}>
            SEND MAFA A MESSAGE
          </h1>

          <input
            className={classes.input}
            type="text"
            required
            placeholder="Full name"
            id="name"
            name={"user_name"}
            value={userName}
            onChange={(event_) => {
              setUserName(event_.target.value);
            }}
          />
          <input
            className={classes.input}
            type="email"
            required
            placeholder="Email"
            id="email"
            name={"user_email"}
            value={userEmail}
            onChange={(event_) => {
              setUserEmail(event_.target.value);
            }}
          />
          <input
            className={classes.input}
            type="text"
            required
            placeholder="Subject"
            id="subject"
            name={"subject"}
            value={userSubject}
            onChange={(event_) => {
              setUserSubject(event_.target.value);
            }}
          />

          <textarea
            id="textarea"
            name={"message"}
            className={classes.textArea}
            required
            value={userText}
            onChange={(event_) => {
              setUserText(event_.target.value);
            }}
          ></textarea>
          <button className={classes.submitButton} type="submit">
            SUBMIT
          </button>
        </form>
        <div className={classes.contactInfo}>
          <h1 style={{ color: "rgb(255, 255, 255)", fontSize: "calc(1vw + 1.2rem)", textAlign: "start" }}>
            GET IN TOUCH
          </h1>

          <p
            style={{
              fontSize: "calc(.5vw + 16px)",
              textAlign: "start",
              marginLeft: "0px",
              color: "rgb(255, 255, 255, .7)",
            }}
          >
            Thank you for considering reaching out. Should you wish to contact me, please utilize the provided contact
            form or conveniently connect with me via our social media platforms by clicking on the respective logos. I
            appreciate your interest and eagerly anticipate the opportunity to engage with you.
          </p>

          <ul className={classes.contactContainer}>
            <li className={classes.contactIconAndInfo}>
              <CiLocationOn size={15} />{" "}
              <p style={{ color: "rgb(255, 255, 255, .7)" }}> Intongomane st, Greenville Fisantekraal 7550</p>
            </li>

            <li className={classes.contactIconAndInfo}>
              <BiPhoneCall size={15} /> <p style={{ color: "rgb(255, 255, 255, .7)" }}>(+27) 73 187 4276</p>
            </li>

            <li className={classes.contactIconAndInfo}>
              <TfiEmail size={15} />
              <p style={{ color: "rgb(255, 255, 255, .7)", width: "fit-content" }}>maketelamafa2@gmail.com</p>
            </li>
          </ul>
          <ul className={classes.iconContainer}>
            <li className={classes.socialMediaIcon}>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100086971557256">
                <CiFacebook className={classes.icon} />
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
              <a
                target="_blank"
                href="https://wa.me/+27712208870/?text=Hello Mafa, I have been directed by the portfolio."
              >
                <FaWhatsapp className={classes.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

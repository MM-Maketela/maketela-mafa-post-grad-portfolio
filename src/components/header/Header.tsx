import React, { useState } from "react";
import classes from "./Header.module.css";
import { Navigation } from "../navigation/Navigation";
import { MdWhatsapp, MdFacebook } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
export const Header = () => {
  const [changeColor, setChangeColor] = useState(false);
  function windowScrolling() {
    window.scrollY >= 1 ? setChangeColor(true) : setChangeColor(false);
  }
  window.addEventListener("scroll", windowScrolling);
  return (
    <header
      className={classes.header}
      style={{ backgroundColor: changeColor ? "rgb(96, 125, 139)" : "inherit" }}
    >
      <div className={classes.contactInfo}>
        <ul className={classes.contactList}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1m34lrXT1ojd5l89aUajqcPbW-wMmnI2i/view?usp=sharing"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".3rem",
              // border: "8px solid rgba(255, 255, 255, 0.05)",
              padding: ".3rem",
              color:"rgba(255, 255, 255)"
            }}
          >
            <h4 style={{ padding: "0px", margin: "0px" }}>RESUME</h4>
            <div>
              <FaExternalLinkAlt />
            </div>
          </a>
          <li>
            <MdWhatsapp size={20} className={classes.contactListItem} />{" "}
          </li>
          <li>
            <MdFacebook size={20} className={classes.contactListItem} />{" "}
          </li>
          <li>
            <AiOutlineLinkedin size={20} className={classes.contactListItem} />{" "}
          </li>
          <li>
            {" "}
            <AiOutlineGithub
              size={20}
              className={classes.contactListItem}
            />{" "}
          </li>
        </ul>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: "1" }}></div>
        <div className={classes.divider}></div>
      </div>

      <div style={{ position: "relative" }}>
        <Navigation />
      </div>
    </header>
  );
};

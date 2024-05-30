import React, { ReactNode, useEffect, useState } from "react";
import classes from "./Header.module.css";
import { Navigation } from "../navigation/Navigation";
import { MdWhatsapp, MdFacebook, MdMenu,MdHome,MdMiscellaneousServices, MdContacts} from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaExternalLinkAlt,FaProjectDiagram } from "react-icons/fa";
import { DropDownMenu } from "../drop-down-menu/DropDownMenu";
import { MenuItem } from "../menu-item/MenuItem";
import { BsPersonLinesFill } from "react-icons/bs";



export const Header = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [changeHeader, setChangeHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(()=>{
    setChangeHeader(window.innerWidth <= 900);
  },[])



  function windowScrolling() {
    window.scrollY >= 1 ? setChangeColor(true) : setChangeColor(false);
  }
  window.addEventListener("scroll", windowScrolling);

  return (

    <header  className={classes.header} style={{ backgroundColor: changeColor ? "rgb(96, 125, 139)" : changeHeader ? "rgb(96, 125, 139)" : "transparent" }}>
      {changeHeader ? (
        <div className={classes.wrapperForSmallDevices}>
          <span>
            <MdMenu
              className={classes.menu}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />

          <DropDownMenu menuState = {showMenu}>
              <MenuItem Icon={MdHome} label="Home" />
              <MenuItem Icon={BsPersonLinesFill} label="About" />
              <MenuItem Icon={MdMiscellaneousServices} label="Services" />
              <MenuItem Icon={FaProjectDiagram} label="Portfolio" />
              <MenuItem Icon={MdContacts} label="Contact" />
            </DropDownMenu>
          </span>
        </div>
      ) : (
        <div className={classes.wrapperForBiggerScreens}>
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
                  color: "rgba(255, 255, 255)",
                }}
              >
                <h4 style={{ padding: "0px", margin: "0px" }}>RESUME</h4>
                <div>
                  <FaExternalLinkAlt />
                </div>
              </a>
              <li>
                <a target="_blank" href="https://wa.me/+27712208870/?text=Hello Mafa, I have been directed by the portfolio." rel="noreferrer">
                  <MdWhatsapp size={20} className={classes.contactListItem} />{" "}
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100086971557256" rel="noreferrer">
                  <MdFacebook size={20} className={classes.contactListItem} />{" "}
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/mafa-maketela-b8b8981b8/" rel="noreferrer">
                  <AiOutlineLinkedin size={20} className={classes.contactListItem} />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a target="_blank" href="https://github.com/MM-Maketela" rel="noreferrer">
                  <AiOutlineGithub size={20} className={classes.contactListItem} />
                </a>{" "}
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
        </div>
      )}
    </header>
  );
};

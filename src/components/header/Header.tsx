import React, { ReactNode, useEffect, useState } from "react";
import classes from "./Header.module.css";
import { Navigation } from "../navigation/Navigation";
import { MdWhatsapp, MdFacebook, MdMenu } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

import Select, { components } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';







const customStyles = {
  control: (provided: object) => ({
    ...provided,
    // Customize other parts of the control if needed
  }),
  // Customize other parts of the select if needed
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const DropdownIndicator = (props:object) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaChevronDown />
    </components.DropdownIndicator>
  );
};

const customComponents = {
  DropdownIndicator,
};


export const Header = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [changeHeader, setChangeHeader] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  function handleHeaderChange() {
    window.innerWidth <= 975 ? setChangeHeader(true) : setChangeHeader(false);
  }
  function windowScrolling() {
    window.scrollY >= 1 ? setChangeColor(true) : setChangeColor(false);
  }
  window.addEventListener("scroll", windowScrolling);
  window.addEventListener("resize", handleHeaderChange);
  

  return (
    <header className={classes.header} style={{ backgroundColor: changeColor ? "rgb(96, 125, 139)" : "inherit" }}>
      {changeHeader ? (
        <div className={classes.wrapperForSmallDevices}>
        <Select
        defaultValue={selectedOption}
          // onChange={setSelectedOption}
        options={options}
      />
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

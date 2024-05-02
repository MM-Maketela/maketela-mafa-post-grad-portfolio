import React, { useEffect, useState } from "react";
import classes from './Navigation.module.css'
export const Navigation = () => {

  return (
    <nav className={classes.nav}  >
      <ul className={classes.navList}>
        <li>
          <a  href="#home" className={classes.anchor}>HOME</a>
        </li>
        <li>
          <a href="#about" className={classes.anchor} >ABOUT</a>
        </li>
        <li>
          <a href="#services" className={classes.anchor}>SERVICES</a>
        </li>
        <li>
          <a href="#portfolio" className={classes.anchor}>WORK</a>
        </li>
        
        <li>
          <a  href="#contact" className={classes.anchor}>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

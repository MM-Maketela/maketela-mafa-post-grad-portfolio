import React, { useEffect, useState } from "react";
import classes from './Navigation.module.css'
export const Navigation = () => {

  return (
    <nav className={classes.nav}  >
      <ul className={classes.navList}>
        <li>
          <a  href="#Home" className={classes.anchor}>HOME</a>
        </li>
        <li>
          <a href="#About" className={classes.anchor} >ABOUT</a>
        </li>
        <li>
          <a href="#Services" className={classes.anchor}>SERVICES</a>
        </li>
        <li>
          <a href="#Portfolio" className={classes.anchor}>PORTFOLIO</a>
        </li>
        
        <li>
          <a  href="#Contact" className={classes.anchor}>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

import React, { useEffect, useState } from "react";
import classes from './Navigation.module.css'
export const Navigation = () => {

  return (
    <nav className={classes.nav}  >
      <ul className={classes.navList}>
        <li>
          <a >HOME</a>
        </li>
        <li>
          <a >ABOUT</a>
        </li>
        <li>
          <a >SERVICES</a>
        </li>
        <li>
          <a >WORK</a>
        </li>
        
        <li>
          <a >CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

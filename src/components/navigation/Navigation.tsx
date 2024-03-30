import React, { useEffect, useState } from "react";
import classes from './Navigation.module.css'
export const Navigation = () => {

  return (
    <nav className={classes.nav}  >
      <ul className={classes.navList}>
        <li>
          <button >HOME</button>
        </li>
        <li>
          <button >ABOUT</button>
        </li>
        <li>
          <button >SERVICES</button>
        </li>
        <li>
          <button >WORK</button>
        </li>
        <li>
          <button >BLOG</button>
        </li>
        <li>
          <button >CONTACT</button>
        </li>
      </ul>
    </nav>
  );
};

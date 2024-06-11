import React from "react";
import classes from "./Landing.module.css";
import Typewriter from "typewriter-effect";
import { FaExternalLinkAlt } from "react-icons/fa";
export const Landing = () => {


  const isSmallScreen = window.innerWidth <=900;
  return (

    <div id="Home" className={classes.landing}>
     <div className={classes.heroOuterWrapper}>
     <div  className={classes.heroWrapper}>
      <div className={classes.heroText}>
        <h1 className={classes.mafaName}>Mafa Maketela</h1>

        <p className={classes.heroSummary}>As a passionate computer science graduate with a focus on software development and data analysis, I am eager to apply my technical skills to innovative projects in a collaborative tech environment. Seeking opportunities to contribute to cutting-edge solutions and enhance user experiences.</p>
      </div>
      <div className={classes.typeWriter}>
        <span>Professional &#160;</span>
        <span><Typewriter
          options={{
            
            strings: ["Full Stack React Web Developer.","Data Analyst.", "Software Engineer.", "Full Stack Java Application Developer."],
            autoStart: true,
            loop: true,
          }}
        /></span>
        
      </div>

          {
            isSmallScreen ? <a
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
            <h4 style={{ padding: "0px", margin: "0px" }}>HIRE ME</h4>
            <div>
              <FaExternalLinkAlt />
            </div>
          </a>: <div> </div>
          }
      
    </div>
     </div>
    </div>
    
  );
};

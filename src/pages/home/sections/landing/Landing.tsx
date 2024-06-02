import React from "react";
import classes from "./Landing.module.css";
import Typewriter from "typewriter-effect";
export const Landing = () => {
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
    </div>
     </div>
    </div>
    
  );
};

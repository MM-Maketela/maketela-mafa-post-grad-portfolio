import React from "react";
import classes from "./About.module.css";
export const About = () => {
  return (
    <div className={classes.about}>
      <div style={{ backgroundColor: "black" }}>
        <div className={classes.image}></div>
      </div>
      <div className={classes.aboutMeInfo}>
      My name is Mafa Maketela, and I hail from Matatiele in the Eastern Cape. From a young age, I've been captivated by the world of computers and technology. This fascination led me on a journey to pursue a Bachelor of Science degree in Computer Science at the University of the Western Cape.<br/><br/>

Growing up, my household had limited access to technology, but that didn't deter my curiosity. I sought out opportunities to learn about programming and software development wherever I could find them. Despite the challenges, I spent countless hours watching tutorials on YouTube, absorbing knowledge about building websites, e-commerce platforms, and more.<br/><br/>

My university education broadened my understanding of various computer science topics, from programming languages like Python and Java to complex concepts like algorithms and machine learning. However, it was web development that truly captured my interest. I immersed myself in learning languages such as JavaScript, React, CSS, HTML, and Node.js, honing my skills through practical projects like promotional websites and e-commerce applications.<br/><br/>

Throughout my journey, I've remained committed to expanding my knowledge and experience in web development. Every opportunity to learn and contribute to projects has been invaluable to me. My ultimate goal is not only to further my career in technology but also to make meaningful contributions to the industry by solving real-world problems through innovative solutions.<br/><br/>

In summary, I am Mafa Maketela, a passionate individual from Matatiele with a deep-rooted interest in technology. My journey from a young enthusiast to a budding web developer has been driven by curiosity, determination, and a relentless pursuit of knowledge.
      </div>
    </div>
  );
};

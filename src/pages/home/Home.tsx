import React from "react";
import classes from "./Home.module.css";
import { Landing } from "./sections/landing/Landing";
import { About } from "./sections/about/About";
import { Services } from "./sections/services/Services";
import { DividerSection } from "./sections/divider-section/DividerSection";
import { DividerCard } from "../../components/divider-card/DividerCard";
import { Background } from "../../components/background-image/Background";
import { Portfolio } from "./sections/portfolio/Portfolio";
import { Contact } from "./sections/contact/Contact";
import image  from  '../../assets/amalgamation.png'

export const Home = () => {
  return (
    <main className={classes.home}>
      <div style={{ backgroundImage:`url(${image})`, position:'fixed', left:'0px', top:'0px', height:'100vh',width:'100vw', zIndex:'-1'}}>
      
      </div>
      <div   style={{backgroundColor:'white'}}>
      <Landing   />
      <About />
      <Services />
      </div>
      <div style={{backgroundColor:'white', height:'2rem'}}>

      </div>
  
      <div   style={{backgroundColor:'white'}}>
      </div>
      
      <DividerSection />
      <div style={{backgroundColor:'white', height:'6rem'}}>

      </div>
      <div   style={{backgroundColor:'white', paddingBottom:'6rem'}}>

      <Portfolio />
     
      </div>

      <Contact />
    </main>
  );
};

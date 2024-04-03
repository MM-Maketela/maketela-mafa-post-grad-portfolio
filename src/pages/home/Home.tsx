import React from "react";
import classes from "./Home.module.css";
import { Landing } from "./sections/landing/Landing";
import { About } from "./sections/about/About";
import { Services } from "./sections/services/Services";
import { DividerSection } from "./sections/divider-section/DividerSection";
import { DividerCard } from "../../components/divider-card/DividerCard";
import { Background } from "../../components/background-image/Background";

export const Home = () => {
  return (
    <main className={classes.home}>
      <Landing />
      <About />
      <Services />
      <DividerSection />
    </main>
  );
};

import React, { ReactNode } from "react";
import classes from "./DividerCard.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface DividerCardProps {
  text: string;
  number: number;
  icon?: ReactNode;
}

export const DividerCard: React.FC<DividerCardProps> = ({ text, number, icon }) => {
  const [ref, inView] = useInView();
  return (
    <div className={classes.dividerCard}>
      <div className={classes.iconContainer}>{icon}</div>
      <h4 style={{ fontSize: "1.5rem", margin: "0px" }}>{<div ref={ref}>{inView ? <CountUp start={-50} duration={2} end={number} /> : number}</div>}</h4>
      <p style={{ color: "white", margin: "0px" }}>{text.toUpperCase()}</p>
    </div>
  );
};

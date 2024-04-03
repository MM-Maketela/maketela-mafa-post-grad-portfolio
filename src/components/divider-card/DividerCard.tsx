import React, { ReactNode } from "react";
import classes from "./DividerCard.module.css";

interface DividerCardProps {
  text:string,
  number: number,
  icon?: ReactNode
}


export const DividerCard:React.FC<DividerCardProps> = ({text,number, icon}) => {

  return (
    <div className={classes.dividerCard}>
      <div className={classes.iconContainer}>
        {icon}
      </div>
      <h4 style={{ fontSize: "1.5rem", margin: "0px" }}>{number}</h4>
      <p style={{ color: "white", margin: "0px" }}>{text.toUpperCase()}</p>
    </div>
  );
};

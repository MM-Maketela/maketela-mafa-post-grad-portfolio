import React, { useState, ReactNode } from "react";
import classes from "./ServiceCard.module.css";

interface ServiceCardProps {
  heading1: string;
  text1: [];
  Icon?: ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ heading1, text1, Icon }) => {
  const [headerText] = useState(heading1);
  const [text] = useState(text1);
  return (
    <div className={classes.serviceCard}>
      <div className={classes.icon}>{Icon}</div>

      <div style={{ flexGrow: "1" }}>
        <h1 style={{ fontSize: "1rem", textAlign: "center" }}>{headerText.toUpperCase()}</h1>
        <div>
          <ul style={{ margin: "1rem 0rem 0rem 0rem", padding: "0px", listStyle: "none", display: "grid", gap: ".2rem", fontSize: "1rem", color: "rgb(1, 77, 78,.7)", fontWeight: "200" }}>
            {text1?.map(
              (element: string, index: number): ReactNode => (
                <li key={`${index}`}>{element}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

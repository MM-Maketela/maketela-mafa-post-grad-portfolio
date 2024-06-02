import React, { ReactNode } from "react";
import classes from "./PortfolioCardWeb.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

interface WebCardProps {
  name: string;
  image: string;
  repoLink: string;
  usedTools: ReactNode[];
  numberOfDevs: number;
}
export const PortfolioCardWeb: React.FC<WebCardProps> = ({
  name,
  image,
  repoLink,
  usedTools,
  numberOfDevs,
}) => {
  return (
    <div className={classes.portfolioCardWeb}>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "13rem",
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
      ></div>

      <div className={classes.textContainer}>
        <h1 className={classes.projectName}>{name}</h1>
        <p
          style={{
            fontSize: "1rem",
            textAlign: "start",
            color: "rgb(1, 77, 78,1)",
            padding: "0px",
            margin: "0px",
          }}
        >
          Developer(s): {numberOfDevs}
        </p>
        <div style={{ flexGrow: "1" }}></div>
        <div style={{ display: "flex" }}>
          <ul className={classes.listOfTools}>
            {usedTools.map((element, index) => (
              <li key={index.toString()} className={classes.tool}>
                {element}
              </li>
            ))}
          </ul>
          <a
            href=""
            style={{
              flexGrow: "1",
              display: "flex",
              gap: ".2rem",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <h4>CODE</h4>
            <FaExternalLinkAlt size={15} style={{ color: "blue" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

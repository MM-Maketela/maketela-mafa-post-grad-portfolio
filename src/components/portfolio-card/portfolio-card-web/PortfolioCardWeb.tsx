import React, { ReactNode } from "react";
import classes from "./PortfolioCardWeb.module.css";

interface WebCardProps {
  name: string;
  image: string;
  usedTools: ReactNode[];
}
export const PortfolioCardWeb: React.FC<WebCardProps> = ({
  name,
  image,
  usedTools,
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
          backgroundColor:'black',
        }}
      >
        
      </div>
    </div>
  );
};

import React from "react";
import classes from "./Portfolio.module.css";
import { SubHeader } from "../../../../components/sub-header/SubHeader";
import { PortfolioCardMobile } from "../../../../components/portfolio-card/portfolio-card-mobile/PortfolioCardMobile";
import { PortfolioCardWeb } from "../../../../components/portfolio-card/portfolio-card-web/PortfolioCardWeb";
import easyShopping from "../../../../assets/easy_shopping_ecomerce.png";
import amalgamation from "../../../../assets/amalgamation.png";
import saliEng from "../../../../assets/sali_eng.png";
import votingFingerprintSystem from "../../../../assets/votingFingerprintSystem.jpg";
import cinema from "../../../../assets/cinema.jpg";
import qhuba from "../../../../assets/Screenshot_20240418-093344_Qhuba.jpg";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaReact, FaJava } from "react-icons/fa";
import { SiAndroidstudio, SiMysql } from "react-icons/si";

export const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <SubHeader heading="PORTFOLIO" subText="Explore a showcase of my finest work, exemplifying expertise, creativity, and dedication." />
      <div className={classes.portfolioCards}>
        <PortfolioCardWeb image={saliEng} name="Sali-Eng" usedTools={[]} />
        <PortfolioCardWeb image={easyShopping} name="EasyShopping" usedTools={[]} />
        <PortfolioCardWeb image={amalgamation} name="Amagamation" usedTools={[]} />
        <PortfolioCardMobile image={qhuba} name="Qhuba" usedTools={[]} />
        <PortfolioCardMobile image={votingFingerprintSystem} name="Voting Fingerprint System" usedTools={[]} />
        <PortfolioCardMobile image={cinema} name="Cinema" usedTools={[]} />
      </div>
    </div>
  );
};

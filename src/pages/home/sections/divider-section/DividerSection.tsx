import React from "react";
import classes from "./DividerSection.module.css";
import { DividerCard } from "../../../../components/divider-card/DividerCard";
import { IoMdTime } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { LiaAngleDownSolid } from "react-icons/lia";
const size = 50;

export const DividerSection = () => {
  return (
    <div className={classes.dividerSection}>
      <DividerCard
        text="Projects contributed in"
        number={8}
        icon={<LiaProjectDiagramSolid size={size} />}
      />
      <DividerCard
        text="years of experience"
        number={2}
        icon={<IoMdTime size={size} />}
      />
      <DividerCard
        text="Team Collaboration"
        number={3}
        icon={<RiTeamLine size={size} />}
      />
      
    </div>
  );
};

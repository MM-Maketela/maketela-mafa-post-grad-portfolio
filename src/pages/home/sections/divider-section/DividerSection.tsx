import React from "react";
import classes from "./DividerSection.module.css";
import { DividerCard } from "../../../../components/divider-card/DividerCard";
import { RiTimer2Line } from "react-icons/ri";
const size = 50;

export const DividerSection = () => {
  return (
    <div className={classes.dividerSection}>
      <DividerCard
        text="amet consectetur"
        number={45}
        icon={<RiTimer2Line size={size} />}
      />
      <DividerCard
        text="amet consectetur"
        number={45}
        icon={<RiTimer2Line size={size} />}
      />
      <DividerCard
        text="amet consectetur"
        number={45}
        icon={<RiTimer2Line size={size} />}
      />
      <DividerCard
        text="amet consectetur"
        number={45}
        icon={<RiTimer2Line size={size} />}
      />
    </div>
  );
};

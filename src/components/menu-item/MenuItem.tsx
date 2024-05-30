import React, { ReactNode } from "react";
import classes from "./MenuItem.module.css";
import { IconType } from "react-icons";

interface Props {
  label: string;
  Icon: IconType;
}
export const MenuItem = (props: Props) => {
  const { Icon, label } = props;
  return (
    <div className={classes.menuItemWrapper}>
      < Icon  className={classes.icon}/>
      <p className={classes.label}>{label}</p>
    </div>
  );
};

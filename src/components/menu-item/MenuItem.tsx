import classes from "./MenuItem.module.css";
import { IconType } from "react-icons";

interface Props {
  label: string;
  Icon: IconType;
}
export const MenuItem = (props: Props) => {
  const { Icon, label } = props;
  return (
    <a className={classes.menuItemWrapper} href={`#${label}`}>
      <Icon className={classes.icon} />
      <p className={classes.label} style={{ color: "white" }}>
        {label}
      </p>
    </a>
  );
};

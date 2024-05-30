import React,{ReactNode} from 'react'
import classes from './DropDownMenu.module.css'
interface Props {
    children:ReactNode;
    menuState: boolean;

}
export const  DropDownMenu = (props:Props) => {
    const {children, menuState} = props
  return (
    <div className ={ [classes.dropDownMenu,menuState ? classes.showMenu : classes.hideMenu ].join(" ")}>
      {children}
    </div>
  )
}

import React,{ReactNode} from 'react'
import classes from './DropDownMenu.module.css'
interface Props {
    children:ReactNode;

}
export const  DropDownMenu = (props:Props) => {
    const {children} = props
  return (
    <div className={classes.dropDownMenu} id={classes.dropDownMenu}>
      {children}
    </div>
  )
}

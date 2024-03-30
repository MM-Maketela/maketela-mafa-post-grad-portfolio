import React, {useState} from 'react'
import classes from './Header.module.css'
import { Navigation } from '../navigation/Navigation'
import { MdWhatsapp, MdFacebook } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
export const Header = () => {

const [changeColor, setChangeColor] = useState(false)
function windowScrolling(){
    window.scrollY >= 1 ? setChangeColor(true): setChangeColor(false)
}
 window.addEventListener("scroll", windowScrolling);
  return (
    <header className={classes.header} style={{backgroundColor:changeColor? "rgb(96, 125, 139)":"inherit"}}>
      <div className={classes.contactInfo}>
            <ul className={classes.contactList}>
              <li >< MdWhatsapp  size={30}   className={classes.contactListItem}/> </li>
              <li >< MdFacebook  size={30} className={classes.contactListItem}/> </li>
              <li >< AiOutlineLinkedin  size={30} className={classes.contactListItem}/> </li>
              <li > <AiOutlineGithub  size={30} className={classes.contactListItem}/>  </li>
              
            </ul>
      </div>
      <div className={classes.divider}></div>
      <div style={{position:"relative"}}>
      <Navigation />      

      </div>
    </header>
  )
}

import React, {ReactNode} from 'react'
import classes from './PortfolioCardMobile.module.css'
import { FaExternalLinkAlt } from "react-icons/fa";

interface MobileCardProps{
  image: ReactNode,
  name:string,
  usedTools: ReactNode [], 
  numberOfDevs: number;
}

export const PortfolioCardMobile: React.FC<MobileCardProps> = ({image, name, usedTools, numberOfDevs}) => {


  return (
    <div className={classes.portfolioCardMobile}>
        <div className={classes.image}  style={{backgroundImage:`url(${image})`, backgroundSize:'cover', backgroundPosition:'center'}}>

        </div>
        <div  className={classes.text}>
          <h1 className={classes.projectName}>{name}</h1>
          <p style={{fontSize:"1rem", marginInline:"auto", textAlign:"center" , color:"teal"}}>
            Developers: {numberOfDevs}
          </p>


          <div style={{flexGrow:"1"}}></div>


          <a href="" style={{display:"flex", gap:".2rem", alignItems:"center", justifyContent:"center"}}>
          CODE
                          <FaExternalLinkAlt  size={15} style={{color:"blue"}}/>
          </a>

          <ul className={classes.listOfTools}>
            {
            usedTools.map((element, index)=>(<li id={index.toString()} className={classes.tool}>

              {element}

            </li>))
            }
          </ul>

        </div>

    </div>
  )
}

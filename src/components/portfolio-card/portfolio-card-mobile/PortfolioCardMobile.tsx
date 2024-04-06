import React, {ReactNode} from 'react'
import classes from './PortfolioCardMobile.module.css'

interface MobileCardProps{
  image: ReactNode,
  name:string,
  usedTools: ReactNode [], 
}

export const PortfolioCardMobile: React.FC<MobileCardProps> = ({image, name, usedTools}) => {


  return (
    <div className={classes.portfolioCardMobile}>
        <div className={classes.image}  style={{backgroundImage:`url(${image})`, backgroundSize:'cover', backgroundPosition:'center'}}>

        </div>
        <div  className={classes.tex}>

        </div>

    </div>
  )
}

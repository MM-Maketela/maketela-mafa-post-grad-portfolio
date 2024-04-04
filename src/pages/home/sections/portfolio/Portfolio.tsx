import React from 'react'
import classes from './Portfolio.module.css'
import { SubHeader } from '../../../../components/sub-header/SubHeader'
export const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
        <SubHeader  heading="PORTFOLIO"  subText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
        <div className={classes.portfolioCards}>

     
        </div>
    </div>
  )
}

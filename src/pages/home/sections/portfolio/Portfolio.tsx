import React from 'react'
import classes from './Portfolio.module.css'
import { SubHeader } from '../../../../components/sub-header/SubHeader'
import { PortfolioCardMobile } from '../../../../components/portfolio-card/portfolio-card-mobile/PortfolioCardMobile'
import { PortfolioCardWeb } from '../../../../components/portfolio-card/portfolio-card-web/PortfolioCardWeb'
import webImage from '../../../../assets/easy_shopping_ecomerce.png'
import mobileImage from '../../../../assets/votingFingerprintSystem.jpg'
import { IoLogoJavascript } from "react-icons/io5"
import { IoLogoCss3 } from "react-icons/io"
import { IoLogoHtml5 } from "react-icons/io5"
import { FaReact ,FaJava} from "react-icons/fa"
import { SiAndroidstudio,SiMysql } from "react-icons/si"


export const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
        <SubHeader  heading="PORTFOLIO"  subText = "Explore a showcase of my finest work, exemplifying expertise, creativity, and dedication." />
        <div className={classes.portfolioCards}>
          <PortfolioCardWeb   image = {webImage}  name = "site name"  usedTools={[]}/>
          <PortfolioCardWeb   image = {webImage}  name = "site name"  usedTools={[]}/>
          <PortfolioCardWeb   image = {webImage}  name = "site name"  usedTools={[]}/>
          <PortfolioCardMobile image = {mobileImage}  name = "app name"  usedTools={[]}/>
          <PortfolioCardMobile image = {mobileImage}  name = "app name"  usedTools={[]}/>
          <PortfolioCardMobile image = {mobileImage}  name = "app name"  usedTools={[]}/>
        </div>
    </div>
  )
}

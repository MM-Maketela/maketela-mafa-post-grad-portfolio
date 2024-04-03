import React from 'react'
import classes from './Services.module.css'
import { ServiceCard } from '../../../../components/serviceCard/ServiceCard'
import { BiTask } from "react-icons/bi"
export const Services = () => {
  const size = 80
  return (
    <div className={classes.services}>
        <div style={{marginBottom: '2rem'}}>
        <h1>SERVICES</h1>
        <p > Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={classes.servicesCards}>

            <ServiceCard Icon = {< BiTask size={size}/>} text1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident. " heading1 = "heading"/>
            <ServiceCard Icon = {< BiTask size={size}/>} text1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident. " heading1 = "heading"/>
            <ServiceCard Icon = {< BiTask size={size}/>} text1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident. " heading1 = "heading"/>
            <ServiceCard Icon = {< BiTask size={size}/>} text1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident. " heading1 = "heading"/>
            <ServiceCard Icon = {< BiTask size={size}/>} text1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident. " heading1 = "heading"/>
            <ServiceCard Icon = {< BiTask size={size}/>} text1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident. " heading1 = "heading"/>

        </div>

        
    </div>
  )
}

import React from 'react'
import classes from './Services.module.css'
import { ServiceCard } from '../../../../components/serviceCard/ServiceCard'
export const Services = () => {
  return (
    <div className={classes.services}>
        <div style={{marginBottom: '2rem'}}>
        <h1>SERVICES</h1>
        <p > Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={classes.servicesCards}>

            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />

        </div>

        
    </div>
  )
}

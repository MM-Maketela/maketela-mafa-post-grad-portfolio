import React,{useState, ReactNode} from 'react'
import classes from './ServiceCard.module.css'

interface ServiceCardProps {
  heading1:string,
  text1:string,
  Icon?: ReactNode

}

export const ServiceCard:React.FC<ServiceCardProps> = ({heading1, text1, Icon}) => {
  const [headerText] = useState(heading1)
  const [text] = useState(text1)

  return (
    <div className={classes.serviceCard}>

      <div  className={classes.icon}>
              {Icon}
      </div>

      <div>
      <h1  style={{fontSize:'1.5rem'}}>
        {headerText.toUpperCase()}
      </h1>
      <p style={{fontSize:'1.1rem'}}>
    {text}
      </p>
      </div>
     

    </div>
  )
}

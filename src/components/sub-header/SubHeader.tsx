import React from 'react'
import classes from './SubHeader.module.css'

interface SubHeaderProps  {

  heading:string,
  subText:string

}

export const SubHeader:React.FC<SubHeaderProps> = ({heading, subText}) => {
  return (
    <div className={classes.subHeader}>
      <h1>{heading.toUpperCase()}</h1>
      <p>{subText}</p>
    </div>
  )
}

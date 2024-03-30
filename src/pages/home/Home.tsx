import React from 'react'
import classes from './Home.module.css'
import { Landing } from './sections/landing/Landing'
import { About } from './sections/about/About'
import { Services } from './sections/services/Services'

export const Home = () => {
  return (
    <main className={classes.home}>
      <Landing/>
      <About/>
      <Services />
    </main>
  )
}

import React from 'react'
import classes from './Contact.module.css'
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BiPhoneCall } from "react-icons/bi";

export const Contact = () => {
  const size = 25
  return (
    <div className={classes.contact}>


      <div className={classes.contactCard}>

        <form  className={classes.form}>
          <h1 style={{color:'teal', fontSize:'2rem', textAlign:'start'}}>SEND MAFA A MESSAGE</h1>

          <input  className={classes.input}    placeholder='Full name'     id='name'    name='name' />
          <input  className={classes.input}     placeholder='Email'     id='email'    name='email' />
          <input  className={classes.input}     placeholder='Subject'     id='subject'    name='subject' />

          <textarea id='textarea' name='text' className={classes.textArea}>

          </textarea>
        </form>
        <div  className={classes.contactInfo}>
        <h1 style={{color:'teal', fontSize:'2rem', textAlign:'start'}}>GET IN TOUCH</h1>

        <p style={{fontSize:'1.5rem', textAlign:'start', marginLeft:"0px"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at.
        Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione
        nobis mollitia inventore? 
        </p>
          

      
            <ul className={classes.contactContainer}>
              <li className={classes.contactIconAndInfo}>
                  <CiLocationOn  size={20}/>  <p> 329 WASHINGTON ST BOSTON, MA 02108</p>
              </li>

              <li  className={classes.contactIconAndInfo}>
                <BiPhoneCall   size={20}/>  <p>(617) 557-0089</p>
              </li>

              <li  className={classes.contactIconAndInfo}>
                <TfiEmail size={20}/><p>contact@example.com</p>
              </li>
            </ul>
      
        <ul className={classes.iconContainer}>
          <li   className={classes.socialMediaIcon}> {< CiFacebook  size={size}/>}</li>
          <li   className={classes.socialMediaIcon}> <CiLinkedin size={size}/></li>
          <li   className={classes.socialMediaIcon}><CiTwitter size={size}/></li>
          <li   className={classes.socialMediaIcon}><FaWhatsapp size={size}/></li>
        </ul>
        </div>

      </div>
    </div>
  )
}

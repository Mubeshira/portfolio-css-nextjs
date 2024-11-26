"use client"
import React from 'react'
import styles from './HeroSection.module.css'
import { inter } from '@/font'
import Button from '../button/button'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Image from 'next/image'
import {motion} from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'






function HeroSection() {
  return (
    <>
    <section className={`${styles.hero} ${inter.className}`}>
        <h1>Hi <span>I</span>&apos;m {" "} <span>Mubeshira Saad</span>

        <motion.span style={{display:"inline-block",fontSize:"50px"}}
        animate={{rotate:[0,15,-10,20,,-10,0]}}
        transition={{duration:1.5,repeat:Infinity, ease:"easeInOut"}}
        >
           {" "}👋
           </motion.span>

         <br /> I &apos;m {" "}
         <Typewriter
         words={['Front End Developer', 'UX UI Designer']}
         loop={Infinity}
         cursor={true}
         cursorStyle={'_'}
         typeSpeed={80}
         delaySpeed={1500}
         deleteSpeed={50}
         />
          </h1>
          

        <p>I can build user interface for web sites and applications with{" "}
             <span>React JS</span> {" "} and <span>Next JS</span>
          <br />  I love the frontend development.
        </p>

        <Button text={"Hire Me"} />

        <div className={styles.socialIconsDiv}>
        <FaXTwitter size={30} color='black'/>
        <FaInstagram size={30} color='black'/>
        <FaWhatsapp size={30} color='black'/>
        <FaTelegramPlane size={30}  color='black'/>
        <FaFacebookF size={30}  color='black' />

        </div>
        <div className={styles.bottomImageDiv}>
            <Image src={"/behance.png"} alt={"picbehance"} width={156} height={156}></Image>
            <Image src={"/dribble.png"} alt={"picdribble"} width={156} height={156}></Image>
            <Image src={"/upwork.png"} alt={"picupwork"} width={156} height={156}></Image>
            <Image src={"/freelance.png"} alt={"picfreelance"} width={156} height={156}></Image>
        
        </div>
        
    </section>
      
    </>
  )
}

export default HeroSection

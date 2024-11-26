"use client"
import React from 'react'
import styles from './AboutSection.module.css'
import { caveat, inter } from '@/font'
import Button from '../button/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

function AboutSection() {
  return (
 <>
 <section id='about' className={styles.about}>
    <motion.div className={styles.aboutLeftDiv}
    initial={{opacity:0, x:-100}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:2, type:"spring"}}
    >
        <h1 className={caveat.className}>Mubeshira Saad</h1>

        <p className={caveat.className}>Freelance Web Developer</p>
        <h2 className={`${styles.detailsText} ${inter.className}`}> Hi, I am  a passionate
           web developer with expertise in building modern, responsive websites and web
           applications. I love turning idea into reality using the power of JavaScript,
           Next.js, and Tailwind CSS. With a background in computer science, I have 
           developed a wide range of skills including HTML, CSS, TypeScript, JavaScript,
            React, Next.js, and more.
        </h2>
         <Button text={"Contact Me"}></Button>
    </motion.div>
    <motion.div className={styles.aboutRightDiv}
    initial={{opacity:0, x:100}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:2, type:"spring"}}
    >
        <Image src={"/girl.png"} alt={"pic"} width={400} height={400} className={styles.img}></Image>
    </motion.div>
 </section>
 </>
  )
}

export default AboutSection

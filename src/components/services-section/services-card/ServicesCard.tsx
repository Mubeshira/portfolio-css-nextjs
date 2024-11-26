"use client"
import React, { useRef } from 'react'
import styles from './ServicesCard.module.css'
import Image from 'next/image'
import { inter } from '@/font'
import { servicesCard } from '@/constant/servicesCards'
import {motion, useMotionValue, useTransform} from 'framer-motion'
function ServicesCard() {
    return (
        <>
           {servicesCard.map((item, index)=>{return(
               <Card item={item} key={index} />
           )})}
        </>
    )
}

// card component
function Card({item}: {item:{src:string, title:string, description:string}}) {
   const cardRef = useRef<HTMLDivElement>(null);
   const mouseX = useMotionValue(0);  
   const mouseY = useMotionValue(0); 

   const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
   const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

   const handleMouseMove= (e:React.MouseEvent)=> {
    if(!cardRef.current) return;
     const rect= cardRef.current.getBoundingClientRect();
     const x = e.clientX - rect.left  - rect.width/2;
     const y = e.clientY - rect.top - rect.height/2;

     mouseX.set(x);
     mouseY.set(y);
   }
   const handleMouseLeave =() => {
    
    mouseX.set(0);
    mouseY.set(0);

   }


    return(
        <motion.div className={`${styles.card} ${inter.className}`} 
        ref={cardRef} 
        style={{perspective:1000, rotateX:rotateX, rotateY:rotateY}}
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
        >
        <div className={styles.cardImage}>
           <Image
            src={item.src } 
            alt={"pic"} 
            width={60} 
            height={60}
            ></Image>
            </div>
        <h1>{item.title}</h1>
        <p>
           {item.description}
        </p>
    </motion.div>

    )

}








export default ServicesCard

import React from 'react'
import styles from './TestimonialCard.module.css'
import Image from 'next/image'
import { inter } from '@/font'
import { testimonialCards } from '@/constant/testimonialCard'

function TestimonialCard() {
  return (
    <>
    {testimonialCards.map((card, index)=>{return(
        
    <div className={`${styles.card} ${inter.className}`} key={index}>
    <div className={styles.cardImage}>
      <Image src={card.src} alt={"pic"} width={150} height={150} ></Image>
    </div>
    <p>{card.name}</p>
    <p><span>{card.title}</span></p>
    <p style={{marginBottom:"0px"}}>{card.description}</p>
  </div>
    )})}
    
    </>
  )
}

export default TestimonialCard

import React from 'react'
import styles from './Portfolio.module.css'
import { caveat, inter } from '@/font'
import PortfolioCard from './portfolio-cards/PortfolioCard'

function Portfolio() {
  return (
   <>
      <section id='portfolio' className={styles.portfolio}>
        <h1 className={`${caveat.className}`}>
            <span>M</span>y {" "}
            <span>L</span>ast {" "}
            <span>W</span>ork {" "}
        </h1>

        <p className={inter.className}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.laboriosam exercitationem
             Velit in error amet, voluptate laboriosam exercitationem <br /> doloremque iure dolorum fugit est saepe, eius harum nulla maiores consequuntur magni alias quaerat! Maiores,
             illum vel explicabo delectus <br/> labore perspiciatis aspernatur.</p>
             <div className={styles.myWork}>
                <PortfolioCard />
              
                
             </div>
      </section>
   </>
  )
}

export default Portfolio

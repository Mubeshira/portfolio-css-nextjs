import React from 'react'
import styles from './Services.module.css'
import { caveat, inter } from '@/font'
import ServicesCard from './services-card/ServicesCard'

function Services() {
    return (
        <>
            <section id='services' className={styles.services}>
                <h1 className={caveat.className}>
                    <span>W</span>hat {" "}
                    <span>I</span>{" "}
                    <span>d</span>o{" "}
                    <span>f</span>or{" "}
                    <span>c</span>lient
                </h1>
                <p className={inter.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus necessitatibus
                    vitae ipsa ea possimus fugiat <br /> expedita, quaerat voluptates amet facere dolorem fuga
                    numquam dolorum?</p>
                <div className={styles.servicesCardDiv}>
                    <ServicesCard />
                </div>
            </section>
        </>
    )
}

export default Services

"use client"
import React, { useState } from 'react'

import styles from './ContactUs.module.css'
import { caveat, inter } from '@/font'
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { sendEmail } from '@/utils/emailService';



function ContactUs() {
    const[name, setName]= useState('')
    const[email, setEmail]= useState('')
    const[message, setMessage]= useState('')

    const handleSubmit= async (e:React.FormEvent)=>{
        e.preventDefault();
        const templateParams ={
            to_name: "Mubeshira Saad",
            from_name: name,
            from_email: email,
            message: message
        };

        try {await sendEmail(templateParams);
            alert("Email sent successfully");
            setName('');
            setEmail('');
            setMessage('');
        
        }
        catch(error){
            console.error('EmailJs Error',error);
            alert("Failed to send email");
        }
        
    }

  return (
    <>
    <section id='contact' className={`${styles.contactUs} ${inter.className}`}>
        <h1 className={caveat.className}>
           <span>C</span>ontact {"  "}
           <span>M</span>e</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, reiciendis quos! Sint cum nulla sapiente <br />
            accusamus non est modi cupiditate aut, nihil eius fugit?</p>


            <div className={styles.contactUsBottomDiv}>
                <div className={styles.contactLeftDiv}>
                    <div className={styles.contactLeftDivContainer}>
                    <MdEmail size={24} color={"var(--logo-color)"} />
                    <div className={styles.contactLeftDivText}>
                        <h6>Have a question?</h6>
                        <h6>I am here to help you</h6>
                        <h6>Email me at mubeshira.saad2016@hotmail.com</h6>
                    </div>

                    </div>

                    <div className={styles.contactLeftDivContainer}>
                    <FaMapMarkerAlt size={24} color={"var(--logo-color)"} />
                    <div className={styles.contactLeftDivText}>
                        <h6>Current Location</h6>
                        <h6>Karachi, Pakistan</h6>
                        <h6>serving clients worldwide</h6>
                    </div>

                    </div>

                </div>
            
                <div className={styles.contactRightDiv}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.topInputDiv}>
                            <input type='text' placeholder='Your name' className={styles.inputDetails} name='name' value={name} onChange={(e)=>setName(e.target.value)} />
                            <input type='text' placeholder='Your email' className={styles.inputDetails} name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <input type="text" placeholder='subject'  className={styles.inputDetails} style={{width:"100%"}} name='message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        <textarea placeholder='your message'  className={styles.inputDetails} style={{height:"224px"}}></textarea>
                        <input type="submit" className={styles.inputBtn} value={"Send message"} />
                    </form>
                </div>
            </div>
    </section>
    </>
  )
}

export default ContactUs

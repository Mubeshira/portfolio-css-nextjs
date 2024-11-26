import React from 'react'
import styles from './button.module.css'

function button(props:{text:string}) {
    const {text} = props
  return (
    <>
    <button className={styles.button}>{text}</button>
      
    </>
  )
}

export default button

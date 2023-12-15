import React, { MouseEventHandler } from 'react'
import styles from './Button.module.css'

type ButtonType = {
  children: React.ReactNode,
  onClick: Function,
  type: string
}

export default function Button({children, onClick, type}:ButtonType) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={(e)=>onClick}>{children}</button>
  )
}

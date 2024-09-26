import React from 'react'
import styles from './index.module.css'

const FormField = ({type,placeholder,getChange,getvalue}) => {
  return (
    <>
     <input type={type} value={getvalue} className={styles.inputField} placeholder={placeholder} onChange={(e)=>getChange(e)} /> 
    </>
  )
}

export default FormField

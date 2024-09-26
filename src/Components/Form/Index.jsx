import React from 'react'
import FormField from '../../Widgets/FormField/Index'

import styles from '../../Widgets/FormField/index.module.css'
const Form = (props) => {
  return (
    <>
      <div className={styles.formContainer}>
      <FormField type="text" placeholder="Enter The Title" getvalue={props.title} getChange={props.titledata} />
      <textarea className={styles.textArea} value={props.desc} onChange={(e)=>props.descdata(e)} placeholder='Enter The Description'></textarea>
     <div className={styles.btnContainer}>
      <button className={styles.formSave} onClick={props.savedata}>{props.savenote}</button>
        </div>
        </div> 
    </>
  )
}

export default Form

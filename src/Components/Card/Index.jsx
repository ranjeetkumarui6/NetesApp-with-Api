import React from 'react'
import styles from './index.module.css'
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import App from '../../App';
import Form from '../Form/Index';

const Card = (props) => {
const{title,desc,ids,deletefun,editfun}=props


  return (
    <>
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.imgpic}>
          <img src={props.image} alt="fakeimg" className={styles.img} />
          </div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className={styles.cardicons}>
        <div className={styles.delete} onClick={()=>deletefun(ids)}>
        <FaTrash  className={styles.trash}/>
        </div>
        <div className={styles.edit} onClick={()=>editfun(ids)}>
        <FaEdit className={styles.editicon} />
        </div>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Card

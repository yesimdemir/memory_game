import { useState } from 'react'
import styles from '../../styles/Home.module.css'

export default function Card({ box,id_,index, clickhandler }) {
    const cardClassName = box.status ? 'active' : ''
    return (
        <>
            <div className={styles.box + ` ${box.status}`} onClick={() => {
                clickhandler(id_)}}>
                <img  src={box.img} alt={box.name} 
                />
            </div>
        </>
    );
}

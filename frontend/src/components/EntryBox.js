import React from 'react';
import styles from '../styles/EntryBox.module.css';

// displays title and date of journal entry for user when viewing entries
export default function EntryBox(props) {

    return(
        <div className={styles.container} key={props.id}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.date}>{props.date}</p>
        </div>
    )
}
import React from 'react';
import styles from '../styles/Home.module.css'
import SideBar from '../components/SideBar';

export default function HomePage() {

    return (
        <div className={styles.container}>
            <SideBar/>
            <h1 className={styles.title}>BrainWave</h1>
        </div>
    )
}

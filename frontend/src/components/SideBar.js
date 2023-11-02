import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import styles from '../styles/SideBar.module.css';
// import logo from '../images/logo.PNG';
// import name from '../images/name.PNG;'

export default function SideBar(props) {
    
    // update route when rest of the pages are completed
    const NavOptions = [
        {label: 'New Entry', route:'/addEntry'},
        {label: 'Journal', route:'/viewEntries'},
        {label: 'Settings', route:'/contactform'}
        ]

    return (
        <div container className={styles.outContainer}>
            {/* <img src={logo} alt='logo'className={styles.img}/> */}
            <div className={styles.inContainer}>
                {NavOptions.map((data) => {
                    return (
                        <Link to={data.route}>
                            <Button item className={styles.button} > 
                            {data.label}
                            </Button>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}
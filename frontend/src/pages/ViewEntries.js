import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import EntryBox from '../components/EntryBox';
import styles from '../styles/ViewEntries.module.css';
import axios from 'axios';

export default function ViewEntries() {

    const[entries, setEntries] = useState([]);

    // get entries from backend database - runs after every render
    const fetchEntries = () => {
        axios.get('http://127.0.0.1:5000/viewEntries')
        .then((response) => {
            setEntries(response.data);
            console.log('Entries retreived successfully', response.data);
        })
        .catch((error) => {
            console.log('Error retrieving entries:', error);
        });
    };
    
    // Fetch entries on component mount and browser refresh
    useEffect(() => {
        fetchEntries();
    })

    return(
        <div className={styles.container}>
            <SideBar />
            <div className={styles.entryContainer}>
                {/* create copy of array and reverse it so that new additions are at the top */}
                {[...entries].reverse().map((entry) => (
                    <Link
                        to={`/viewEntries/${entry.id}`}
                        key={entry.id}
                    >
                        <EntryBox 
                            id={entry.id} 
                            title={entry.title} 
                            date={entry.date}
                        />
                    </Link>
                ))}
            </div>
        </div>

    )
}
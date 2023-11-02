// import styles from '../styles/AddEntry.module.css';
import styles from '../styles/JournalEntry.module.css';

import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import TitleBox from '../components/TitleBox.js'
import ContentBox from '../components/ContentBox.js'
import SaveButton from '../components/SaveButton.js';
import axios from 'axios';

export default function AddEntry() {
        const navigate = useNavigate();

    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");

    const handleTitleChange = (titleChange) => {
        setTitle(titleChange)
    };

    const handleContentChange = (contentChange) => {
        setContent(contentChange)
    };     

    const saveJournalEntry = () => {
        // sends a POST request with 'title' and 'content'
        // data in post body
        axios.post('http://127.0.0.1:5000/addEntry', {
            title: title,
            content: content
        })
        .then(response => {
            console.log('Journal entry saved successfully', response);
            navigate('/viewEntries'); // navigate to journal entries page after save
        })
        .catch(error => {
            console.log('Error saving journal entry:', error);
        });
    }

    return (
        <div className={styles.container}>
            <SideBar className={styles.side}/>
            <div className={styles.entryContainer}>
                <div className={styles.container}>
                    <TitleBox onTitleChange={handleTitleChange} />
                    <ContentBox onContentChange={handleContentChange}/>
                    <div className={styles.saveContainer}>
                        <SaveButton onClick={saveJournalEntry}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

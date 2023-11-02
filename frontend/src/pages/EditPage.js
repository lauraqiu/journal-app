// import styles from '../styles/AddEntry.module.css'
import styles from '../styles/JournalEntry.module.css';

import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TitleBox from '../components/TitleBox.js';
import ContentBox from '../components/ContentBox.js';
import SaveButton from '../components/SaveButton.js';
import SideBar from '../components/SideBar';
import axios from 'axios';


export default function EditPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const[title, setTitle] = useState();
    const[content, setContent] = useState();

    // obtain journal information to repopulate text fields
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/viewEntries/${id}`)
        .then(response => {
            console.log('Journal editing...', response.data);
            setTitle(response.data.title);    
            setContent(response.data.content);
        })
        .catch(error => {
            console.log('Error:', error)
        })
        // eslint-disable-next-line
    }, [])

    const handleTitleChange = (titleChange) => {
        setTitle(titleChange)
    };

    const handleContentChange = (contentChange) => {
        setContent(contentChange)
    };     

    const saveJournalEntry = () => {
        // sends a POST request with 'title' and 'content'
        // data in post body
        axios.post(`http://127.0.0.1:5000/edit/${id}`, {
            title: title,
            content: content
        })
        .then(response => {
            console.log('Journal entry edited successfully', response);
            navigate('/viewEntries'); // navigate to journal entries page after save
        })
        .catch(error => {
            console.log('Error editing journal entry:', error);
        });
    }

    return (
        <div className={styles.container}>
            <SideBar className={styles.side}/>
            <div className={styles.entryContainer}>
                <div className={styles.container}>
                    <TitleBox title={title} onTitleChange={handleTitleChange} />
                    <ContentBox content={content} onContentChange={handleContentChange}/>
                    <div className={styles.saveContainer}>
                        <SaveButton onClick={saveJournalEntry}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

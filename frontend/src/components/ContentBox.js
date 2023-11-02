import React from 'react';
import TextField from '@mui/material/TextField';
import styles from '../styles/TextBox.module.css'

export default function ContentBox({ onContentChange, content }) {
    
    const handleInputChange = (e) => {
        onContentChange(e.target.value);
    };
    return (
        <div className={styles.container}>   
            <h2 className={styles.header}>Content</h2>
            <TextField 
                id="outlined-basic" 
                variant="filled"
                fullWidth 
                multiline
                rows='15'
                sx={{
                    backgroundColor: '#FFFFFF',
                }}
                onChange={handleInputChange}
                defaultValue={content}
            />
        </div>
    )
}
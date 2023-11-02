import React from 'react';
import TextField from '@mui/material/TextField';
import styles from '../styles/TextBox.module.css'

// receives props called 'onTitleChange', which is the event handler handleTitleChange
export default function TitleBox({ onTitleChange, title}) {
    // called when user types in the text box
    // extracts new value from event object and passes to parent
    const handleInputChange = (e) => {
        onTitleChange(e.target.value);
    };
    
    return (
        <div className={styles.container}>   
            <h2 className={styles.header} >Title</h2>
            <TextField 
                id="outlined-basic" 
                variant="filled"
                multiline
                fullWidth
                size='small'
                sx={{
                    backgroundColor: '#FFFFFF',
                    width: '50%'
                }}
                onChange={handleInputChange}
                defaultValue={title}
            />
        </div>
    )
}

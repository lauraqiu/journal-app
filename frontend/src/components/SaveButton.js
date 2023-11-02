import React from 'react';
import Button from '@mui/material/Button';

export default function SaveButton(props) {

    const saveJournalEntry= (e) => {
        props.onClick(e.target.value);
    };

    return (
        <Button 
            variant="contained"
            sx={{backgroundColor: '#A63A50',
                '&:hover': {
                    backgroundColor: '#A63A50',
                    color: '#FFFFFF',
                }}}
            onClick={saveJournalEntry}
        >Save</Button>
    )
}
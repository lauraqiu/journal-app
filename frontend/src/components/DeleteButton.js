import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function DeleteButton() {

    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {

        axios.delete(`http://127.0.0.1:5000/delete/${id}`)
        .then((response) => {
            console.log('Entry deleted successfully');
            // navigate to viewEntries page after deleting entry
            navigate('/viewEntries')
        })
        .catch((error) => {
            console.log('Error deleting entry:', error);
        });
    }

    return (
        <Button 
            variant="contained"
            sx={{backgroundColor: '#FFFFFF',
                color: '#000000',
                '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#000000'
            }}}
            onClick={handleDelete}
        >Delete</Button>
    )
}
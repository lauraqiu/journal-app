import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function EditButton() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/editPage/${id}`)
    }

    return (
        <Button 
            variant="contained"
            sx={{backgroundColor: '#A63A50',
                '&:hover': {
                    backgroundColor: '#A63A50',
                    color: '#FFFFFF',
            }}}
            onClick={handleClick}
        >Edit</Button>
    )
}
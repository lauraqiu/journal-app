import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';
import SideBar from '../components/SideBar';
import axios from 'axios';

export default function Entry() {
    // retrieve id value in route path
    const { id } = useParams();
    
    const[entry, setEntry] = useState(null);

    useEffect(() => {
        if (id) {
            // send GET request to fetch journal data 
            axios.get(`http://127.0.0.1:5000/viewEntries/${id}`)
            .then((response) => {
                setEntry(response.data);
                console.log('Journal entry loaded successfully', entry)
            })
            .catch((error) => {
                console.log('Error viewing entry:', error)
            })
        }
    // eslint-disable-next-line
    }, [id])

    if (!entry) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <SideBar/>
            <div>
                <h1>{entry.title}</h1>
                <h2>{entry.date}</h2>
            </div>
            <div>
                <p>{entry.content}</p>
            </div>
            <EditButton/>
            <DeleteButton />
        </div>
    )
}
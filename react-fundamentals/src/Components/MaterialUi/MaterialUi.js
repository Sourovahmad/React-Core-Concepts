import { Button } from '@mui/material';
import Axios from 'axios';
import React, { useEffect } from 'react';


const MaterialUi = () => {

    useEffect(() => {

        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data => console.log(data.data));
    }, [])

    return (
        <div>
            <Button variant="contained" color="info">Hello Button</Button>
        </div>
    );
};

export default MaterialUi;
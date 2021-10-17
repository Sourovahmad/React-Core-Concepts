
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Practice() {


    const [data, setData] = useState([]);

    useEffect(() => {

       axios.get('http://127.0.0.1:8000/api/students')
        .then(data => {
            setData(data.data)

        })
        .catch(error => console.log(error))


    }, [])



    return (
        <div>
            <div className="container">
                <div className="row">
                <ul>
                    {data.map(e => <li>{e.name}</li>)}
                </ul>
                </div>
            </div>
        </div>
    )
}

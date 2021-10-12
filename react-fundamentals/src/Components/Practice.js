
import React, { useEffect, useState } from 'react'

export default function Practice() {

    const [Name, SetName] = useState("khan");
    const [windowSize, setwindowSize] = useState(window.innerWidth);

    const winddowResizeHanler = () =>{
        setwindowSize(window.innerWidth);
    }

    useEffect(() => {

        // window.addEventListener('resize', winddowResizeHanler)

        alert()

        return () => {
            console.log("cleard");
            // window.removeEventListener('resize');
        }
    }, );




    return (
        <div>

            <button onClick={() => SetName("khan2")}> khan Two</button>
            <button onClick={() => SetName("khan3")}> khan Two</button>
            <button onClick={() => SetName("khan4")}> khan Two</button>
            <button onClick={() => SetName("khan5")}> khan Two</button>


            <pre> {Name} </pre>



            <h3>{windowSize}</h3>

        </div>
    )
}


import React, { useState } from 'react'

export default function Practice() {

    let array = [0,1,2,3,4,5,6,7,8,9,10];
    const [Count, setCount] = useState(10)

    return (
        <div>
            <ul className="myUrl">
                {
                     array.map((el,i) =>

                     i > 3 ?
                     <li> {el}  </li>
                    : ''
                     )
                }
            </ul>


            <div className="container" style={{ marginLeft:'40px' }}>
                <div className="row">
                    <div className="text-center" style={{ marginTop: '25px' }}>
                        {Count}
                    </div>



                    <button onClick> increase Counter</button>
                </div>
            </div>
        </div>
    )
}

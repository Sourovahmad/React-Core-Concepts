import { React, useState} from 'react';
import css from '../Components/Css/Form.css'

export default function Form() {

    const [formName, setformName] = useState('');
    const [formEmail, setformEmail] = useState('');

    const loginClickHandler =  () => {

        console.log('clicked');
    }
    return (
        <div>

            <div className="container mt-4">
                <div className="row">
                    <form>

                        <input type="text" name="name" onChange={e => setformName(e.target.value) } /> <br/>
                        <input type="text" name="email" onChange={e => setformEmail(e.target.value)}  />


                        <button type="button" onClick={loginClickHandler} > Submit</button>

                    </form>

                <p> input name: {formName}</p>
                    <p> input email: {formEmail}</p>

                </div>
            </div>

        </div>
    )
}

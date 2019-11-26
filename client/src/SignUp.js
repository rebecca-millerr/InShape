import React from 'react';

import './SignUp.css';

class SignUp extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className = "SignUpPage">
                <h1 className = "SignUpHeading">Join up and get InShape!</h1>
                <form>
                    <input 
                        type = "text" 
                        name = "firstName"
                        placeholder = "First Name"
                        className = "textField"
                    />
                    <input 
                        type = "text" 
                        name = "lastName"
                        placeholder = "Last Name"
                        className = "textField"
                    />
                    <br />

                    <input 
                        type = "text"
                        name = "username"
                        placeholder = "Username"
                        className = "textField" 
                    />
                    <input 
                        type = "radio"
                    />
                    <input 
                        type = "text"
                        name = "email"
                        placeholder = "Email"
                        className = "textField" 
                    />
                    <br />

                    <input 
                        type = "text"
                        name = "height"
                        placeholder = "Height"
                        className = "textField" 
                    />
                    <input 
                        type = "text"
                        name = "currWeight"
                        placeholder = "Current Weight"
                        className = "textField" 
                    />
                    <input 
                        type = "text"
                        name = "goalWeight"
                        placeholder = "Goal Weight"
                        className = "textField"
                    />
                    <br />

                    <select> // activity level
                    </select>
                    <select> // activity frequency
                    </select> 
                    <select> // exercise experience
                    </select> 
                </form>
            </div>
        )
    }
}

export default SignUp;
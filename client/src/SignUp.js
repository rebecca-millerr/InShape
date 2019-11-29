import React from 'react';

import './SignUp.css';

class SignUp extends React.Component {
    constructor() {
        super();
    }

    render() {

        // TODO: enforce input types
        // TODO: create calorie intake formula
        // TODO: create BMI formula
        // TODO: make gender scrollover
        // TODO: make activity level scrollovers
        // TODO: find diets
        // TODO: find allergies
        // TODO: fix styling
        // allergies sep by commas

        return(
            <div className = "SignUpPage">
                <h1 className = "SignUpHeading">Join up and get InShape!</h1>
                <form className = "FormBox">
                    <input 
                        type = "text" 
                        name = "firstName"
                        placeholder = "First Name"
                        className = "TextField"
                    />
                    <input 
                        type = "text" 
                        name = "lastName"
                        placeholder = "Last Name"
                        className = "TextField"
                    />
                    <input 
                        type = "text"
                        name = "username"
                        placeholder = "Username"
                        className = "TextField" 
                    />
                    <input 
                        type = "text"
                        name = "email"
                        placeholder = "Email"
                        className = "TextField" 
                    />
                    <br />

                    <div>Units: 
                        <label>
                            <input
                                type = "radio"
                                name = "units"
                            /> Imperial
                        </label>
                        <label>
                            <input
                                type = "radio"
                                name = "units"
                            /> Metric
                        </label>
                    </div>

                    <input 
                        type = "text"
                        name = "height"
                        placeholder = "Height"
                        className = "TextField" 
                    />
                    <input 
                        type = "text"
                        name = "currWeight"
                        placeholder = "Current Weight"
                        className = "TextField" 
                    />
                    <input 
                        type = "text"
                        name = "goalWeight"
                        placeholder = "Goal Weight"
                        className = "TextField"
                    />
                    <br />

                    <div>Gender: 
                        <label>
                            <input
                                type = "radio"
                                name = "gender"
                            /> Female
                        </label>
                        <label>
                            <input 
                                type = "radio"
                                name = "gender"
                            /> Male
                        </label>
                    </div>
                    <br />

                    <p>Activity level: </p>
                    <label>
                        <input
                            type = "radio"
                            name = "units"
                        /> Very Light
                    </label>
                    <label>
                        <input
                            type = "radio"
                            name = "units"
                        /> Light
                    </label>
                    <label>
                        <input
                            type = "radio"
                            name = "units"
                        /> Moderate
                    </label>
                    <label>
                        <input
                            type = "radio"
                            name = "units"
                        /> Heavy
                    </label>
                    <label>
                        <input
                            type = "radio"
                            name = "units"
                        /> Very Heavy
                    </label>

                    <p>Diet</p>
                    <input
                        type = "radio"
                        name = "diet"
                    />
                    <input
                        type = "radio"
                        name = "diet"
                    />
                    <input
                        type = "radio"
                        name = "diet"
                    />  

                    <p>Allergies</p>   
                    <input
                        type = "checkbox"
                        name = ""
                    />
                    <input
                        type = "checkbox"
                        name = ""
                    />            
                </form>
            </div>
        )
    }
}

export default SignUp;
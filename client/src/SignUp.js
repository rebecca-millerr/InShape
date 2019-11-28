import React from 'react';

import './SignUp.css';
import Allergy from './Allergy';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName : "",
            lastName : "",
            username : "",
            email : "",
            units : "",
            gender : "",
            height : "",
            currWeight : "",
            goalWeight : "",
            activity : "",
            diet : "",
            currAllergy : "",
            allergies : [],
            lastKey : -1
        }

        this.handleChange = this.handleChange.bind(this);
        this.clickToDelete = this.clickToDelete.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });

        // update list of allergies if necessary and clears current field
        if ( name === 'currAllergy' && value.substr(value.length - 1) === ',' ) {
            this.setState(prevState => {
                const allergyNoComma = value.substr(0, value.length - 1);
                prevState.allergies.push({
                    id : prevState.lastKey + 1,
                    allergy : allergyNoComma
                });

                return {
                    currAllergy : "",
                    allergies : prevState.allergies,
                    lastKey : prevState.lastKey + 1
                }
            })
        } 
    }

    clickToDelete(key) {
        for ( let i = 0; i < this.state.allergies.length; i++ ) {
            if ( this.state.allergies[i].id === key ) {
                this.setState(prevState => {
                    prevState.allergies.splice(i, 1);

                    return { allergies : prevState.allergies }
                });
                break;
            }
        }
    }

    render() {

        const allAllergies = this.state.allergies.map(allergy =>
            <Allergy
                deleteMe = {this.clickToDelete}
                key = {allergy.id}
                id = {allergy.id}
                allergy = {allergy.allergy}
            />);

        // TODO: enforce input types
        // TODO: create calorie intake formula
        // TODO: create BMI formula
        // TODO: make gender scrollover
        // TODO: make activity level scrollovers
        // TODO: find diets
        // TODO: find allergies
        // TODO: fix styling
        // TODO: enforce commas
        // TODO: pretty radio buttons
        // TODO: implement rest of state
        // TODO: add delete icon on allergies

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
                    <br />

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

                    <div className = "RadioSection">
                        <p className = "InlineRadioTitle">Units:</p>
                        <label className = "RadioOption">
                            <input
                                type = "radio"
                                name = "units"
                            /> Imperial
                        </label>
                        <label className = "RadioOption">
                            <input
                                type = "radio"
                                name = "units"
                            /> Metric
                        </label>
                    </div>
                    <div className = "RadioSection">
                        <p className = "InlineRadioTitle">Gender:</p>
                        <label className = "RadioOption">
                            <input
                                type = "radio"
                                name = "gender"
                            /> Female
                        </label>
                        <label className = "RadioOption">
                            <input 
                                type = "radio"
                                name = "gender"
                            /> Male
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

                    <div className = "RadioSection">
                        <p className = "RadioTitle">Activity level: </p>
                        <label className = "RadioOption FirstOption">
                            <input
                                type = "radio"
                                name = "units"
                            /> Very Light
                        </label>
                        <label className = "RadioOption">
                            <input
                                type = "radio"
                                name = "units"
                            /> Light
                        </label>
                        <label className = "RadioOption">
                            <input
                                type = "radio"
                                name = "units"
                            /> Moderate
                        </label>
                        <label className = "RadioOption">
                            <input
                                type = "radio"
                                name = "units"
                            /> Heavy
                        </label>
                        <label className = "RadioOption">
                            <input
                                type = "radio"
                                name = "units"
                            /> Very Heavy
                        </label>
                    </div>

                    <div className = "RadioSection">
                        <p className = "RadioTitle">Diet:</p>
                        <label className = "RadioOptionClose FirstOption">
                            <input
                                type = "radio"
                                name = "diet"
                            /> Gluten Free
                        </label>
                        <label className = "RadioOptionClose">
                            <input
                                type = "radio"
                                name = "diet"
                            /> Ketogenic
                        </label>
                        <label className = "RadioOptionClose">
                            <input
                                type = "radio"
                                name = "diet"
                            /> Vegetarian
                        </label>
                        <label className = "RadioOptionClose">
                            <input
                                type = "radio"
                                name = "diet"
                            /> Vegan
                        </label>
                        <br />
                        <label className = "RadioOptionClose FirstOption">
                            <input
                                type = "radio"
                                name = "diet"
                            /> Pescetarian
                        </label>
                        <label className = "RadioOptionClose">
                            <input
                                type = "radio"
                                name = "diet"
                            /> Paleo
                        </label>
                        <label className = "RadioOptionClose">
                            <input
                                type = "radio"
                                name = "diet"
                            /> Primal
                        </label>
                    </div>
 
                    <input
                        type = "text"
                        name = "currAllergy"
                        placeholder = "Allergies"
                        onChange = {this.handleChange}
                        value = {this.state.currAllergy}
                        className = "TextField"
                    />      
                    <div className = "AllergyBox">
                        {allAllergies}
                    </div>  

                    <div>
                        <button type = "submit" className = "SubmitButton">Submit</button>
                    </div>  
                </form>
            </div>
        )
    }
}

export default SignUp;
import React, {Component} from 'react';

import './LogIn.css';

class LogIn extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <div className = "LogInPage">
                <h1 className = "LogInHeading"> Log In to get InShape!</h1>
                <form className = "FormBox">
                    <input 
                        type = "text" 
                        name = "firstName"
                        placeholder = "First Name"
                        onChange = {this.handleChange}
                        value = {this.state.firstName}
                        className = "TextField LongField"
                        required
                    />
                    <input 
                        type = "text" 
                        name = "lastName"
                        placeholder = "Last Name"
                        onChange = {this.handleChange}
                        value = {this.state.lastName}
                        className = "TextField LongField"
                        required
                    />
                    <br />

                    
                    <input 
                        type = "text"
                        name = "username"
                        placeholder = "Username"
                        onChange = {this.handleChange}
                        value = {this.state.username}
                        className = "TextField LongField" 
                        required
                    />

                    <input 
                        type = "password"
                        name = "password"
                        placeholder = "Password"
                        onChange = {this.handleChange}
                        value = {this.state.password}
                        className = "TextField LongField" 
                        required
                    />

                    <div>
                        <div onClick = {this.calculate} className = "SubmitButton">Log In</div>
                    </div>  
                </form>
            </div>
        )
    }
}

export default LogIn;
import React, {Component} from 'react';

import './LogIn.css';

class LogIn extends Component {
    constructor() {
        super();
        this.state = {
            username : "",
            password : "",
            loggedIn : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    authenticate() {
        // validate password and username
        // feed this as current user to database

        this.setState({
            loggedIn : true
        });

        this.props.validate();
    }

    render() {
        if ( this.state.loggedIn ) {
            return(
                <div className = "SignUpPage">
                    <h1 className = "SignUpHeading">All done!</h1>
                </div>
            )
        }

        return(
            <div className = "LogInPage">
                <h1 className = "LogInHeading"> Log In to get InShape!</h1>
                <form className = "FormBox">                    
                    <input 
                        type = "text"
                        name = "username"
                        placeholder = "Username"
                        onChange = {this.handleChange}
                        value = {this.state.username}
                        className = "TextField LongField" 
                        required
                    />
                    <br />
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
                        <center><div onClick = {this.authenticate} className = "SubmitButton">Log In</div></center>
                    </div>  
                </form>
            </div>
        )
    }
}

export default LogIn;
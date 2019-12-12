import React, {Component} from 'react';

import './LogIn.css';
const passwordHash = require('password-hash');

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

    async authenticate() {
      
        const status = await fetch('/info/' + this.state.username);
        const json = await status.json();

        let hashedPassword;

        if ( json.status === "failed" ) {
            alert('No user with this username exists. Did you mean to sign up?');
            return;
        }
        else {
            hashedPassword = json[0].password;
            const matchingPasswords = passwordHash.verify(this.state.password, hashedPassword);

            if ( !matchingPasswords ) {
                alert('Invalid login credentials. Try again!');
                return;
            }
            else {
                await fetch('/log_in/' + this.state.username);

                this.setState({
                    loggedIn : true
                });

                this.props.validate();
            }
        }
    }

    render() {
        if ( this.state.loggedIn ) {
            return(
                <div className = "LogInPage">
                    <h1 className = "LogInHeading">All done!</h1>
                    <h3 className = "LogInReminder">Be sure to log out when you're done!</h3>
                </div>
            )
        }

        return(
            <div className = "LogInPage">
                <h1 className = "LogInHeading"> Log In to get InShape!</h1>
                <form className = "LoginFormBox">                    
                    <input 
                        type = "text"
                        name = "username"
                        placeholder = "Username"
                        onChange = {this.handleChange}
                        value = {this.state.username}
                        className = "LoginTextField" 
                        required
                    />
                    <br />
                    <input 
                        type = "password"
                        name = "password"
                        placeholder = "Password"
                        onChange = {this.handleChange}
                        value = {this.state.password}
                        className = "LoginTextField" 
                        required
                    />

                    <div>
                        <center><div onClick = {this.authenticate} className = "LoginSubmitButton">Log In</div></center>
                    </div>  
                </form>
            </div>
        )
    }
}

export default LogIn;
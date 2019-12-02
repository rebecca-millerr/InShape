import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";

import NavLink from './NavLink';

import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Meals from './Meals';
import Exercises from './Exercises';
import Contact from './Contact';
import EditUser from './EditUser';

import './App.css';

class App extends React.Component {
  // TODO?
  constructor(props) {
    super(props)
    /*this.callBackendAPI = this.callBackendAPI.bind(this)*/
    this.state = {
      data     : null, // IDK
      loggedIn : false
    }

    this.logInOut = this.logInOut.bind(this);
    this.blank    = this.blank.bind(this);
  }

  // // TODO?
  // // TODO: Fetch in react component tree
  // componentDidMount() {
  //   this.callBackendAPI()
  //   .then(res => {
  //     this.setState({ data: res.express })})
  //   .catch(err => console.log(err));
  // }

  // // TODO?
  // callBackendAPI = async () => {
  //   const response = await fetch('/api');
  //   const body = await response.json();
  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  logInOut() {
    this.setState(prevState => ({
      loggedIn : ! prevState.loggedIn
    }));
  }

  blank() {
    return;
  }

  render() {

    const navItems = new Array(5);
    if ( this.state.loggedIn ) {
      navItems[0] = ({
        num               : 1,
        text              : 'InShape',
        url               : '/',
        changePermissions : this.blank,
        className         : 'HomeLink'
      });
      navItems[1] = ({
        num               : 2,
        text              : 'Meals',
        url               : '/meals',
        changePermissions : this.blank,
        className         : 'MealsLink'
      }); 
      navItems[2] = ({
        num               : 3,
        text              : 'Exercises',
        url               : '/exercises',
        changePermissions : this.blank,
        className         : 'ExercisesLink'
      });
      navItems[3] = ({
        num               : 4,
        text              : 'Contact',
        url               : '/contact',
        changePermissions : this.blank,
        className         : 'ContactLink'
      });
      navItems[4] = ({
        num               : 5,
        text              : 'Log Out',
        url               : '/',
        changePermissions : this.logInOut,
        className         : 'LogInOutLink',
        dropdown          : true,
        dropdownText      : 'Edit User',
        dropdownLink      : '/edit-user'
      });
    }
    else {
      for ( let i = 0; i < 4; i++ ) {
        navItems[i] = null;
      }
      navItems[0] = ({
        num               : 1,
        text              : 'InShape',
        url               : '/',
        changePermissions : this.blank,
        className         : 'HomeLink'
      });
      navItems[4] = ({
        num               : 5,
        text              : 'Log In',
        url               : '/log-in',
        changePermissions : this.blank,
        className         : 'LogInOutLink',
        dropdown          : true,
        dropdownText      : 'Sign Up',
        dropdownLink      : '/sign-up'
      });
    }

    const navLinks = navItems.map(link => {
      if ( link ) {
        return <NavLink
          key               = {link.num}
          text              = {link.text}
          url               = {link.url}
          className         = {link.className}
          dropdown          = {link.dropdown}
          dropdownText      = {link.dropdownText}
          dropdownLink      = {link.dropdownLink}
          changePermissions = {link.changePermissions}
        />
      }
    });

    return (
      <div>
        <div className = "NavBar">
          {navLinks}
        </div>
        <div className = "Adjuster">
        </div>
          <Router>
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/sign-up">
                <SignUp validate = {this.logInOut} />
              </Route>
              <Route path = "/log-in">
                <LogIn validate = {this.logInOut} />
              </Route>
              <Route path = "/edit-user" component = {EditUser} />
              <Route path = "/meals" component = {Meals} />
              <Route path = "/exercises" component = {Exercises} />
              <Route path = "/contact" component = {Contact} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;

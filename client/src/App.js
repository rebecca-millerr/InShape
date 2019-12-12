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
  constructor(props) {
    super(props)

    this.state = {
      data     : null, // IDK
      loggedIn : false,
      currUser : null
    }

    this.logIn  = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.blank  = this.blank.bind(this);

    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  async getCurrentUser() {

    const response = await fetch('/current');
    console.log(response);
    const data  = await response.json();
    console.log(data);
    
    if ( data && !data[0] ) {
      console.log("still legit")
      this.setState({
        currUser : data.username
      })
    }
    else if ( data[0] ) {
      console.log("legit")
      this.setState({
        currUser : data[0].username
      })
    }
    

    if ( !this.state.currUser || this.state.currUser === '---' ) {
      console.log('nope')
      this.setState({
        loggedIn : false
      })
    }
    else {
      console.log('yep')
      this.setState({
        loggedIn : true
      })
    }
  }

  logIn() {
    console.log('in log in')
    this.setState({
      loggedIn : true
    });
  }

  async logOut() {
    console.log('in log out')
    const response = await fetch('/log_out');
    console.log(response)
    const text = await response.json()
    console.log(text)
    this.getCurrentUser();
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
        url               : '#',
        changePermissions : this.logOut,
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
                <SignUp validate = {this.logIn} />
              </Route>
              <Route path = "/log-in">
                <LogIn validate = {this.logIn} />
              </Route>
              <Route path = "/edit-user">
                <EditUser username = {this.state.username} exit = {this.logOut} />
              </Route>
              <Route path = "/meals">
                <Meals username = {this.state.username} />
              </Route>
              <Route path = "/exercises" component = {Exercises} />
              <Route path = "/contact" component = {Contact} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;

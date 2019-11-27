import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";

import NavBar from './NavBar';
import Home from './Home';
import SignUp from './SignUp';
import Meals from './Meals';
import Contact from './Contact';

import './App.css';

class App extends React.Component {
  // TODO?
  constructor(props) {
    super(props)
    /*this.callBackendAPI = this.callBackendAPI.bind(this)*/
    this.state = {
      data: null, // IDK
      loggedIn : true // TODO : this can change
    }

    this.logInOut = this.logInOut.bind(this);
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
  };

  render() {

    const navItems = new Array(5);
    if ( this.state.loggedIn ) {
      navItems[0] = ({
        num : 1,
        text : 'Home',
        url : '/',
        className : 'HomeLink'
      });
      navItems[1] = ({
        num: 2,
        text : 'Meals',
        url : '/meals',
        className : 'MealsLink'
      }); 
      navItems[2] = ({
        num : 3,
        text: 'Exercises',
        url : '#', // TODO
        className : 'ExercisesLink'
      });
      navItems[3] = ({
        num : 4,
        text : 'Contact',
        url : '/contact',
        className : 'ContactLink'
      });
      navItems[4] = ({
        num : 5,
        text : 'Log Out'/*'Log' + '\u00A0' + 'Out'*/,
        url : '#',
        className : 'LogInOutLink'
      });
    }
    else {
      for ( let i = 0; i < 4; i++ ) {
        navItems[i] = null;
      }
      navItems[4] = ({
        num : 5,
        text: 'Log' + '\u00A0' + 'In',
        url : '#',
        className : 'LogInOutLink',
        dropdown: true
      });
    }

    return (
      <div>
        <NavBar links = {navItems} />
        <div className = "Adjuster">
        </div>
          <Router>
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/sign-up" component = {SignUp} />
              <Route path = "/meals" component = {Meals} />
              <Route path = "/contact" component = {Contact} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;

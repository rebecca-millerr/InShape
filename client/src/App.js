import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";

import NavBar from './NavBar';
import Home from './Home';
import Meals from './Meals';

import './App.css';

class App extends React.Component {
  // TODO?
  // constructor(props) {
  //   super(props)
  //   this.callBackendAPI = this.callBackendAPI.bind(this)
  //   this.state = {
  //     data: null, // IDK
  //     loggedIn : true // TODO : this can change
  //   }

  //   this.logInOut = this.logInOut.bind(this);
  // }

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

    const navItems = new Array();
    if ( this.state.loggedIn ) {
      navItems.push({
        num : 1,
        text : 'Home',
        url : '/',
        className : 'HomeLink'
      }, 
      {
        num: 2,
        text : 'Meals',
        url : '/meals',
        className : 'MealsLink'
      }, 
      {
        num : 3,
        text : 'Exercises',
        url : '#',
        className : 'ExercisesLink'
      },
      {
        num : 4,
        text : 'Log' + '\u00A0' + 'Out',
        url : '#',
        className : 'LogInOutLink'
      });
    }
    else {
      navItems.push({
        num : 4,
        text: 'Log' + '\u00A0' + 'In',
        url : '#',
        className : 'LogInOutLink'
      });
    }
    console.log(navItems);

    return (
      <div>
        <NavBar links = {navItems} />
        <div className = "Adjuster">
        </div>
          <Router>
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/meals" component = {Meals} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;

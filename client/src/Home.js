import React from 'react';

import Splash from './Splash';

import './Home.css';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className = "Landing">
        <Splash />
      </div>
    )
  }
}

export default Home;
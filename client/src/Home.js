import React from 'react';

import MissionStatement from './MissionStatement';

import './Home.css';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className = "Landing">
        //option 1 - call class from other file
        <MissionStatement />
        // option 2 - put all styling in div 
        <div className = "MissionStatement">
                <p>To create a version of your body that makes you the happiest and healthiest version of yourself.</p>
        </div>
        // end of option 2 
      </div>
    )
  }
}

export default Home;
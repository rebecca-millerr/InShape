import React from 'react';

import MissionStatement from './MissionStatement';
import OurMission from './OurMission';
import WhoWeAre from './WhoWeAre';
import Testimonials from './Testimonials';

import './Home.css';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className = "Landing">
        <MissionStatement />
        <OurMission />
        <WhoWeAre />
        <Testimonials />
      </div>
    )
  }
}

export default Home;
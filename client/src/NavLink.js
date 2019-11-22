import React from 'react';

import './NavLink.css';

class NavLink extends React.Component {
  constructor() {
    super();
  }

  render() {

    console.log(this.props.className);
    return(
      <p className = "NavLink">
        <a href = {this.props.url} className = {this.props.className}>
          {this.props.text}
        </a>
      </p>
    )
  }
}

export default NavLink;
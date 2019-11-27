import React from 'react';

import './NavLink.css';

class NavLink extends React.Component {
  constructor() {
    super();

    this.state = {
      hidden : true
    };

    this.drop = this.drop.bind(this);
  }

  drop() {
    if ( this.props.dropdown ) {
      this.setState({
        hidden : false
      });
    }

    setTimeout(() => {
      this.setState({
        hidden : true
      })
    }, 1000);
  }

  render() {

    const dropClass = this.props.className + ' Dropdown';
    const style = this.state.hidden ? { display : 'none' } : { display : 'inline-block' };

    return(
      <div className = "NavLink">
        <a href = {this.props.url} className = {this.props.className} onMouseEnter = {this.drop}>
          {this.props.text}
        </a>
        <div>
          <a href = "/sign-up" className = {dropClass} style = {style}>
            Sign Up
          </a>
        </div>
      </div>
    )
  }
}



export default NavLink;
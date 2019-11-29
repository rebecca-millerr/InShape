import React from 'react';

import './NavLink.css';

class NavLink extends React.Component {
  constructor() {
    super();

    this.state = {
      hidden : true,
      hover  : false
    };

    this.dropTimeout = this.dropTimeout.bind(this);
    this.dropHover   = this.dropHover.bind(this);
    this.undrop      = this.undrop.bind(this);
  }

  dropTimeout() {

    if ( this.props.dropdown ) {
      this.setState({
        hidden : false
      });
    }

    setTimeout(() => {
      if ( ! this.state.hover ) {
        this.setState({
          hidden : true
        })
      } 
    }, 2000);
  }

  dropHover() {
    if ( ! this.state.hidden ) {
      this.setState({
        hidden : false,
        hover  : true
      });
    }
  }

  undrop() {
    if ( ! this.state.hidden ) {
      this.setState({
        hidden : true,
        hover  : false
      });
    }
  }

  render() {

    const dropClass = this.props.className + ' Dropdown';
    const style = this.state.hidden ? { display : 'none' } : { display : 'inline-block' };

    return(
      <div className = "NavLink">
        <a 
          href         = {this.props.url} 
          className    = {this.props.className} 
          onMouseEnter = {this.dropTimeout}
          onClick      = {() => this.props.changePermissions()}
        >
          {this.props.text}
        </a>
        <div>
          <a 
            href         = "/sign-up" 
            className    = {dropClass} 
            style        = {style} 
            onMouseEnter = {this.dropHover} 
            onMouseLeave = {this.undrop}
          >
            Sign Up
          </a>
        </div>
      </div>
    )
  }
}



export default NavLink;
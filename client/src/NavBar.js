import React from 'react';

import NavLink from './NavLink';

import './NavBar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage : null
    }
  }

  render() {

    const navLinks = this.props.links.map(link =>
      <NavLink
        key = {link.num}
        text = {link.text}
        url = {link.url}
        className = {link.className}
      />);

    return(
      <div className = "NavBar">
        {navLinks}
      </div>
    )
  }
}

export default NavBar;
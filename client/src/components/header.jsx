import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <div id="header">
        <nav>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            About Me
          </NavLink>
          <NavLink activeClassName="active" to="/projects">
            Projects
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </nav>
      </div>
    );
  }

export default Header;
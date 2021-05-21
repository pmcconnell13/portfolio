import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
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
    );
  }

export default Header;
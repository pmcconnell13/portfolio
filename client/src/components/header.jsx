import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <div id="header">
        <div class="headerHome">
          <a href="#homePage">Home</a>
        </div>
        <div>
          <a href="#aboutMe">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }

  export default Header;
  {/* <nav>
    <div class="headerHome">
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
    </div>
  </nav>
  <div>
    <nav>
      <NavLink activeClassName="active" to="/about">
        About Me
      </NavLink>
      <NavLink activeClassName="active" to="/projects">
        Projects
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </nav> */}
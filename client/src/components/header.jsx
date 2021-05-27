import React from 'react';
import headshot from '../../public/headshot.jpg';

function Header() {
    return (
      <div id="header">
        <div class="navLeft">
            <a href="#homePage" >
              <img class="homeHeadshot" src={headshot}/>
            </a>
        </div>
        <div class="navRight">
              <a href="#aboutMe">About Me</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
          {/* </div> */}
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
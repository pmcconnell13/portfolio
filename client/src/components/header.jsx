import React from 'react';
import headshot from '../../public/headshot.jpg';

function Header() {
    return (
      <div id="header">
        <div class="navLeft">
          <div>
            <a href="#homePage" >
              <img class="homeHeadshot" src={headshot}/>
            </a>
          </div>
        </div>
        <div class="navRight">
          {/* <div class="sections"> */}
            <div>
              <a href="#aboutMe">About Me</a>
            </div>
            <div>
              <a href="#projects">Projects</a>
            </div>
            <div>
              <a href="#contact">Contact</a>
            </div>
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
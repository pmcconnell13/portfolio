import React from 'react';
import headshot from '../../public/headshot.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Header() {
    return (
      <div id="header">
        <div class="navLeft">
            <a href="#homePage" >
              <img class="homeHeadshot" src={headshot}/>
            </a>
            <div id="socialLinks">
              <a href="https://www.linkedin.com/in/charlespatrickmcconnell/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/pmcconnell13">
                <FaGithub />
              </a>
              <a href="mailto:pmcconnell13@gmail.com">
                <MdEmail />
              </a>
            </div>
        </div>
        <div class="navRight">
          <a href="#aboutMe">About Me</a>
          <a href="#projectsParent">Projects</a>
        </div>
      </div>
    );
  }

  export default Header;
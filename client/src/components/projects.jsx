import React from 'react';
import { FaGithub } from 'react-icons/fa';
import ratingsReviews from '../../public/images/ratingsReviews.jpg';
import meditationToolDemo from '../../public/images/meditationToolDemo.gif';

function Projects() {
    return (
      <div id="projectsParent">
        <div class="projects">
          <div class="project1">
            <div class="projectImage">
              <img src={ratingsReviews}></img>
            </div>
            <div>
            <a href="https://github.com/Observant-Ostriches/fec-projectCatwalk">
              <FaGithub />
            </a>
            </div>
          </div>
          <div class="project2">
            <img src={meditationToolDemo} class="projectImage"></img>

          </div>
          <div class="project3">
            Project 3
          </div>
          <div class="project4">
            Project 4
          </div>

        </div>
      </div>
    )
}

export default Projects;
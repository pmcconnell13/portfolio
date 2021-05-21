import React from 'react';
import headshot from '../../public/headshot.jpg';

function WelcomePage() {
  return (
      <div class="homePage">
        <div class="background">
          <div class="homePageLeft"></div>
          <div class="homePageRight"></div>
        </div>
        <div class="homeOverlay">
          <div class="welcomePhoto">
            <img id="headshot" src={headshot}/>
          </div>
          <div class="welcomeText">
            <div class="hello">
              Hello
            </div>
            <div class="world">
              World
            </div>
            <div class="excited">
              !
            </div>
          </div>
        </div>
    </div>
  )
}

export default  WelcomePage;
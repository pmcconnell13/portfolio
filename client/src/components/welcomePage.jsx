import React from 'react';
import headshot from '../../public/headshot.jpg';

function WelcomePage() {
  return (
      <div id="homePage">
          <div class="homePageLeft">left</div>
          <div class="homePageRight">right</div>
        <div class="homeOverlay">
          <div class="welcomePhoto">
            <img id="headshot" src={headshot}/>
          </div>
          <div class="welcomeText">
            <div class="hello">
              Hello
            </div>
            <div class="world">
              World!
            </div>
          </div>
        </div>
    </div>
  )
}

export default  WelcomePage;
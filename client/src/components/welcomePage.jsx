import React from 'react';
import headshot from '../../public/headshot.jpg';

function WelcomePage() {
  return (
    <div id="homePage">
      <img id="headshot" src={headshot}/>
      <div id="helloWorld">
      Hello World!
      </div>
    </div>
  )
}

export default  WelcomePage;
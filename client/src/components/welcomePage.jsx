import React from 'react';
import headshot from '../../public/headshot.jpg';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Hello World!
        <img id="headshot" src={headshot}/>
      </div>
    )
  }
}

export default  WelcomePage;
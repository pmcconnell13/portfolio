import React from 'react';
import WelcomePage from './welcomePage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <WelcomePage />
      </div>
    )
  }
}

export default App;
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import WelcomePage from './welcomePage.jsx';
import Contact from './contact.jsx';
import Projects from './projects.jsx';
import AboutMe from './aboutMe.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Resume from './resume.jsx';
import Main from './reactRouter.jsx';

const App = (
  <Router>
    <div className="App">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  </Router>
)

export default App;
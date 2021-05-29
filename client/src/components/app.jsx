import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import WelcomePage from './welcomePage.jsx';
import Contact from './contact.jsx';
import Projects from './projects.jsx';
import AboutMe from './aboutMe.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Resume from './resume.jsx';

const App = (
    <div className="App">
      <Header />
      <WelcomePage />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
)

export default App;
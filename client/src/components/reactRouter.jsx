
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import WelcomePage from './welcomePage.jsx';
import Contact from './contact.jsx';
import Projects from './projects.jsx';
import AboutMe from './aboutMe.jsx';


const Main = () => (
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route path="/about" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
)
export default Main;
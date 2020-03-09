import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import CaseStudies from "../CaseStudies/CaseStudies";
import Services from "../Services/Services";
import Pricing from "../Pricing/Pricing";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/case-studies">
          <CaseStudies />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

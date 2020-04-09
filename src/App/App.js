import React from "react";
import "./App.scss";
import "../general.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../IconLibrary/IconLibrary";
import Header from "../Header/Header";
import Home from "../Home/Home";
import CaseStudies from "../CaseStudies/CaseStudies";
import Services from "../Services/Services";
import IndividualService from "../IndividualService/IndividualService";
import Pricing from "../Pricing/Pricing";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Blog from "../Blog/Blog";
import BlogPostSyncApps from "../Blog/BlogPostSyncApps/BlogPostSyncApps";
import CaseStudyHiitTribe from "../CaseStudies/CaseStudyHiitTribe/CaseStudyHiitTribe";

import ScrollToTop from "../Common/ScrollToTop/ScrollToTop";

import servicesData from "../Data/servicesData";

function App() {
  function displayServicesRoutes() {
    return servicesData.map((service, index) => {
      const serviceName = service.name.toLowerCase().split(" ").join("-");
      return (
        <Route exact path={`/services/${serviceName}`} key={index}>
          <IndividualService serviceData={service} />
        </Route>
      );
    });
  }

  return (
    <Router>
      <ScrollToTop>
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
          <Route exact path="/blog/sync-apps">
            <BlogPostSyncApps />
          </Route>
          <Route exact path="/case-studies/hiit-tribe">
            <CaseStudyHiitTribe />
          </Route>
          {displayServicesRoutes()}
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;

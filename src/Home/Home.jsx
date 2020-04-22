import React from "react";

import { withRouter } from "react-router-dom";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";
import ServicesGrid from "../ServicesGrid/ServicesGrid";
import Thumbnail from "../Common/Thumbnail/Thumbnail";
import PageTitle from "../Common/PageTitle/PageTitle";
import Testimonial from "../Common/Testimonial/Testimonial";

import GymPhoto from "../assets/godragons-gym-4.jpg";

import Hero from "./Hero";
import WhoAreWe from "./WhoAreWe";

import { hiitTribe as hiitTribeTestimonial } from "../Data/testimonialData";

import "./Home.scss";

function Home() {
  return (
    <div className="page-home">
      <Hero />
      <Testimonial {...hiitTribeTestimonial} />
      <WhoAreWe />

      <div className="purple segment">
        <BoxedLayout>
          <ServicesGrid />
        </BoxedLayout>
      </div>

      <div>
        <BoxedLayout>
          <PageTitle value="Case Study" />
          <Thumbnail
            title="HIIT Tribe"
            subtitle="Using software to create a new kind of workout experience"
            img={GymPhoto}
            to="/case-studies/hiit-tribe"
          />
          <br />
          <br />
          <br />
        </BoxedLayout>
      </div>
    </div>
  );
}

export default withRouter(Home);

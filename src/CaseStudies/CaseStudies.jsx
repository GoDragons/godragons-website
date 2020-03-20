import React from "react";

import PageTitle from "../Common/PageTitle/PageTitle";
import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";
import Thumbnail from "../Common/Thumbnail/Thumbnail";

import GymPhoto from "../assets/godragons-gym-4.jpg";

import "./CaseStudies.scss";

export default function CaseStudies() {
  return (
    <div>
      <BoxedLayout>
        <PageTitle value="Case Studies" />
        <Thumbnail
          title="HIIT Tribe"
          subtitle="Using software to create a new kind of workout experience"
          img={GymPhoto}
          to="/case-studies/hiit-tribe"
        />

        <br />
      </BoxedLayout>
    </div>
  );
}

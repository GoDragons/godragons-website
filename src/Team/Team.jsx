import React from "react";

import { Container } from "react-grid-system";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

import TeamMember from "./TeamMember/TeamMember";
import PageTitle from "../Common/PageTitle/PageTitle";
import Separator from "../Common/Separator/Separator";

import { withRouter } from "react-router-dom";

import teamData from "./teamData.json";

import "./Team.scss";

function Team() {
  function displayTeamMembers() {
    return teamData.map((member, index) => {
      return (
        <React.Fragment key={member.name}>
          <TeamMember {...member} />
          {index < teamData.length - 1 ? <Separator /> : null}
        </React.Fragment>
      );
    });
  }

  return (
    <div className="page-team">
      <BoxedLayout>
        <Container>
          <PageTitle value="Our Team" />
          {displayTeamMembers()}
        </Container>
      </BoxedLayout>
    </div>
  );
}

export default withRouter(Team);

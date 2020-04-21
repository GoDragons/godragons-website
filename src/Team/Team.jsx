import React from "react";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

import TeamMember from "./TeamMember/TeamMember";
import PageTitle from "../Common/PageTitle/PageTitle";
import Separator from "../Common/Separator/Separator";

import { withRouter } from "react-router-dom";

import teamData from "./teamData.jsx";

import "./Team.scss";

function Team() {
  function displayTeamMembers() {
    return teamData.map((member, index) => {
      return (
        <React.Fragment key={member.name}>
          <TeamMember {...member} alternateStyle={index % 2 === 0} />
          {index < teamData.length - 1 ? <Separator /> : null}
        </React.Fragment>
      );
    });
  }

  return (
    <div className="page-team">
      <BoxedLayout>
        <PageTitle value="Our Team" />
        <div className="team-members-container">{displayTeamMembers()}</div>
      </BoxedLayout>
    </div>
  );
}

export default withRouter(Team);

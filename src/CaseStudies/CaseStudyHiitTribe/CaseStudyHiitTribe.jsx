import React from "react";

import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";

import TvAdImage from "../../assets/godragons-tv-ad.jpg";
import FinishedGymImage from "../../assets/godragons-gym-bw.jpg";

import BoxedLayout from "../../Common/BoxedLayout/BoxedLayout";
import PageTitle from "../../Common/PageTitle/PageTitle";
import List from "../../Common/List/List";

export default function CaseStudyHiitTribe() {
  return (
    <article>
      <BoxedLayout>
        <Container fluid={true}>
          <PageTitle
            value="HIIT Tribe Case Study"
            tagline="How GoDragons helped HIIT Tribe build a revolutionary workout
            experience, while virtually eliminating wait times for customers"
          />

          <Row justify="center">
            <Col md={4}>
              <h3>Brief</h3>
              <p>
                HIIT Tribe’s vision involves a new kind of circuit-style
                workout, where customers go through a number of “stations” over
                a period of 45 minutes, guided by TV screens mounted throughout
                the gym studio, which are perfectly synchronised with each
                other. Every 5 minutes, a new group of people can enter the
                studio, therefore almost eliminating wait times or the need to
                book ahead.
              </p>
              <p>
                The project required both designing the software and picking the
                right hardware.
              </p>
            </Col>
            <Col md={4}>
              <h3>Main Challenges</h3>
              <List
                items={[
                  "Making sure that the workout videos are always synchronised within 200 milliseconds of one another, despite potentially unreliable internet connectivity",
                  "Creating a scalable solution that requires minimal manual intervention at the gym studio itself, while allowing for remote support"
                ]}
                icon="check"
              />
            </Col>
            <Col md={4}>
              <h3>Solution</h3>
              <List
                items={[
                  "Cloud-native web application with 2 parts: “playback” side running in the gym studio, and an admin for creating, editing and scheduling workouts",
                  "Technology stack: React, Node.js, Websockets, GraphQL, PostgresQL",
                  "Continous Deployment pipeline using CircleCI, AWS and Terraform",
                  "Multiple environments (Test, Staging and Production)",
                  "Running costs below £30/month"
                ]}
                icon="check"
              />
            </Col>
          </Row>
          <h3>The Customer</h3>
          <p>
            HIIT Tribe is a wellbeing & fitness startup who are rethinking the
            way people live and exercise. Their goal is to have a positive
            impact on their members’ happiness by fostering a sense of
            community, and group workouts are the first step towards achieving
            that.
          </p>
          <img className="full-width" src={TvAdImage} />

          <h1>Process</h1>
          <br />
          <h3>Technical feasibility</h3>
          <p>
            HIIT Tribe approached GoDragons when they already had a rough idea
            of how the application should behave, and presented us with
            wireframes for the admin side. This allowed us to have a reasonable
            idea of the functionality required.
          </p>
          <p>
            Given that the success of the project hinged on our ability to find
            a way to keep all the timers and workout videos in sync, we started
            with a proof-of-concept that included this critical part of the
            work.
          </p>

          <br />
          <br />

          <h3>Feedback loop</h3>
          <p>
            Once the technical feasibility had been validated, we proceeded to
            start work on the actual application. This included both the admin
            and “playback” sides, which were developed in parallel. The process
            was iterative, and it was agreed with the client to have a continous
            “demo” process: we used a staging environment, where all new
            features went for client sign-off, before being included in the
            production version. We also had regular meetings every 1-2 weeks
            (both in-person and virtual, depending on our client’s availability)
            to have more in-depth conversations and to interact with the system
            together.
          </p>

          <br />
          <br />

          <h3>Choosing the hardware</h3>
          <p>
            A significant part of the project was finding a cost-effective and
            reliable way to run the application in the gym studio, while keeping
            any hardware out of sight. This meant both doing research online and
            taking trips to the gym itself to assess viability, plus
            communicating with the people in charge of building the actual gym
            site, to make sure all the wiring was in place and the network
            connectivity was appropriate.
          </p>

          <br />
          <br />

          <h3>Timeline</h3>
          <p>
            From beginning to end, the project took 4 months. This included
            negotiating the contract, validating the technical feasibility,
            installing the hardware, running stress tests and having actual
            customers in the gym using the software.
          </p>

          <br />
          <img className="full-width" src={FinishedGymImage} />

          <br />
          <br />

          <p>
            For an in-depth look into the main technical challenge of this
            project, read our blog post:{" "}
            <Link to="/blog/sync-apps">
              <b className="highlight">How to synchronise apps</b>
            </Link>
          </p>

          <br />
          <br />
        </Container>
      </BoxedLayout>
    </article>
  );
}

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";

import axios from "axios";

import "./Contact.scss";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitForm(e) {
    e.preventDefault();

    const requestBody = `
    We have a new message!

    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Message: ${message}
    `;

    axios({
      method: "POST",
      url: "https://xfngqz4xu3.execute-api.eu-west-2.amazonaws.com/dev/contact",
      data: [requestBody],
    });
  }

  return (
    <div className="contact-form-container">
      <BoxedLayout>
        <div className="inner-container">
          <form onSubmit={submitForm} className="form">
            <div className="form-content">
              <div className="form-title-container">
                <h1 className="form-header">
                  <span className="line">SEND US</span>
                  <span className="line">A MESSAGE</span>
                </h1>
                <div className="full-stop"></div>
              </div>
              <div className="input-group">
                <input
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  placeholder="Email address*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group message-content">
                <textarea
                  placeholder="Tell us about your business and requirements of a new project you want to start with us!"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="button-container">
                <button type="submit">SEND TO US!</button>
              </div>
            </div>
          </form>
          <div className="contact-details-container">
            <div className="contact-details-content">
              <h1>CONTACT US</h1>
              <div className="full-stop"></div>
              <p className="subtitle">
                Want to find out more?
                <br />
                Fill out the form and we can book a free consultation.
              </p>
              <div className="location-info">
                <div className="row">
                  <div className="icon-column">
                    <FontAwesomeIcon className="icon" icon="map-marker-alt" />
                  </div>
                  <div className="info-column">
                    <h4>London City</h4>
                    <p>The Hop Exchange 24 Southwark St London SE1 1TY</p>
                  </div>
                </div>
                <div className="row">
                  <div className="icon-column">
                    <FontAwesomeIcon className="icon" icon="envelope" />
                  </div>
                  <div className="info-column">
                    <p>contact@godragons.com</p>
                  </div>
                </div>
              </div>
              <div className="social-icons-container">
                <a href="https://www.linkedin.com/company/godragons">
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fab", "linkedin"]}
                  />
                </a>

                <a href="https://twitter.com/GoDragonsTech">
                  <FontAwesomeIcon className="icon" icon={["fab", "twitter"]} />
                </a>
                <a href="https://github.com/GoDragons">
                  <FontAwesomeIcon className="icon" icon={["fab", "github"]} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </BoxedLayout>
    </div>
  );
}

export default Contact;

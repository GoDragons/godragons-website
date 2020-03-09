import React, { useState } from "react";

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
      data: [requestBody]
    });
  }

  return (
    <div className="contact">
      <form onSubmit={submitForm}>
        <div className="input-group">
          <label>First Name:</label>
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Message:</label>
          <input value={message} onChange={e => setMessage(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

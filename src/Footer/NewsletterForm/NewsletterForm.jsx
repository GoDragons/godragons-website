import React, { useState } from "react";

import axios from "axios";

import { withRouter } from "react-router-dom";

import "./NewsletterForm.scss";

import Button from "../../Common/Button/Button";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [formSuccess, setFormSuccess] = useState();

  function submitForm(e) {
    e.preventDefault();

    const requestBody = `
    Newsletter signup!

    Email: ${email}
    `;

    axios({
      method: "POST",
      url: "https://xfngqz4xu3.execute-api.eu-west-2.amazonaws.com/dev/contact",
      data: [requestBody]
    })
      .then(() => {
        setFormSuccess(true);
      })
      .catch(error => {
        setFormSuccess(true);
      });
  }

  let buttonLabel = "Register";
  if (formSuccess === true) {
    buttonLabel = "Email added!";
  } else if (formSuccess === false) {
    buttonLabel = "Error";
  }

  return (
    <form className="newsletter-form" onSubmit={submitForm}>
      <h2 className="title">Stay in the loop</h2>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Insert your email"
        onClick={e => setFormSuccess()}
      />

      <Button type="primary" label={buttonLabel} onClick={submitForm} />
    </form>
  );
}

export default withRouter(NewsletterForm);

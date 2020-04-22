import React from "react";

import BoxedLayout from "../BoxedLayout/BoxedLayout";

import "./Testimonial.scss";

export default function Testimonial({ message, author }) {
  return (
    <div className="testimonial">
      <BoxedLayout>
        <h2 className="title">What our clients say</h2>
        <div className="message-container">
          <span className="quote-start">“</span>
          <span className="quote-end">“</span>
          <p className="message">{message}</p>
        </div>
        <p className="author">{author}</p>
      </BoxedLayout>
    </div>
  );
}

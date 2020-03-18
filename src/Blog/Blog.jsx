import React from "react";

import { withRouter, Link } from "react-router-dom";
import { Row, Col } from "react-grid-system";

import BoxedLayout from "../Common/BoxedLayout/BoxedLayout";
import PageTitle from "../Common/PageTitle/PageTitle";
import List from "../Common/List/List";

import TechImage from "../assets/godragons-tech-2.jpg";
import IdeasImage from "../assets/godragons-ideas-2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blogData from "./blogData.json";

import "./Blog.scss";

function Blog() {
  function displayBlogPosts(type) {
    return (
      <List
        icon="bullseye"
        html={true}
        items={blogData[type].map((post, index) => {
          return (
            <Link key={index} to={`/blog/${post.slug}`}>
              <div className="post">
                <h4>
                  <FontAwesomeIcon
                    icon="bullseye"
                    className="icon"
                    color="#fefefe"
                  />
                  {post.title}
                </h4>
                <p>{post.abstract}</p>
                <Row className="meta-container">
                  <Col xs={6} className="author">
                    <p>{post.author}</p>
                  </Col>
                  <Col xs={6} className="date">
                    <p>{post.date}</p>
                  </Col>
                </Row>
              </div>
            </Link>
          );
        })}
      />
    );
  }

  return (
    <div className="page-blog">
      <BoxedLayout>
        <PageTitle value="Blog" />
        <Row className="content">
          <Col md={6}>
            <div className="cover-container">
              <img src={TechImage} alt="Open laptop" />
            </div>
            <h5 className="section-title">Tech</h5>
            {displayBlogPosts("tech")}
          </Col>
          <Col md={6}>
            <div className="cover-container">
              <img src={IdeasImage} alt="Sliced lemon on blue background" />
            </div>
            <h5 className="section-title">People</h5>
            {displayBlogPosts("people")}
          </Col>
        </Row>
      </BoxedLayout>
    </div>
  );
}

export default withRouter(Blog);

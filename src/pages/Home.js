import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

import ArticleSnippet from "../components/ArticleSnippet";
import Sidebar from "../layouts/Sidebar";
import HeroSecction from "../components/HeroSection";

const snipperts = [
  {
    category: "ReactJS",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  },
  {
    category: "ReactJS",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  },
  {
    category: "ReactJS",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  }
];

function Home() {
  return (
    <>
      <HeroSecction />
      <Container className="py-4">
        <Row>
          <Col sm={8}>
            {snipperts.map(snipet => (
              <ArticleSnippet {...snipet} />
            ))}
          </Col>
          <Col sm={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

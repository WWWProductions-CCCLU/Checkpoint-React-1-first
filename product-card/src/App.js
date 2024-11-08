// src/App.js
import "./App.css";
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

// Set your first name here
const firstName = "Alex"; // Replace with your name or leave empty to show "Hello, there!"

function App() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Image />
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>
          <div className="mt-4 text-center">
            {firstName ? (
              <>
                <p>Hello, {firstName}!</p>
                <img src="https://via.placeholder.com/50" alt="Profile" />
              </>
            ) : (
              <p>Hello, there!</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

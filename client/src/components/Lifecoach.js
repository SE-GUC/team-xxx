import React, { Component } from "react";
import { Container, Col, Image } from "react-bootstrap";

export default class Lifecoach extends Component {
  render() {
    return (
      <div>
        <Image src="assets/dog-people.jpg" className="header-image" />
        <Container>
          <Col xs={12} sm={8} smOffset={2}>
            <Image
              src="assets/person-1.jpg"
              className="about-profile-pic"
              rounded
            />
            <h3>Frank The Tank</h3>
          </Col>
        </Container>
      </div>
    );
  }
}

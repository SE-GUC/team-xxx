import React, { Component } from "react";
import { Container, Col, Button, Row } from "react-bootstrap";

export default class Lifecoach extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 10 }}>
              {" "}
              <Button color="primary" onClick={this.addProject}>
                Add Slot
              </Button>{" "}
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}

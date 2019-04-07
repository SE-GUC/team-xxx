import React, { Component } from "react";
import { Container, Col, Button, Row } from "react-bootstrap";

export default class Lifecoach extends Component {
  NewSlot = () => {
    this.props.history.push("/AddSlot");
  };

  Slots = () => {
    this.props.history.push("/AllSlots");
  };
  FreeSlots = () => {
    this.props.history.push("/FreeSlots");
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 10 }}>
              {" "}
              <Button color="primary" onClick={this.NewSlot}>
                Add Slot
              </Button>{" "}
              <Button color="primary" onClick={this.Slots}>
                Show Slots
              </Button>{" "}
            </Col>
            <Col sm={{ size: 6, order: 2, offset: 10 }}>
              {" "}
              <Button color="primary" onClick={this.FreeSlots}>
                Free Slots
              </Button>{" "}
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}

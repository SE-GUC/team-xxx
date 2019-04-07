import React, { Component } from "react";
import { Container, Col, Button, Row } from "react-bootstrap";

export default class Lifecoach extends Component {
  NewSlot = () => {
    this.props.history.push("/AddSlot");
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
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}

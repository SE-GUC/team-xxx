import React, { Component } from "react";
import { Container, Col, Image, FormGroup,Button } from "react-bootstrap";

export default class Lifecoach extends Component {
  NewSlot = () => {
    this.props.history.push("/AddSlot");
  };
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
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 5 }}>
            <Button color="info" onClick={this.NewSlot}>
                        Add Slot
                      </Button>
            </Col>
          </FormGroup>
        </Container>
      </div>
    );
  }
}

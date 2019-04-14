import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardDeck,
  Container,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";

class Booking extends Component {
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
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
        <Container>
          <CardDeck>
            <Card body outline color="secondary">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Book</Button>
              <br />
              <Button>Confirm</Button>
              <br />
              <FormGroup>
                <Label for="exampleEmail" hidden>
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Suggest Location"
                />
              </FormGroup>
              <Button>Submit Location</Button>
              <br />
              <Button>Confirm</Button>
            </Card>
            <Card body outline color="secondary">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Book</Button>
              <br />
              <Button>Confirm</Button>
              <br />
              <FormGroup>
                <Label for="exampleEmail" hidden>
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Suggest Location"
                />
              </FormGroup>
              <Button>Submit Location</Button>
              <br />
              <Button>Confirm</Button>
            </Card>
            <Card body outline color="secondary">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Book</Button>
              <br />
              <Button>Confirm</Button>
              <br />
              <FormGroup>
                <Label for="exampleEmail" hidden>
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Suggest Location"
                />
              </FormGroup>
              <Button>Submit Location</Button>
              <br />
              <Button>Confirm</Button>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Booking;

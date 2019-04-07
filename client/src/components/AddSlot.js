import React from "react";
import { Button, Form, FormGroup, Label, Input, Alert, Col } from "reactstrap";
import { Container } from "react-bootstrap";
import { addSlot } from "../actions/SlotActions";
import { connect } from "react-redux";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss() {
    this.setState({ visible: false });
  }
  onshow() {
    this.setState({ visible: true });
  }
  state = {
    visible: false,
    lifecoachEmail: "",
    number: "",
    Date: "",
    startTime: "",
    endTime: "",
    status: "",
    Location: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      const newSlot = {
        lifecoachEmail: this.state.lifecoachEmail,
        number: this.state.number,
        Date: this.state.Date,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        status: this.state.status,
        Location: this.state.Location
      };

      this.props.addSlot(newSlot);
      this.onshow();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Alert
            color="info"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            Your Slot is created successfully
          </Alert>

          <FormGroup>
            <Label for="lifecoachEmail">Life Coach Email</Label>
            <Input
              type="text"
              name="lifecoachEmail"
              id="lifecoachEmail"
              placeholder="please write email"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="number">Number</Label>
            <Input
              type="date"
              name="number"
              id="number"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Date">Date </Label>
            <Input type="date" name="Date" id="Date" onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <Label for="startTime">Start Time</Label>
            <Input
              type="date"
              name="startTime"
              id="startTime"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="endTime">End Time</Label>
            <Input
              type="date"
              name="endTime"
              id="endTime"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="status">Status</Label>
            <Input
              type="text"
              name="status"
              id="status"
              placeholder="please write your status"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Location">Location</Label>
            <Input
              type="text"
              name="Location"
              id="Location"
              placeholder="please write Location"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 5 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  Slot: state.Slot
});
export default connect(
  mapStateToProps,
  { addSlot }
)(Example);

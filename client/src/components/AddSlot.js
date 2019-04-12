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
              placeholder="Life Coach Email"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="number">Slot Number</Label>
            <Input
              type="date"
              name="number"
              id="number"
              placeholder="Slot Number"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Date">Date </Label>
            <Input
              type="date"
              name="Date"
              id="Date"
              placeholder="Slot Date"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="startTime">Start Time</Label>
            <Input
              type="date"
              name="startTime"
              id="startTime"
              placeholder="Slot Start Time"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="endTime">End Time</Label>
            <Input
              type="date"
              name="endTime"
              id="endTime"
              placeholder="Slot End Time"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="status">Status</Label>
            <Input
              type="text"
              name="status"
              id="status"
              placeholder="Slot Status"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Location">Location</Label>
            <Input
              type="text"
              name="Location"
              id="Location"
              placeholder="Enter The Session Suggested Location"
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

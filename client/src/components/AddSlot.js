import {
  Button,
  Form,
  FormGroup,
  Badge,
  Label,
  Input,
  Alert,
  Col
} from "reactstrap";
import { addSlot } from "../actions/SlotActions";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import LoginModal from "./auth/LoginModal";
import React from "react";
import PropTypes from "prop-types";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.onDismiss = this.onDismiss.bind(this);
  }
  static propTypes = {
    addSlot: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  onDismiss() {
    this.setState({ visible: false });
  }
  onshow() {
    this.setState({ visible: true });
  }
  state = {
    visible: false,
    lifecoachEmail: "",
    Date: "",
    startTime: "",
    endTime: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      const newSlot = {
        lifecoachEmail: this.state.lifecoachEmail,
        Date: this.state.Date,
        startTime: this.state.startTime,
        endTime: this.state.endTime
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
        <br />
        {this.props.isAuthenticated ? (
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
                type="time"
                name="startTime"
                id="startTime"
                placeholder="Slot Start Time"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="endTime">End Time</Label>
              <Input
                type="time"
                name="endTime"
                id="endTime"
                placeholder="Slot End Time"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 5 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        ) : (
          <h4 className="mb-3 ml-4">
            Please{"  "}
            <Badge color="light">
              <LoginModal />
            </Badge>
            {"  "}
            to manage{"  "}
          </h4>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  Slot: state.Slot,
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { addSlot }
)(Example);

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getslot, editSlot } from "../actions/SlotActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  Container,
  FormGroup,
  Form,
  Input
} from "reactstrap";

class EditSlot extends Component {
  static propTypes = {
    getslot: PropTypes.func.isRequired,
    editSlot: PropTypes.func.isRequired,
    Slot: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };
  state = {
    visible: false,
    Date: this.props.defaultInputValue,
    startTime: this.props.defaultInputValue,
    endTime: this.props.defaultInputValue
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    try {
      e.preventDefault();
      const SlotEdit = {
        Date: this.state.Date,
        startTime: this.state.startTime,
        endTime: this.state.endTime
      };
      this.props.editSlot(SlotEdit, this.props.match.params.id);
      this.props.history.push("/Slot/" + this.props.match.params.id);
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.props.getslot(this.props.match.params.id);
  }

  render() {
    const { Slots } = this.props.Slot;
    return (
      <div>
        <br />
        <Container>
          {" "}
          {this.props.isAuthenticated ? (
            <TransitionGroup className="Slots">
              <CSSTransition key={Slots._id} timeout={500} classNames="fade">
                <Card>
                  <CardHeader tag="h3">{Slots.lifecoachEmail}</CardHeader>
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <FormGroup>
                        <h5>Slot Date</h5>
                        <Input
                          type="date"
                          name="Date"
                          id="Date"
                          defaultValue={Slots.Date}
                          placeholder="Enter Slot Date"
                          onChange={this.onChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <h5>Slot Start Time</h5>
                        <Input
                          type="time"
                          name="startTime"
                          id="startTime"
                          defaultValue={Slots.startTime}
                          placeholder="Enter Slot Start Time"
                          onChange={this.onChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <h5>Slot End Time</h5>
                        <Input
                          type="time"
                          name="endTime"
                          id="endTime"
                          defaultValue={Slots.endTime}
                          placeholder="Enter Slot End Time"
                          onChange={this.onChange}
                        />
                      </FormGroup>
                      <Button>Submit</Button>
                    </Form>
                  </CardBody>
                </Card>
              </CSSTransition>
            </TransitionGroup>
          ) : null}
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Slot: state.Slot,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getslot, editSlot }
)(EditSlot);

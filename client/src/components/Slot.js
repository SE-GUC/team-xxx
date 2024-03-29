import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getslot, editSlot } from "../actions/SlotActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import LoginModal from "./auth/LoginModal";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardText,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Input,
  Badge,
  FormGroup,
  Label
} from "reactstrap";

class Slot extends Component {
  static propTypes = {
    getslot: PropTypes.func.isRequired,
    editSlot: PropTypes.func.isRequired,
    Slot: PropTypes.object.isRequired,
    Member: PropTypes.object.isRequired,
    Consultancy: PropTypes.object.isRequired,
    Admin: PropTypes.object.isRequired,
    Partner: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      Location: ""
    };
    this.toggle = this.toggle.bind(this);
  }

  suggest = () => {
    this.props.editSlot(
      { Location: this.state.Location },
      this.props.match.params.id
    );

    this.toggle();
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  componentDidMount() {
    this.props.getslot(this.props.match.params.id);
  }
  Editslot = () => {
    this.props.history.push("/EditSlot/" + this.props.match.params.id);
  };
  bookslot = () => {
    const { member, consultancy, admin, partner } = this.props.auth;
    if (member != null) {
      this.forceUpdate(
        this.props.editSlot(
          {
            status: "Booked",
            BookingCon: "Pending",
            applicant: `${member.Name}`
          },
          this.props.match.params.id
        )
      );
    }
    if (admin != null) {
      this.forceUpdate(
        this.props.editSlot(
          {
            status: "Booked",
            BookingCon: "Pending",
            applicant: `${admin.Name}`
          },
          this.props.match.params.id
        )
      );
    }
    if (consultancy != null) {
      this.forceUpdate(
        this.props.editSlot(
          {
            status: "Booked",
            BookingCon: "Pending",
            applicant: `${consultancy.Name}`
          },
          this.props.match.params.id
        )
      );
    }
    if (partner != null) {
      this.forceUpdate(
        this.props.editSlot(
          {
            status: "Booked",
            BookingCon: "Pending",
            applicant: `${partner.Name}`
          },
          this.props.match.params.id
        )
      );
    }
  };
  confirmslot = () => {
    this.forceUpdate(
      this.props.editSlot(
        { BookingCon: "Confirmed" },
        this.props.match.params.id
      )
    );
  };
  render() {
    const { Slots } = this.props.Slot;
    return (
      <div>
        <br />
        <Container>
          <Row>
            <Col sm={{ size: 10, order: 6, offset: 5 }}>
              {" "}
              <Button color="primary">Decline Booking</Button>{" "}
              <Button
                color="primary"
                onClick={this.confirmslot}
                disabled={Slots.BookingCon === "Confirmed"}
              >
                Confirm Booking
              </Button>{" "}
              <Button
                color="primary"
                onClick={this.bookslot}
                disabled={Slots.status === "Booked"}
              >
                Book Slot
              </Button>{" "}
              <Button color="primary" onClick={this.Editslot}>
                Edit Slot
              </Button>{" "}
              <Button color="danger" onClick={this.toggle}>
                Suggest Location {this.props.buttonLabel}
              </Button>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
                <ModalHeader toggle={this.toggle}>
                  <Label for="exampleCity">Location</Label>
                </ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Input
                      type="text"
                      name="Location"
                      id="Location"
                      placeholder="Suggest Location"
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.suggest}>
                    Confirm
                  </Button>{" "}
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </Col>
          </Row>
          <br />
          {this.props.isAuthenticated ? (
            <TransitionGroup className="Slots">
              <CSSTransition key={Slots._id} timeout={500} classNames="fade">
                <Card>
                  <CardHeader tag="h3">{Slots.lifecoachEmail}</CardHeader>
                  <CardBody>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Slot Date
                      </h4>
                      {Slots.Date}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        {" "}
                        From : {<h6>{Slots.startTime}</h6>} To :
                        {<h6>{Slots.endTime}</h6>}
                      </h4>
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Status{" "}
                      </h4>
                      {Slots.status}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Location :
                      </h4>
                      {Slots.Location}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Applicant :{" "}
                      </h4>
                      {Slots.applicant}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Booking Confirmation :{" "}
                      </h4>
                      {Slots.BookingCon}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Location Confirmation :{" "}
                      </h4>
                      {Slots.LocationCon}
                    </CardText>
                  </CardBody>
                </Card>
              </CSSTransition>
            </TransitionGroup>
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
        <br />
        <br />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Slot: state.Slot,
  Member: state.Slot,
  Consultancy: state.Slot,
  Admin: state.Slot,
  Partner: state.Slot,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getslot, editSlot }
)(Slot);

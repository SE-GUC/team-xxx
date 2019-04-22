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
  CardText,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container
} from "reactstrap";

class Slot extends Component {
  static propTypes = {
    getslot: PropTypes.func.isRequired,
    editSlot: PropTypes.func.isRequired,
    Slot: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

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
    this.forceUpdate(
      this.props.editSlot({ status: "Booked" }, this.props.match.params.id)
    );
  };
  render() {
    const { Slots } = this.props.Slot;
    return (
      <div>
        <br />
        <Container>
          <Row>
            <Col sm={{ size: 10, order: 2, offset: 5 }}>
              {" "}
              <Button color="primary" onClick={this.toggle}>
                Suggest Location
              </Button>{" "}
              <Button color="primary">Confirm Booking</Button>{" "}
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
          ) : null}
        </Container>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody />
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <br />
        <br />
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
)(Slot);

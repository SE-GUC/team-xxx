import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getslot } from "../actions/SlotActions";
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
  Container
} from "reactstrap";

class Slot extends Component {
  static propTypes = {
    getslot: PropTypes.func.isRequired,
    Slot: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getslot(this.props.match.params.id);
  }
  Editslot = () => {
    this.props.history.push("/EditSlot/" + this.props.match.params.id);
  };
  render() {
    const { Slots } = this.props.Slot;
    return (
      <div>
        <Container>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 10 }}>
              {" "}
              <Button color="primary">Book Slot</Button>{" "}
              <Button color="primary" onClick={this.Editslot}>
                Edit Slot
              </Button>{" "}
            </Col>
          </Row>
          <br />
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
        </Container>
        <br />
        <br />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Slot: state.Slot
});

export default connect(
  mapStateToProps,
  { getslot }
)(Slot);

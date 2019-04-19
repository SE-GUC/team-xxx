import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getSlots, deleteSlot } from "../actions/SlotActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, CardText, Button, Container, Col } from "reactstrap";

class Lifecoach extends Component {
  static propTypes = {
    getSlots: PropTypes.func.isRequired,
    deleteSlot: PropTypes.func.isRequired,
    Slot: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getSlots();
  }
  onDeleteClick = id => {
    this.props.deleteSlot(id);
  };
  Addaslot = () => {
    this.props.history.push("/AddSlot");
  };
  infoslot = id => {
    this.props.history.push("/Slot/" + id);
  };
  render() {
    const { Slots } = this.props.Slot;
    return (
      <div>
        <br />
        <Container>
          <Col sm={{ size: 6, order: 2, offset: 10 }}>
            {" "}
            <Button color="primary" onClick={this.Addaslot}>
              Add a Slot
            </Button>{" "}
          </Col>
          <br />
        </Container>
        <Container>
          <br />
          {this.props.isAuthenticated ? (
            <TransitionGroup className="Slots">
              {Slots.map(
                ({ _id, lifecoachEmail, Date, startTime, endTime, status }) => (
                  <CSSTransition key={_id} timeout={500} classNames="fade">
                    <Card body>
                      <CardText>
                        <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                          Life Coach Email
                        </h4>
                        {lifecoachEmail}
                      </CardText>
                      <CardText>
                        <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                          Slot Date
                        </h4>
                        {Date}
                      </CardText>
                      <CardText>
                        <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                          {" "}
                          From : {<h6>{startTime}</h6>} To :{<h6>{endTime}</h6>}
                        </h4>
                      </CardText>
                      <CardText>
                        <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                          Status{" "}
                        </h4>
                        {status}
                      </CardText>
                      <Button
                        color="info"
                        onClick={this.infoslot.bind(this, _id)}
                      >
                        Slot Details
                      </Button>
                      <Button
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times; Delete Slot
                      </Button>
                    </Card>
                  </CSSTransition>
                )
              )}
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
  { getSlots, deleteSlot }
)(Lifecoach);

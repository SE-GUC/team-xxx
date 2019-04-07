import React, { Component } from "react";
import { getSlots } from "../actions/SlotActions";
import { Container, Col, Button, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Lifecoach extends Component {
  static propTypes = {
    getSlots: PropTypes.func.isRequired,
    Slot: PropTypes.object.isRequired
  };
  NewSlot = () => {
    this.props.history.push("/AddSlot");
  };
  componentDidMount() {
    this.props.getSlots();
  }

  Slots = () => {
    this.props.history.push("/AllSlots");
  };
  FreeSlots = () => {
    this.props.history.push("/FreeSlots");
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
              <Button color="primary" onClick={this.Slots}>
                Show Slots
              </Button>{" "}
            </Col>
            <Col sm={{ size: 6, order: 2, offset: 10 }}>
              {" "}
              <Button color="primary" onClick={this.FreeSlots}>
                Free Slots
              </Button>{" "}
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Slot: state.Slot
});
export default connect(
  mapStateToProps,
  { getSlots }
)(Lifecoach);

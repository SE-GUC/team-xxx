
import React, { Component } from "react";
import { getSlots } from "../actions/SlotActions";
import { Container, Col, Image, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";


 class Lifecoach extends Component {

  static propTypes = {
    getSlots: PropTypes.func.isRequired,
    Slot: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getSlots();
  }

  Slots = ()=> {
    this.props.history.push("/AllSlots");
  };
  FreeSlots = ()=> {
    this.props.history.push("/FreeSlots");
  };

  render() {
    return (
      <div>
        <Image src="assets/dog-people.jpg" className="header-image" />
        <Container>
        <Col sm={{ size: 6, order: 2, offset: 10 }}>
              {" "}
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
          <Col xs={12} sm={8} smOffset={2}>
            <Image
              src="assets/person-1.jpg"
              className="about-profile-pic"
              rounded
            />
            <h3>Frank The Tank</h3>
          </Col>
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

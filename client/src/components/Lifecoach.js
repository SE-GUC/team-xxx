import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getSlots } from "../actions/SlotActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  Container,
  Col,
  Button,
  Badge,
  CardTitle,
  CardText,
  Row
} from "reactstrap";

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

  render() {
    const { Slots } = this.props.Slot;
    return (
      <div>
        <Container>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 10 }}>
              {" "}
              <Button color="primary" onClick={this.NewSlot}>
                Add Slot
              </Button>{" "}
            </Col>
          </Row>
          <br />
        </Container>
        <Container>
          <TransitionGroup className="Slots">
            {Slots.map(({ _id, lifecoachEmail }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Card body>
                  <CardTitle>
                    <h1>
                      <Badge color="success">({lifecoachEmail})</Badge>
                    </h1>
                  </CardTitle>
                  <CardText>({lifecoachEmail})</CardText>
                </Card>
              </CSSTransition>
            ))}
          </TransitionGroup>
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

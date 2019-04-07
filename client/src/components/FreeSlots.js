import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getFreeSlots } from "../actions/SlotActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Badge,
  CardTitle,
  CardText
} from "reactstrap";

class FreeSlots extends Component {
  static propTypes = {
    getFreeSlots: PropTypes.func.isRequired,
    Slot: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getFreeSlots();
  }

  render() {
    const { Slots } = this.props.Slot;
    return (
      <div>
        <Container>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 10 }}>
              {" "}
              <Button color="primary">Add Project</Button>{" "}
            </Col>
          </Row>
          <br />
          <TransitionGroup className="shopping-list">
            {Slots.map(({ _id, lifecoachEmail, number }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Row>
                  <Col sm="12">
                    <Card body>
                      <CardTitle>
                        <h1>
                          <Badge color="success">({lifecoachEmail})</Badge>
                        </h1>
                      </CardTitle>
                      <CardText>({number})</CardText>
                      <Button color="info">Project Details</Button>
                    </Card>
                  </Col>
                </Row>
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
  { getFreeSlots }
)(FreeSlots);

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getSlots ,deleteSlot} from "../actions/SlotActions";
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

class AllSlots extends Component {
  static propTypes = {
    getSlots: PropTypes.func.isRequired,
    Slot: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getSlots();
  }
  onDeleteClick = id => {
    this.props.deleteproject(id);
  };
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
            {Slots.map(({ _id, lifecoachEmail, status }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Row>
                  <Col sm="12">
                    <Card body>
                      <CardTitle>
                        <h1>
                          <Badge color="success">({lifecoachEmail})</Badge>
                        </h1>
                      </CardTitle>
                      <CardText>({status})</CardText>
                      <Button color="info">Project Details</Button>
                      <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times; Delete Project
                      </Button>
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
  { getSlots,deleteSlot }
)(AllSlots);

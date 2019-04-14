import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getSlots, BookSlot, ConfirmSlot } from "../actions/SlotActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  Row,
  CardText,
  CardTitle,
  Button,
  Container,
  Col,
  Badge
} from "reactstrap";

class Lifecoach extends Component {
  static propTypes = {
    getSlots: PropTypes.func.isRequired,
    BookSlot: PropTypes.func.isRequired,
    Slot: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getSlots();
  }
  BookSlot = id => {
    this.props.BookSlot(id);
  };
  state = {
    visible: false,
    BookingCon: false
  };

  ConfirmSlot = id => {
    this.setState({ BookingCon: true });
    this.props.ConfirmSlot(id);
  };
  Addaslot = () => {
    this.props.history.push("/AddSlot");
  };

  render() {
    const { Slots } = this.props.Slot;
    return (
      <div>
        <Container>
          <Col sm={{ size: 6, order: 2, offset: 10 }}>
            {" "}
            <Button color="primary" onClick={this.Addaslot}>
              Add a Slot
            </Button>{" "}
          </Col>
          <br />
          <Container>
            <br />
            <TransitionGroup className="shopping-list">
              {Slots.map(
                ({
                  _id,
                  lifecoachEmail,
                  number,
                  Date,
                  startTime,
                  endTime,
                  Location
                }) => (
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
                          <CardText>({Date})</CardText>
                          <CardText>({startTime})</CardText>
                          <CardText>({endTime})</CardText>
                          <CardText>({Location})</CardText>

                          <Button
                            color="info"
                            size="sm"
                            onClick={this.BookSlot.bind(this, _id)}
                          >
                            Book A Slot
                          </Button>

                          <Button
                            color="info"
                            size="sm"
                            onClick={this.ConfirmSlot.bind(this, _id)}
                          >
                            Confirm A Slot
                          </Button>
                        </Card>
                      </Col>
                    </Row>
                  </CSSTransition>
                )
              )}
            </TransitionGroup>
          </Container>
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
  { getSlots, BookSlot, ConfirmSlot }
)(Lifecoach);

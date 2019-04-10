import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getSlots } from "../actions/SlotActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardDeck,
  Container,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";

class Booking extends Component {
  static propTypes = {
    getSlots: PropTypes.func.isRequired,
    Slot: PropTypes.object.isRequired
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
          <CardDeck>
            <TransitionGroup className="Slots">
              {Slots.map(({ _id, lifecoachEmail }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <Card body outline color="secondary">
                    <CardTitle>{lifecoachEmail}</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Book</Button>
                    <br />
                    <Button>Confirm</Button>
                    <br />
                    <FormGroup>
                      <Label for="exampleEmail" hidden>
                        Email
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Suggest Location"
                      />
                    </FormGroup>
                    <Button>Submit Location</Button>
                    <br />
                    <Button>Confirm</Button>
                  </Card>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </CardDeck>
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
)(Booking);

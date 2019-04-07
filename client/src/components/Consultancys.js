import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getConsultancys } from "../actions/ConsultancyAction";
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

class Consultancys extends Component {
  static propTypes = {
    getConsultancys: PropTypes.func.isRequired,
    Consultancy: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getConsultancys();
  }
  
  render() {
    const { Consultancys } = this.props.Consultancy;
    return (
      <div>
        <Container>
          <Row>
            
          </Row>
          <br />
          <TransitionGroup className="shopping-list">
            {Consultancys.map(({ _id, Email, reports }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Row>
                  <Col sm="12">
                    <Card body>
                      <CardTitle>
                        <h1>
                          <Badge color="success">({Email})</Badge>
                        </h1>
                      </CardTitle>
                      <CardText>({reports})</CardText>
                      <Button color="info" >
                        Delete
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
  Consultancy: state.Consultancy
});

export default connect(
  mapStateToProps,
  { getConsultancys }
)(Consultancys);
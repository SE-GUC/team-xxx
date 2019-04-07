import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getPartners } from "../actions/PartnerActions";
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

class Partners extends Component {
  static propTypes = {
    getPartners: PropTypes.func.isRequired,
    Partner: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getPartners();
  }

  render() {
    const { Partners } = this.props.Partner;
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
            {Partners.map(({ _id, Email, field }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Row>
                  <Col sm="12">
                    <Card body>
                      <CardTitle>
                        <h1>
                          <Badge color="success">({Email})</Badge>
                        </h1>
                      </CardTitle>
                      <CardText>({field})</CardText>
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
  Partner: state.Partner
});

export default connect(
  mapStateToProps,
  { getPartners }
)(Partners);

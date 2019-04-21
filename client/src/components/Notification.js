import { getPartner } from "../actions/PartnersActions";
import { getMember } from "../actions/MemberActions";
import { getConsultancy } from "../actions/ConsultancyActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Row,
  Col,
  Container
} from "reactstrap";

class Notification extends Component {
  static propTypes = {
    getPartner: PropTypes.func.isRequired,
    getMember: PropTypes.func.isRequired,
    getConsultancy: PropTypes.func.isRequired,
    Member: PropTypes.func.isRequired,
    Consultancy: PropTypes.func.isRequired,
    Partner: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  // componentDidMount() {
  //   this.props.getMember(this.props.match.params.id);
  // }

  render() {
    const { partner, member, consultancy } = this.props.auth;
    return (
      <div>
        <br />
        <Container>
          <Row>
            <Col sm={{ size: 10, order: 2, offset: 5 }}> </Col>
          </Row>
          <br />
          {this.props.isAuthenticated ? (
            <Card>
              <CardHeader tag="h3" />
              <CardBody>
                <CardText>
                  <strong>
                    {partner ? `Notifications: ${partner.Notifications}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {member ? `Notifications: ${member.Notifications}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {consultancy
                      ? `Notifications: ${consultancy.Notifications}`
                      : ""}
                  </strong>
                </CardText>
              </CardBody>
            </Card>
          ) : null}
        </Container>
        <br />
        <br />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Partner: state.Partner,
  Member: state.Member,
  Consultancy: state.Consultancy,
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPartner, getConsultancy, getMember }
)(Notification);

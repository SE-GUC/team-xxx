import { getMember } from "../actions/MemberActions";
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

class Profile extends Component {
  static propTypes = {
    getMember: PropTypes.func.isRequired,
    Member: PropTypes.object.isRequired,
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
    const { admin, partner, member, consultancy } = this.props.auth;

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
                  <strong>{member ? `Name: ${member.Name}` : ""}</strong>
                </CardText>
                <CardText>
                  <strong>{member ? `Email: ${member.Email}` : ""}</strong>
                </CardText>
                <CardText>
                  <strong>{member ? `Skills: ${member.skills}` : ""}</strong>
                </CardText>
                <CardText>
                  <strong>
                    {member ? `interests: ${member.interests}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>{member ? `events: ${member.events}` : ""}</strong>
                </CardText>
                <CardText>
                  <strong>{member ? `tasks: ${member.tasks}` : ""}</strong>
                </CardText>
                <CardText>
                  <strong>{member ? `reviews: ${member.reviews}` : ""}</strong>
                </CardText>
                <CardText>
                  <strong>
                    {member
                      ? `masterclasses: ${String(member.masterclasses)}`
                      : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {member ? `Contracts: ${member.Contracts}` : ""}
                  </strong>
                </CardText>

                <CardText>
                  <strong>
                    {member ? `old Projects: ${member.oldProjects}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {member ? `Current Projects: ${member.projects}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>{partner ? `Email: ${partner.Email}` : ""}</strong>
                </CardText>
                <CardText>
                  <strong>{partner ? `Name: ${partner.Name}` : ""}</strong>
                </CardText>
                <CardText>
                  <strong>
                    {partner ? `business: ${partner.business}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {partner ? `boardmembers: ${partner.boardmembers}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>{partner ? `events: ${partner.events}` : ""}</strong>
                </CardText>
                <CardText>
                  <strong>{partner ? `field: ${partner.field}` : ""}</strong>
                </CardText>
                <CardText>
                  <strong>
                    {partner ? `projects: ${partner.projects}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {partner ? `Contracts: ${partner.Contracts}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {partner ? `Reviews: ${partner.Reviews}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {consultancy ? `Email: ${consultancy.Email}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {consultancy ? `Name: ${consultancy.Name}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {consultancy ? `business: ${consultancy.business}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {consultancy ? `partners: ${consultancy.partners}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {consultancy
                      ? `boardmembers: ${consultancy.boardmembers}`
                      : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {consultancy ? `events: ${consultancy.events}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {consultancy ? `reports: ${consultancy.reports}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {consultancy ? `Contracts: ${consultancy.Contracts}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {consultancy ? `projects: ${consultancy.projects}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>
                    {consultancy ? `Reviews: ${consultancy.Reviews}` : ""}
                  </strong>
                </CardText>
                <CardText>
                  <strong>{admin ? `Email: ${admin.Email}` : ""}</strong>
                </CardText>
                <CardText>
                  <strong>{admin ? `Name: ${admin.Name}` : ""}</strong>
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
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getMember }
)(Profile);

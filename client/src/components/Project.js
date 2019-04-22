import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getProject, memberapply } from "../actions/ProjectActions";
//import { loadAdmin } from "../actions/authActions";
import React, { Component } from "react";
import LoginModal from "./auth/LoginModal";
import { addNotification } from "../actions/MemberActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Progress,
  Row,
  Col,
  Container,
  Badge
} from "reactstrap";

class Project extends Component {
  static propTypes = {
    getProject: PropTypes.func.isRequired,
    memberapply: PropTypes.func.isRequired,
    Project: PropTypes.object.isRequired,
    Admin: PropTypes.object.isRequired,
    Partner: PropTypes.object.isRequired,
    Member: PropTypes.object.isRequired,
    Consultancy: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getProject(this.props.match.params.id);
  }
  Editproject = () => {
    this.props.history.push("/EditProject/" + this.props.match.params.id);
  };
  Apply = () => {
    const { member } = this.props.auth;
    const memb = { applicants: `${member.Name}` };
    this.props.memberapply(memb, this.props.match.params.id);
    const id = member._id;
    const Notifications = { Notifications: `you applied for a project` };
    this.props.addNotification(id, Notifications);
  };

  render() {
    const { Projects } = this.props.Project;
    return (
      <div>
        <br />
        <Container>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 9 }}>
              {" "}
              <Button color="primary" onClick={this.Apply}>
                Apply for project
              </Button>{" "}
              <Button color="primary" onClick={this.Editproject}>
                Edit Project
              </Button>{" "}
            </Col>
          </Row>
          <br />{" "}
          {this.props.isAuthenticated ? (
            <TransitionGroup className="Projects">
              <CSSTransition key={Projects._id} timeout={500} classNames="fade">
                <Card>
                  <CardHeader tag="h3">{Projects.Title}</CardHeader>
                  <CardBody>
                    <CardTitle />
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Description
                      </h4>
                      {Projects.description}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Category
                      </h4>
                      {Projects.category}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Duration
                      </h4>
                      {Projects.duration}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Consultancy Needed
                      </h4>
                      {Projects.Consultant}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Project consultant
                      </h4>
                      {Projects.consultancy}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Consultant Acceptance
                      </h4>
                      {Projects.consultancyAcceptance}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Candidates
                      </h4>
                      {Projects.candidates}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Required experience
                      </h4>
                      {Projects.experience}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Required commitment
                      </h4>
                      {Projects.commitment}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Required Effort
                      </h4>
                      {Projects.effort}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Required Skills
                      </h4>
                      {Projects.skills}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        compensation
                      </h4>
                      {Projects.compensation}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Project partner
                      </h4>
                      {Projects.partner}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Assignee
                      </h4>
                      {Projects.assigned}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Applicants
                      </h4>
                      {Projects.applicants}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Project Files
                      </h4>
                      {Projects.memberWork}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Extra information
                      </h4>
                      {Projects.extraInfo}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                        Project Feedback
                      </h4>
                      {Projects.feedback}{" "}
                    </CardText>
                  </CardBody>
                  <CardFooter className="text-muted">
                    <CardText>
                      <div className="text-center">Project State</div>
                    </CardText>
                    <Progress multi>
                      <Progress bar value={Projects.statevalue} max={100}>
                        {Projects.state}
                      </Progress>
                    </Progress>
                  </CardFooter>
                </Card>
              </CSSTransition>
            </TransitionGroup>
          ) : (
            <h4 className="mb-3 ml-4">
              Please{"  "}
              <Badge color="light">
                <LoginModal />
              </Badge>
              {"  "}
              to manage{"  "}
            </h4>
          )}
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Project: state.Project,
  Admin: state.Project,
  Partner: state.Project,
  Member: state.Project,
  Consultancy: state.Project,
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProject, memberapply, addNotification }
)(Project);

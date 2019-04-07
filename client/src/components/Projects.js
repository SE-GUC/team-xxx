import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getProjects } from "../actions/ProjectActions";
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

class Projects extends Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired,
    Project: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getProjects();
  }
  addProject = () => {
    this.props.history.push("/AddProject");
  };
  infoproject = () => {
    this.props.history.push("/Project");
  };
  render() {
    const { Projects } = this.props.Project;
    return (
      <div>
        <Container>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 10 }}>
              {" "}
              <Button color="primary" onClick={this.addProject}>
                Add Project
              </Button>{" "}
            </Col>
          </Row>
          <br />
          <TransitionGroup className="shopping-list">
            {Projects.map(({ _id, Title, description }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Row>
                  <Col sm="12">
                    <Card body>
                      <CardTitle>
                        <h1>
                          <Badge color="success">({Title})</Badge>
                        </h1>
                      </CardTitle>
                      <CardText>({description})</CardText>
                      <Button color="info" onClick={this.infoproject}>
                        Project Details
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
  Project: state.Project
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Projects);
  
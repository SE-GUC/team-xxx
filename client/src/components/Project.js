import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getProject } from "../actions/ProjectActions";
import React, { Component } from "react";
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
  Container
} from "reactstrap";

class Project extends Component {
  static propTypes = {
    getProject: PropTypes.func.isRequired,
    Project: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getProject(this.props.match.params.id);
  }
  render() {
    const { Projects } = this.props.Project;
    return (
      <div>
        <Container>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 9 }}>
              {" "}
              <Button color="primary">Apply for project</Button>{" "}
              <Button color="primary">Edit Project</Button>{" "}
            </Col>
          </Row>
          <br />
          <TransitionGroup className="Projects">
            <CSSTransition key={Projects._id} timeout={500} classNames="fade">
              <Card>
                <CardHeader tag="h3">{Projects.Title}</CardHeader>
                <CardBody>
                  <CardTitle />
                  <CardText>{Projects.description}</CardText>
                  <CardText>
                    <div className="text-center">Project State</div>
                    <br />
                    <Progress multi>
                      <Progress bar value="20" max={55}>
                        Pending
                      </Progress>
                      <Progress bar color="success" value="20" max={55}>
                        Posted
                      </Progress>
                      <Progress bar color="warning" value="20" max={55}>
                        Under Review
                      </Progress>
                      <Progress bar color="danger" value="20" max={55}>
                        WIP
                      </Progress>
                      <Progress bar color="info" value="20" max={55}>
                        Finished
                      </Progress>
                    </Progress>
                  </CardText>
                </CardBody>
                <CardFooter className="text-muted">Footer</CardFooter>
              </Card>
            </CSSTransition>
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
  { getProject }
)(Project);

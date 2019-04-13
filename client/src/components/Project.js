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
  Editproject = id => {
    this.props.history.push("/EditProject/" + this.props.match.params.id);
  };
  render() {
    const { Projects } = this.props.Project;
    return (
      <div>
        <Container>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 9 }}>
              {" "}
              <Button color="primary">Apply for project</Button>{" "}
              <Button color="primary" onClick={this.Editproject}>
                Edit Project
              </Button>{" "}
            </Col>
          </Row>
          <br />
          <TransitionGroup className="Projects">
            <CSSTransition key={Projects._id} timeout={500} classNames="fade">
              <Card>
                <CardHeader tag="h3">{Projects.Title}</CardHeader>
                <CardBody>
                  <CardTitle />
                  <CardText>
                    <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                      Project Description
                    </h4>
                    {Projects.description}{" "}
                  </CardText>
                  <CardText>
                    <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                      Project Required Skills
                    </h4>
                    {Projects.skills}{" "}
                  </CardText>
                  <CardText>
                    <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                      Project Required Effort
                    </h4>
                    {Projects.effort}{" "}
                  </CardText>
                  <CardText>
                    <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                      Project Required commitment
                    </h4>
                    {Projects.commitment}{" "}
                  </CardText>
                  <CardText>
                    <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                      Project Required experience
                    </h4>
                    {Projects.experience}{" "}
                  </CardText>
                  <CardText>
                    <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                      Project Required category
                    </h4>
                    {Projects.category}{" "}
                  </CardText>
                  <CardText>
                    <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                      Project Duration
                    </h4>
                    {Projects.duration}{" "}
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

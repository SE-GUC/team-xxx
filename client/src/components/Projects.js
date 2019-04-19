import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getProjects, deleteproject } from "../actions/ProjectActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  Container,
  Col,
  Button,
  CardText,
  FormGroup,
  Label,
  Input,
  Form
} from "reactstrap";

class Projects extends Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired,
    deleteproject: PropTypes.func.isRequired,
    Project: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getProjects();
  }
  onDeleteClick = id => {
    this.props.deleteproject(id);
  };
  addProject = () => {
    this.props.history.push("/AddProject");
  };
  infoproject = id => {
    this.props.history.push("/Project/" + id);
  };
  state = {
    query: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.history.push("/search/" + this.state.query);
  };
  render() {
    const { Projects } = this.props.Project;
    return (
      <div>
        <br />
        <Container>
          <Col md={6}>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="Search" style={{ fontWeight: "bold" }}>
                  Search for a Project
                </Label>
                <Input
                  type="Text"
                  name="query"
                  id="query"
                  placeholder="Enter The Title of the Desired Project"
                  onChange={this.onChange}
                />
              </FormGroup>
            </Form>
          </Col>
          <Col sm={{ size: 6, order: 2, offset: 10 }}>
            {" "}
            <Button color="primary" onClick={this.addProject}>
              Add Project
            </Button>{" "}
          </Col>
          <br />
        </Container>
        <Container>
          {this.props.isAuthenticated ? (
            <TransitionGroup className="Projects">
              {Projects.map(({ _id, Title, description }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <Card body>
                    <CardText>
                      <h4 style={{ fontWeight: "bold" }}>Project Title</h4>
                      {Title}{" "}
                    </CardText>
                    <CardText>
                      <h4 style={{ fontWeight: "bold" }}>
                        Project Description
                      </h4>
                      {description}{" "}
                    </CardText>
                    <Button
                      color="info"
                      onClick={this.infoproject.bind(this, _id)}
                    >
                      Project Details
                    </Button>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times; Delete Project
                    </Button>
                  </Card>
                </CSSTransition>
              ))}
            </TransitionGroup>
          ) : null}
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Project: state.Project,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getProjects, deleteproject }
)(Projects);

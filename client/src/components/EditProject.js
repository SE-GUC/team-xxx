import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getProject, editProject } from "../actions/ProjectActions";
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
  Container,
  FormGroup,
  Form,
  Input
} from "reactstrap";

class Project extends Component {
  static propTypes = {
    getProject: PropTypes.func.isRequired,
    editProject: PropTypes.func.isRequired,
    Project: PropTypes.object.isRequired
  };
  state = {
    visible: false,
    description: this.props.defaultInputValue,
    effort: this.props.defaultInputValue,
    skills: this.props.defaultInputValue,
    experience: this.props.defaultInputValue
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      const ProjectEdit = {
        description: this.state.description,
        effort: this.state.effort,
        skills: this.state.skills,
        experience: this.state.experience
      };
      this.props.editProject(ProjectEdit, this.props.match.params.id);
      this.props.history.push("/Project/" + this.props.match.params.id);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.props.getProject(this.props.match.params.id);
  }

  render() {
    const { Projects } = this.props.Project;
    return (
      <div>
        <Container>
          <TransitionGroup className="Projects">
            <CSSTransition key={Projects._id} timeout={500} classNames="fade">
              <Card>
                <CardHeader tag="h3">{Projects.Title}</CardHeader>
                <CardBody>
                  <CardTitle />
                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                      <h5>Project Description</h5>
                      <Input
                        type="text"
                        name="description"
                        id="description"
                        defaultValue={Projects.description}
                        placeholder="Enter Project Description"
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <h5>Project Required Skills</h5>
                      <Input
                        type="text"
                        name="skills"
                        id="skills"
                        defaultValue={Projects.skills}
                        placeholder="Enter Project Required Skills"
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <h5>Project Required Effort</h5>
                      <Input
                        type="text"
                        name="effort"
                        id="effort"
                        defaultValue={Projects.effort}
                        placeholder="Enter Project Required Effort"
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <h5>Project Required Experience</h5>
                      <Input
                        type="text"
                        name="experience"
                        id="experience"
                        defaultValue={Projects.experience}
                        placeholder="Enter Project Required Experience"
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <Button>Submit</Button>
                  </Form>
                </CardBody>
                <CardFooter className="text-muted">
                  <CardText>
                    <div className="text-center">Project State</div>
                  </CardText>
                  <Progress multi>
                    <Progress bar value="20">
                      Pending
                    </Progress>
                    <Progress bar color="success" value="20">
                      Posted
                    </Progress>
                    <Progress bar color="warning" value="20">
                      Under Review
                    </Progress>
                    <Progress bar color="danger" value="20">
                      WIP
                    </Progress>
                    <Progress bar color="info" value="20">
                      Finished
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
  { getProject, editProject }
)(Project);

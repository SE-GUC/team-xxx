import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getProject, editProject } from "../actions/ProjectActions";
import { getConsultancys } from "../actions/ConsultancyActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  Progress,
  Container,
  FormGroup,
  Form,
  Input,
  Col,
  Label
} from "reactstrap";

class Project extends Component {
  static propTypes = {
    getProject: PropTypes.func.isRequired,
    editProject: PropTypes.func.isRequired,
    Project: PropTypes.object.isRequired,
    getConsultancys: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  state = {
    visible: false,
    description: this.props.defaultInputValue,
    effort: this.props.defaultInputValue,
    skills: this.props.defaultInputValue,
    duration: this.props.defaultInputValue,
    commitment: this.props.defaultInputValue,
    compensation: this.props.defaultInputValue,
    experience: this.props.defaultInputValue,
    category: this.props.defaultInputValue,
    state: this.props.defaultInputValue,
    extraInfo: this.props.defaultInputValue,
    consultancy: this.props.defaultInputValue,
    consultancyAcceptance: this.props.defaultInputValue,
    Consultant: this.props.defaultInputValue,
    statevalue: this.props.defaultInputValue
  };

  onChange2 = e => {
    this.setState({ [e.target.name]: e.target.value });
    // eslint-disable-next-line default-case
    switch (e.target.value) {
      case "Pending":
        this.setState({ statevalue: 20 });
        break;
      case "Posted":
        this.setState({ statevalue: 40 });
        break;
      case "Under Review":
        this.setState({ statevalue: 60 });
        break;
      case "WIP":
        this.setState({ statevalue: 80 });
        break;
      case "Finished":
        this.setState({ statevalue: 100 });
        break;
    }
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
        experience: this.state.experience,
        compensation: this.state.experience,
        commitment: this.state.experience,
        duration: this.state.experience,
        category: this.state.category,
        state: this.state.state,
        extraInfo: this.state.extraInfo,
        consultancy: this.state.consultancy,
        Consultant: this.state.Consultant,
        consultancyAcceptance: this.state.consultancyAcceptance,
        statevalue: this.state.statevalue
      };
      this.props.editProject(ProjectEdit, this.props.match.params.id);
      this.props.history.push("/Project/" + this.props.match.params.id);
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.props.getProject(this.props.match.params.id);
    this.props.getConsultancys();
  }

  render() {
    const { Projects } = this.props.Project;
    const { Consultancys } = this.props.Consultancy;
    return (
      <div>
        <Container>
          {" "}
          {this.props.isAuthenticated ? (
            <TransitionGroup className="Projects">
              <CSSTransition key={Projects._id} timeout={500} classNames="fade">
                <Card>
                  <CardHeader tag="h3">{Projects.Title}</CardHeader>
                  <CardBody>
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
                        <h5>Project Duration</h5>
                        <Input
                          type="text"
                          name="duration"
                          id="duration"
                          defaultValue={Projects.duration}
                          placeholder="Enter Project Duration"
                          onChange={this.onChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <h5>Project Required Commitment</h5>
                        <Input
                          type="text"
                          name="commitment"
                          id="commitment"
                          defaultValue={Projects.commitment}
                          placeholder="Enter Project Required Commitment"
                          onChange={this.onChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <h5>Project Required Compensation</h5>
                        <Input
                          type="text"
                          name="compensation"
                          id="compensation"
                          defaultValue={Projects.compensation}
                          placeholder="Enter Project Compensation"
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
                      <FormGroup>
                        <Label for="extraInfo">
                          <h5>Enter Any Extra Data</h5>
                        </Label>
                        <Input
                          type="textarea"
                          name="extraInfo"
                          id="extraInfo"
                          defaultValue={Projects.effort}
                          onChange={this.onChange}
                        />
                      </FormGroup>
                      <FormGroup row>
                        <Label for="category" sm={2}>
                          <h5>Select Category</h5>
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="select"
                            name="category"
                            id="category"
                            onChange={this.onChange}
                          >
                            <option value="NA">NA</option>
                            <option value="Admin Support">Admin Support</option>
                            <option value="Customer Service">
                              Customer Service
                            </option>
                            <option value="Sales & Marketing">
                              Sales & Marketing
                            </option>
                            <option value="Accounting & Consulting">
                              Accounting & Consulting
                            </option>
                            <option value="Legal">Legal</option>
                            <option value="Translation">Translation</option>
                            <option value="Writing">Writing</option>
                            <option value="Design & Creative">
                              Design & Creative
                            </option>
                            <option value="Engineering & Architecture">
                              Engineering & Architecture
                            </option>
                            <option value="Data Science & Analytics">
                              Data Science & Analytics
                            </option>
                            <option value="IT & Networking">
                              IT & Networking
                            </option>
                            <option value="Web, Mobile & Software Dev">
                              Web, Mobile & Software Dev
                            </option>
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="state" sm={2}>
                          <h5>Select Project Current State</h5>
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="select"
                            name="state"
                            id="state"
                            defaultValue={Projects.state}
                            onChange={this.onChange2}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Posted">Posted</option>
                            <option value="Under Review">Under Review</option>
                            <option value="WIP">WIP</option>
                            <option value="Finished">Finished</option>
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="state" sm={2}>
                          <h5> Need a Consultant?</h5>
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="select"
                            name="Consultant"
                            id="Consultant"
                            defaultValue={Projects.Consultant}
                            onChange={this.onChange}
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="NA">NA</option>
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="state" sm={2}>
                          <h5>Assign Consultant</h5>
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="select"
                            name="consultancy"
                            id="consultancy"
                            defaultValue={Projects.consultancy}
                            onChange={this.onChange}
                          >
                            {Consultancys.map(({ Name }) => (
                              <option value={Name}>{Name}</option>
                            ))}
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="state" sm={2}>
                          <h5>
                            {" "}
                            Do you Accept to be this Project Consultant ?
                          </h5>
                        </Label>
                        <br />
                        <Col sm={10}>
                          <Input
                            type="select"
                            name="consultancyAcceptance"
                            id="consultancyAcceptance"
                            defaultValue={Projects.consultancyAcceptance}
                            onChange={this.onChange}
                          >
                            <option value="Accept">Accept</option>
                            <option value="Decline">Decline</option>
                            <option value="NA">NA</option>
                          </Input>
                        </Col>
                      </FormGroup>
                      <Button>Submit</Button>
                    </Form>
                  </CardBody>
                  <CardFooter className="text-muted">
                    <CardText>
                      <div className="text-center">Project State</div>
                    </CardText>
                    <Progress multi>
                      <Progress
                        bar
                        defaultValue={Projects.statevalue}
                        max={100}
                      >
                        {Projects.state}
                      </Progress>
                    </Progress>
                  </CardFooter>
                </Card>
              </CSSTransition>
            </TransitionGroup>
          ) : null}
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Project: state.Project,
  Consultancy: state.Consultancy,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getProject, editProject, getConsultancys }
)(Project);

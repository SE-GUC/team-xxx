import {
  Col,
  Button,
  Form,
  FormGroup,
  Badge,
  Label,
  Input,
  Alert
} from "reactstrap";
import { addProject } from "../actions/ProjectActions";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import LoginModal from "./auth/LoginModal";
import React from "react";
import PropTypes from "prop-types";
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.onDismiss = this.onDismiss.bind(this);
  }
  static propTypes = {
    addProject: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  onDismiss() {
    this.setState({ visible: false });
  }
  onshow() {
    this.setState({ visible: true });
  }
  state = {
    visible: false,
    Title: "",
    description: "",
    effort: "",
    duration: "",
    commitment: "",
    experience: "",
    category: "",
    extraInfo: "",
    Consultant: "NA",
    skills: [""],
    compensation: "",
    partner: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newProject = {
      Title: this.state.Title,
      description: this.state.description,
      effort: this.state.effort,
      commitment: this.state.commitment,
      experience: this.state.experience,
      category: this.state.category,
      duration: this.state.duration,
      extraInfo: this.state.extraInfo,
      Consultant: this.state.Consultant,
      skills: this.state.skills,
      compensation: this.state.compensation,
      partner: this.state.partner
    };
    // Add Project via addProject action
    this.props.addProject(newProject);
    this.onshow();
  };
  render() {
    return (
      <Container>
        <br />
        {this.props.isAuthenticated ? (
          <Form onSubmit={this.onSubmit}>
            <Alert
              color="info"
              isOpen={this.state.visible}
              toggle={this.onDismiss}
            >
              Your project is created successfully
            </Alert>
            <FormGroup row>
              <Label for="Title" sm={2}>
                <h5> Project Title</h5>
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Title"
                  id="Title"
                  placeholder="Enter The Project Title"
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Title" sm={2}>
                <h5> Project Required Skills</h5>
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="skills"
                  id="skills"
                  placeholder="Enter The Project required skills"
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Title" sm={2}>
                <h5> Project Compensation</h5>
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="compensation"
                  id="compensation"
                  placeholder="Enter The Project Compensation"
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Title" sm={2}>
                <h5> Project Partner</h5>
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="partner"
                  id="partner"
                  placeholder="Enter The Project partner"
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={2}>
                <h5> Project Description</h5>
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Enter The Project Description"
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="effort" sm={2}>
                <h5> Estimated Effort</h5>
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="effort"
                  id="effort"
                  placeholder="Enter The Project Estimated Effort"
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="experience" sm={2}>
                <h5> Experience </h5>
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="experience"
                  id="experience"
                  placeholder="Enter The Project Required Experience"
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="commitment" sm={2}>
                <h5> Commitment </h5>
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="commitment"
                  id="commitment"
                  placeholder="Enter The Project Required Commitment"
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="duration" sm={2}>
                <h5>Project Duration </h5>
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="duration"
                  id="duration"
                  placeholder="Enter The Project Duration"
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="extraInfo">
                <h5>Enter Any Extra Data</h5>
              </Label>
              <Input
                type="textarea"
                name="extraInfo"
                id="extraInfo"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup row>
              <Label for="category" sm={2}>
                <h5> Select Category</h5>
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
                  <option value="Customer Service">Customer Service</option>
                  <option value="Sales & Marketing">Sales & Marketing</option>
                  <option value="Accounting & Consulting">
                    Accounting & Consulting
                  </option>
                  <option value="Legal">Legal</option>
                  <option value="Translation">Translation</option>
                  <option value="Writing">Writing</option>
                  <option value="Design & Creative">Design & Creative</option>
                  <option value="Engineering & Architecture">
                    Engineering & Architecture
                  </option>
                  <option value="Data Science & Analytics">
                    Data Science & Analytics
                  </option>
                  <option value="IT & Networking">IT & Networking</option>
                  <option value="Web, Mobile & Software Dev">
                    Web, Mobile & Software Dev
                  </option>
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
                  defaultValue={"NA"}
                  onChange={this.onChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="NA">NA</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 5 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
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
    );
  }
}
const mapStateToProps = state => ({
  Project: state.Project,
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { addProject }
)(Example);

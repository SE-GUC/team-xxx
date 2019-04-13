import { Col, Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { addProject } from "../actions/ProjectActions";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import React from "react";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.onDismiss = this.onDismiss.bind(this);
  }
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
    category: ""
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
      duration: this.state.duration
    };
    // Add Project via addProject action
    this.props.addProject(newProject);
    this.onshow();
  };
  render() {
    return (
      <Container>
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
              Project Title
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
            <Label for="description" sm={2}>
              Project Description
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
              Estimated Effort
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
              Experience
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
              Commitment
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
              Project Duration
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
          <FormGroup row>
            <Label for="category" sm={2}>
              Select Category
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
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 5 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  Project: state.Project
});
export default connect(
  mapStateToProps,
  { addProject }
)(Example);

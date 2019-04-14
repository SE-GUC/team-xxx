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
    effort: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newProject = {
      Title: this.state.Title,
      description: this.state.description,
      effort: this.state.effort
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

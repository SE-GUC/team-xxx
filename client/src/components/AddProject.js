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
    Title: "  ",
    description: "  ",
    partner: "  ",
    Consultant:" ",
    consultancy: " ", 
    consultantRandom: " ",
    detaileddescription: "  ",
    detailedplan:"  "
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try{
    e.preventDefault();
    const newProject = {
      Title: this.state.Title,
      description: this.state.description,
      partner: this.state.partner,
      Consultant: this.state.Consultant,
      consultancy: this.state.consultancy,
      consultantRandom: this.state.consultantRandom,
      detaileddescription: this.state.detaileddescription,
      detailedplan: this.state.detailedplan
    };
    // Add Project via addProject action
    this.props.addProject(newProject);
    this.onshow();
  }
  catch (err) {
    console.log(err);}
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
            <Label for="partner" sm={2}>
              Partner name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="partner"
                id="partner"
                placeholder="Please enter the partner's name"
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="detailedplan" sm={2}>
             Detailed Plan
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="detailedplan"
                id="detailedplan"
                placeholder="Please enter a detailed plan for the project"
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
         <FormGroup row>
            <Label for="Consultant" sm={2}>
              Want a Consultant
            </Label>
            <Col sm={10}>
              <Input
                type="checkbox"
                name="Consultant"
                id="Consultant"
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for=" consultantRandom" sm={2}>
              Want a specific Consultant
            </Label>
            <Col sm={10}>
              <Input
                type="checkbox"
                name=" consultantRandom"
                id=" consultantRandom"
               
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="consultancy" sm={2}>
              Consultant name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="consultancy"
                id="consultancy"
                placeholder="Please specify the consultant you want"
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="detaileddescription" sm={2}>
              Detailed description
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="detaileddescription"
                id="detaileddescription"
                placeholder="Please enter a detailed description of the project"
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
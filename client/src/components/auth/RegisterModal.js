import { clearErrors } from "../../actions/errorActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
  TabContent,
  TabPane,
  NavItem,
  Nav
} from "reactstrap";
import {
  register,
  registerpartner,
  registerMember,
  registerConsultancy
} from "../../actions/authActions";

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  state = {
    modal: false,
    Name: "",
    Email: "",
    Password: "",
    msg: null,
    business: "",
    partners: "",
    boardmembers: "",
    events: "",
    field: "",
    projects: "",
    feedback: "",
    reports: "",
    age: "",
    skills: "",
    interests: "",
    tasks: "",
    reviews: "",
    masterclasses: ""
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    registerpartner: PropTypes.func.isRequired,
    registerMember: PropTypes.func.isRequired,
    registerConsultancy: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { Name, Email, Password } = this.state;
    // Create Admin object
    const newAdmin = {
      Name,
      Email,
      Password
    };
    // Attempt to register
    this.props.register(newAdmin);
  };
  onSubmit2 = e => {
    e.preventDefault();
    const {
      Name,
      Email,
      Password,
      business,
      partners,
      boardmembers,
      events,
      field,
      projects,
      feedback
    } = this.state;
    // Create Admin object
    const newPartner = {
      Name,
      Email,
      Password,
      business,
      partners,
      boardmembers,
      events,
      field,
      projects,
      feedback
    };
    // Attempt to register
    this.props.registerpartner(newPartner);
  };
  onSubmit3 = e => {
    e.preventDefault();
    const {
      Name,
      Email,
      Password,
      age,
      skills,
      interests,
      events,
      tasks,
      reviews,
      masterclasses
    } = this.state;
    // Create Member object
    const newMember = {
      Name,
      Email,
      Password,
      age,
      skills,
      interests,
      events,
      tasks,
      reviews,
      masterclasses
    };
    // Attempt to register
    this.props.registerMember(newMember);
  };
  onSubmit4 = e => {
    e.preventDefault();
    const {
      Name,
      Email,
      Password,
      business,
      partners,
      boardmembers,
      events,
      reports
    } = this.state;
    // Create Consultancy object
    const newConsultancy = {
      Name,
      Email,
      Password,
      business,
      partners,
      boardmembers,
      events,
      reports
    };
    // Attempt to register
    this.props.registerConsultancy(newConsultancy);
  };
  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href="#">
          Register
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {" "}
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggleTab("1");
                  }}
                >
                  As Admin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggleTab("2");
                  }}
                >
                  As Partner
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "3"
                  })}
                  onClick={() => {
                    this.toggleTab("3");
                  }}
                >
                  As Member
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "4"
                  })}
                  onClick={() => {
                    this.toggleTab("4");
                  }}
                >
                  As Consultant
                </NavLink>
              </NavItem>
            </Nav>
          </ModalHeader>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <ModalBody>
                {this.state.msg ? (
                  <Alert color="danger">{this.state.msg}</Alert>
                ) : null}
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Name"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="Email"
                      id="Email"
                      placeholder="Email"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="Password"
                      id="Password"
                      placeholder="Password"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Button color="dark" style={{ marginTop: "2rem" }} block>
                      Register
                    </Button>
                  </FormGroup>
                </Form>
              </ModalBody>{" "}
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="2">
              <ModalBody>
                {this.state.msg ? (
                  <Alert color="danger">{this.state.msg}</Alert>
                ) : null}
                <Form onSubmit={this.onSubmit2}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Name"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="Email"
                      id="Email"
                      placeholder="Email"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="Password"
                      id="Password"
                      placeholder="Password"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="business">Business</Label>
                    <Input
                      type="text"
                      name="business"
                      id="business"
                      placeholder="Business"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="partners">partners</Label>
                    <Input
                      type="text"
                      name="partners"
                      id="partners"
                      placeholder="Partners"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="boardmembers">Board Members</Label>
                    <Input
                      type="text"
                      name="boardmembers"
                      id="boardmembers"
                      placeholder="Board Members"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="password">Events</Label>
                    <Input
                      type="text"
                      name="events"
                      id="events"
                      placeholder="Events"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="password">Business Field</Label>
                    <Input
                      type="text"
                      name="field"
                      id="field"
                      placeholder="Business Field"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="projects">Projects</Label>
                    <Input
                      type="text"
                      name="projects"
                      id="projects"
                      placeholder="Projects"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="feedback">Feedback</Label>
                    <Input
                      type="text"
                      name="feedback"
                      id="feedback"
                      placeholder="Feedback"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Button color="dark" style={{ marginTop: "2rem" }} block>
                      Register
                    </Button>
                  </FormGroup>
                </Form>
              </ModalBody>{" "}
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="3">
              <ModalBody>
                {this.state.msg ? (
                  <Alert color="danger">{this.state.msg}</Alert>
                ) : null}
                <Form onSubmit={this.onSubmit3}>
                  <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Name"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="Email">Email</Label>
                    <Input
                      type="email"
                      name="Email"
                      id="Email"
                      placeholder="Email"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="Password">Password</Label>
                    <Input
                      type="password"
                      name="Password"
                      id="Password"
                      placeholder="Password"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="age">Age</Label>
                    <Input
                      type="number"
                      name="age"
                      id="age"
                      placeholder="Age"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="Skills">Skills</Label>
                    <Input
                      type="text"
                      name="skills"
                      id="skills"
                      placeholder="Skills"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="Interests">Interests</Label>
                    <Input
                      type="text"
                      name="interests"
                      id="interests"
                      placeholder="Interests"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="events">Events</Label>
                    <Input
                      type="text"
                      name="events"
                      id="events"
                      placeholder="Events"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="tasks">Projects</Label>
                    <Input
                      type="text"
                      name="tasks"
                      id="tasks"
                      placeholder="Projects"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="reviews">Reviews</Label>
                    <Input
                      type="text"
                      name="reviews"
                      id="reviews"
                      placeholder="Reviews"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="masterclasses">Master Classes</Label>
                    <Input
                      type="text"
                      name="masterclasses"
                      id="masterclasses"
                      placeholder="Master Classes"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Button color="dark" style={{ marginTop: "2rem" }} block>
                      Register
                    </Button>
                  </FormGroup>
                </Form>
              </ModalBody>{" "}
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="4">
              <ModalBody>
                {this.state.msg ? (
                  <Alert color="danger">{this.state.msg}</Alert>
                ) : null}
                <Form onSubmit={this.onSubmit4}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Name"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="Email"
                      id="Email"
                      placeholder="Email"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="Password"
                      id="Password"
                      placeholder="Password"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="business">Business</Label>
                    <Input
                      type="text"
                      name="business"
                      id="business"
                      placeholder="Business"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="partners">partners</Label>
                    <Input
                      type="text"
                      name="partners"
                      id="partners"
                      placeholder="Partners"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="boardmembers">Board Members</Label>
                    <Input
                      type="text"
                      name="boardmembers"
                      id="boardmembers"
                      placeholder="Board Members"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="password">Events</Label>
                    <Input
                      type="text"
                      name="events"
                      id="events"
                      placeholder="Events"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Label for="Reports">Reports</Label>
                    <Input
                      type="text"
                      name="reports"
                      id="reports"
                      placeholder="Reports"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <Button color="dark" style={{ marginTop: "2rem" }} block>
                      Register
                    </Button>
                  </FormGroup>
                </Form>
              </ModalBody>{" "}
            </TabPane>
          </TabContent>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  {
    register,
    clearErrors,
    registerpartner,
    registerMember,
    registerConsultancy
  }
)(RegisterModal);

import React, { Component } from "react";
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
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, loginpartner } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import classnames from "classnames";
class LoginModal extends Component {
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
    Email: "",
    Password: "",
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    loginpartner: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "LOGIN_FAIL") {
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
    const { Email, Password } = this.state;
    const admin = {
      Email,
      Password
    };
    // Attempt to login
    this.props.login(admin);
  };
  onSubmit2 = e => {
    e.preventDefault();
    const { Email, Password } = this.state;
    const admin = {
      Email,
      Password
    };
    // Attempt to login
    this.props.loginpartner(admin);
  };

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href="#">
          Login
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size={"lg"}>
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
                    <Label for="email">Email</Label>
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
                    <Button color="dark" style={{ marginTop: "2rem" }} block>
                      Login
                    </Button>
                  </FormGroup>
                </Form>
              </ModalBody>
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
                    <Label for="email">Email</Label>
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
                    <Button color="dark" style={{ marginTop: "2rem" }} block>
                      Login
                    </Button>
                  </FormGroup>
                </Form>
              </ModalBody>
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="3">
              <ModalBody>
                {this.state.msg ? (
                  <Alert color="danger">{this.state.msg}</Alert>
                ) : null}
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Label for="email">Email</Label>
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
                    <Button color="dark" style={{ marginTop: "2rem" }} block>
                      Login
                    </Button>
                  </FormGroup>
                </Form>
              </ModalBody>
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="4">
              <ModalBody>
                {this.state.msg ? (
                  <Alert color="danger">{this.state.msg}</Alert>
                ) : null}
                <Form onSubmit={this.onSubmit2}>
                  <FormGroup>
                    <Label for="email">Email</Label>
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
                    <Button color="dark" style={{ marginTop: "2rem" }} block>
                      Login
                    </Button>
                  </FormGroup>
                </Form>
              </ModalBody>
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
  { login, clearErrors, loginpartner }
)(LoginModal);

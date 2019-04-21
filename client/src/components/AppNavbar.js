import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
class AppNavbar extends Component {
  state = {
    isOpen: false
  };
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const {
      isAuthenticated,
      admin,
      partner,
      member,
      consultancy
    } = this.props.auth;
    const authLinks = (
      <Fragment>
        <DropdownItem>
          <strong>{admin ? `Welcome ${admin.Name}` : ""}</strong>
          <strong>{partner ? `Welcome ${partner.Name}` : ""}</strong>
          <strong>{member ? `Welcome ${member.Name}` : ""}</strong>
          <strong>{consultancy ? `Welcome ${consultancy.Name}` : ""}</strong>
        </DropdownItem>
        <DropdownItem>
          <Logout />
        </DropdownItem>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <DropdownItem>
          <RegisterModal />
        </DropdownItem>
        <DropdownItem>
          <LoginModal />
        </DropdownItem>
      </Fragment>
    );
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-6">
          <Container>
            <NavbarBrand href="/home">Lirten Hub</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/Projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Lifecoach">Life Coach</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/SE-GUC/team-xxx">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    {" "}
                    <NavLink href="/Profile">Profile</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    {" "}
                    <NavLink href="/Notification">Notifications</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  {isAuthenticated ? authLinks : guestLinks}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);

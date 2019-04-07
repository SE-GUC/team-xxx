import React, { Component } from "react";
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

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
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
                    <NavLink href="/Notifications">Notifications</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Log Out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;

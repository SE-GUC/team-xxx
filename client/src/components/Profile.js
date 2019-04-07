import React, { Component } from "react";
import { Button } from "reactstrap";

export default class Profile extends Component {
  infopartners = () => {
    this.props.history.push("/Partners");
  };
  infoconsultancys = () => {
    this.props.history.push("/Consultancys");
  };
  infoMembers = () => {
    this.props.history.push("/Members");
  };
  render() {
    return (
      <div>
        <Button color="info" onClick={this.infopartners}>
          Partners
        </Button>
        <Button color="info" onClick={this.infoconsultancys}>
          Consultancys
        </Button>
        <Button color="info" onClick={this.infoMembers}>
          Members
        </Button>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Button } from 'reactstrap';


export default class Profile extends Component {
  infopartners = () => {
    this.props.history.push("/Partners");
  };
  infoconsultancys = () => {
    this.props.history.push("/Consultancys");
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
      </div>
    );
  }
}

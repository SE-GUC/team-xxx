import React, { Component } from "react";
import NotificationsCard from "./NotificationsCard";
import { Container, Row, Col, Button } from "reactstrap";
export default class home extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "David Davidson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        },
        {
          id: 2,
          name: "Mark Markson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        },
        {
          id: 3,
          name: "Judy Judyson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        },
        {
          id: 4,
          name: "James Jameson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        }
      ]
    };
  }

  removePerson(id) {
    this.setState({
      people: this.state.people.filter(person => person.id !== id)
    });
  }

  render() {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="10">
          <NotificationsCard
            key={person.id}
            removePerson={this.removePerson.bind(this)}
            person={person}
          />
        </Col>
      );
    });
    return (
      <div>
        <Container>
          <Row>{peopleCards}</Row>{" "}
        </Container>
      </div>
    );
  }
}

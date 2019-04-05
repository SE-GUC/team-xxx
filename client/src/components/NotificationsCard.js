import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const Example = props => {
  return (
    <Card body outline color="danger">
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button color="danger">Delete</Button>{" "}
    </Card>
  );
};

export default Example;

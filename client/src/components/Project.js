import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Progress
} from "reactstrap";
import { Container } from "react-bootstrap";

const Example = props => {
  return (
    <Container>
      <div>
        <Card>
          <CardHeader tag="h3">Featured</CardHeader>
          <CardBody>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <CardText>
              <div className="text-center">Various (40) of 55</div>
              <Progress multi>
                <Progress bar value="5" max={55}>
                  5
                </Progress>
                <Progress bar color="success" value="15" max={55}>
                  15
                </Progress>
                <Progress bar color="warning" value="10" max={55}>
                  10
                </Progress>
                <Progress bar color="danger" value="10" max={55}>
                  10
                </Progress>
              </Progress>
            </CardText>
            <Button>Go somewhere</Button>
          </CardBody>
          <CardFooter className="text-muted">Footer</CardFooter>
        </Card>
      </div>
    </Container>
  );
};

export default Example;

import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Progress,
  Row,
  Col
} from "reactstrap";
import { Container } from "react-bootstrap";

const Example = props => {
  return (
    <Container>
      <div>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 10 }}>
            {" "}
            <Button color="primary">Edit Project</Button>{" "}
          </Col>
        </Row>
        <br />
        <Card>
          <CardHeader tag="h3">Featured</CardHeader>
          <CardBody>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <CardText>
              <div className="text-center">Project State</div>
              <br />
              <Progress multi>
                <Progress bar value="20" max={55}>
                  Pending
                </Progress>
                <Progress bar color="success" value="20" max={55}>
                  Posted
                </Progress>
                <Progress bar color="warning" value="20" max={55}>
                  Under Review
                </Progress>
                <Progress bar color="danger" value="20" max={55}>
                  WIP
                </Progress>
                <Progress bar color="info" value="20" max={55}>
                  Finished
                </Progress>
              </Progress>
            </CardText>
          </CardBody>
          <CardFooter className="text-muted">Footer</CardFooter>
        </Card>
      </div>
    </Container>
  );
};

export default Example;

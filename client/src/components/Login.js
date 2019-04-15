import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const FormPage = () => {
  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <form>
            <p className="h4 text-center mb-4">Sign in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              <Button type="submit">Login</Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormPage;

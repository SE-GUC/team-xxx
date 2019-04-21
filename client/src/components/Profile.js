import React from "react";
import LoginModal from "./auth/LoginModal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Badge, Container } from "reactstrap";
class Profile extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  render() {
    return (
      <Container>
        {this.props.isAuthenticated ? (
          <Container> </Container>
        ) : (
          <h4 className="mb-3 ml-4">
            Please{"  "}
            <Badge color="light">
              <LoginModal />
            </Badge>
            {"  "}
            to manage{"  "}
          </h4>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(Profile);

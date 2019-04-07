import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getMembers, deleteMember } from "../actions/MemberAction";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Badge,
  CardTitle,
  CardText
} from "reactstrap";

class Members extends Component {
  static propTypes = {
    getMembers: PropTypes.func.isRequired,
    deleteMember: PropTypes.func.isRequired,
    Member: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getMembers();
  }
 
  onDeleteClick = id => {
    this.props.deleteMember(id);
  };
  
  render() {
    const { Members } = this.props.Member;
    return (
      <div>
        <Container>
          
          <br />
          <TransitionGroup className="shopping-list">
            {Members.map(({ _id, name,Email }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Row>
                  <Col sm="12">
                    <Card body>
                      <CardTitle>
                        <h1>
                          <Badge color="success">({name})</Badge>
                        </h1>
                      </CardTitle>
                      <CardText>({Email})</CardText>
                      <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times; Delete Member
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
 Member: state.Member
});

export default connect(
  mapStateToProps,
  { getMembers,deleteMember }
)(Members);
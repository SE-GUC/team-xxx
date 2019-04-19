import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getMembers } from "../actions/MemberActions";
import { getPartners } from "../actions/PartnersActions";
import { getAdmins } from "../actions/AdminActions";
import { getConsultancys } from "../actions/ConsultancyActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Notifications extends Component {
  static propTypes = {
    getMembers: PropTypes.func.isRequired,
    getPartners: PropTypes.func.isRequired,
    Member: PropTypes.object.isRequired,
    Partner: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getMembers();
    this.props.getPartners();
    this.props.getConsultancys();
    this.props.getAdmins();
  }

  render() {
    const { Members } = this.props.Member;
    const { Partners } = this.props.Partner;
    const { Consultancys } = this.props.Consultancy;
    const { Admins } = this.props.Admin;
    return (
      <Container>
        <br />
        <ListGroup>
          {" "}
          {this.props.isAuthenticated ? (
            <TransitionGroup className="shopping-list">
              {Members.map(({ _id, Notifications }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem>{Notifications}</ListGroupItem>
                </CSSTransition>
              ))}
              {Partners.map(({ _id, Notifications }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem>{Notifications}</ListGroupItem>
                </CSSTransition>
              ))}
              {Consultancys.map(({ _id, Notifications }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem>{Notifications}</ListGroupItem>
                </CSSTransition>
              ))}
              {Admins.map(({ _id, Notifications }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem>{Notifications}</ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          ) : null}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  Member: state.Member,
  Partner: state.Partner,
  Consultancy: state.Consultancy,
  Admin: state.Admin,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getMembers, getPartners, getAdmins, getConsultancys }
)(Notifications);

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getlifecoachmembers } from "../actions/MemberActions";
import { getlifecoachconsultancys } from "../actions/ConsultancyActions";
import { getlifecoachpartners } from "../actions/PartnersActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardColumns,
  Container
} from "reactstrap";

class Lifecoach extends Component {
  static propTypes = {
    getlifecoachmembers: PropTypes.func.isRequired,
    Member: PropTypes.object.isRequired,
    getlifecoachconsultancys: PropTypes.func.isRequired,
    Consultancy: PropTypes.object.isRequired,
    getlifecoachpartners: PropTypes.func.isRequired,
    Partner: PropTypes.object.isRequired
  };
  infoproject = id => {
    this.props.history.push("/Booking/" + id);
  };
  componentDidMount() {
    this.props.getlifecoachmembers();
    this.props.getlifecoachpartners();
    this.props.getlifecoachconsultancys();
  }
  render() {
    const { Members } = this.props.Member;
    const { Partners } = this.props.Partner;
    const { Consultancys } = this.props.Consultancy;
    return (
      <Container>
        <CardColumns>
          <TransitionGroup className="Members">
            {Members.map(({ _id, Email }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://i.pinimg.com/originals/18/47/ca/1847caef4e19d6e5e4e8fdb2e793dffb.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{Email}</CardTitle>
                    <CardSubtitle>{Email}</CardSubtitle>
                    <CardText>{Email}</CardText>
                    <Button
                      color="info"
                      onClick={this.infoproject.bind(this, _id)}
                    >
                      Book
                    </Button>
                  </CardBody>
                </Card>
              </CSSTransition>
            ))}
          </TransitionGroup>
          <TransitionGroup className="Partners">
            {Partners.map(({ _id, Email }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJoJ2t1fd07gef02ORWPUw_vTy86AXXL9etdk562l2hxc3RNm2Q"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{Email}</CardTitle>
                    <CardSubtitle>{Email}</CardSubtitle>
                    <CardText>{Email}</CardText>
                    <Button
                      color="info"
                      onClick={this.infoproject.bind(this, _id)}
                    >
                      Book
                    </Button>
                  </CardBody>
                </Card>
              </CSSTransition>
            ))}
          </TransitionGroup>
          <TransitionGroup className="Consultancys">
            {Consultancys.map(({ _id, Email }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="http://www.lgfgfashionhouse.com/wp-content/uploads/2015/10/tumblr_inline_nwzvqylS7E1rg11t7_540.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{Email}</CardTitle>
                    <CardSubtitle>{Email}</CardSubtitle>
                    <CardText>{Email}</CardText>
                    <Button
                      color="info"
                      onClick={this.infoproject.bind(this, _id)}
                    >
                      Book
                    </Button>
                  </CardBody>
                </Card>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </CardColumns>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  Member: state.Member,
  Partner: state.Partner,
  Consultancy: state.Consultancy
});

export default connect(
  mapStateToProps,
  { getlifecoachmembers, getlifecoachconsultancys, getlifecoachpartners }
)(Lifecoach);

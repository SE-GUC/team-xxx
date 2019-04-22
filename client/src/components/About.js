import React from "react";
import { SocialIcon } from "react-social-icons";
import YouTube from "react-youtube";
import Carousel2 from "./Carousel2";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  Jumbotron,
  Container,
  Col,
  Row,
  Collapse,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Breadcrumb,
  BreadcrumbItem,
  ModalFooter
} from "reactstrap";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
    this.toggle = this.toggle.bind(this);
    this.status = {
      modal: false,
      modal2: false,
      modal3: false
    };

    this.popUp = this.popUp.bind(this);
    this.popUp2 = this.popUp2.bind(this);
    this.popUp3 = this.popUp3.bind(this);

  }

  popUp() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  popUp2() {
    this.setState(prevState => ({
      modal2: !prevState.modal2
    }));
  };
  popUp3() {
    this.setState(prevState => ({
      modal3: !prevState.modal3
    }));
  };
  

  projectTour = () => {
    this.props.history.push("/Projects/");
  };
  lifecoachesTour = () => {
    this.props.history.push("/LifeCoach/");
  };
  githubTour = () => {
    this.props.history.push("https://github.com/SE-GUC/team-xxx");
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-3">About Us!</h1>
          <p className="lead">
            We are simply Freelancers Website trying to reach each and everyone
            with the easiest way.
          </p>
          <hr className="my-2" />
          <p>
            You can take all the classes you want at anytime, the more courses
            you take the more experience you will have!
          </p>
          <p className="lead" />
        </Jumbotron>

        <Carousel2 />

        <CardDeck>
          <Card
            body
            inverse
            style={{ backgroundColor: "#e5e8e8", borderColor: "#333" }}
          >
            <CardBody>
              <CardTitle style={{ color: "black" }}>
                <h5 className="display-5">Projects</h5>
              </CardTitle>
              <CardText style={{ color: "black" }}>
                You can find all types of projects that you want. In addition,
                you can add any project you want.
              </CardText>
              <Button onClick={this.projectTour}>Have a look!</Button>
            </CardBody>
          </Card>
          <Card
            body
            inverse
            style={{ backgroundColor: "#e5e8e8", borderColor: "#333" }}
          >
            <CardBody>
              <CardTitle style={{ color: "black" }}>
                <h5 className="display-5">Lifecoach</h5>
              </CardTitle>
              <CardText style={{ color: "black" }}>
                They can help you reach your goals by giving you all the lessons
                you want
              </CardText>
              <Button onClick={this.lifecoachesTour}>Take a tour!</Button>
            </CardBody>
          </Card>
          <Card
            body
            inverse
            style={{ backgroundColor: "#e5e8e8", borderColor: "#333" }}
          >
            <CardBody>
              <CardTitle style={{ color: "black" }}>
                <h5 className="display-5">Github</h5>
              </CardTitle>
              <CardText style={{ color: "black" }}>
                You can check all the project through the below button.
              </CardText>
              <Button onClick={this.githubTour}>Check it out!</Button>
            </CardBody>
          </Card>
        </CardDeck>

        <Card body inverse style={{ backgroundColor: "white" }}>
          <CardTitle style={{ color: "grey" }}>
            <h5 className="display-4"> The Vision</h5>
          </CardTitle>

          <CardBody style={{ color: "grey" }}>
            Technology is reforming the way work gets done so radically that all
            business domains are changing. All aspects of the professional work
            environment is rapidly evolving from workflow, processes and the
            very structure of organ- izations. Startups, with their creative
            ability to innovate, are competing and defeating major enterprises.
            Hence, itʼs no surprise this is called the disrup- tive era.
          </CardBody>

          <CardBody style={{ color: "grey" }}>
            A considerable number of enterprises are just selling their
            establishment and the facade of a strong grip. Theyʼre charging
            premium because they can, not because of the quality they produce.
            Pair that with the disruption caused by the changing economy, one
            can understand why enterprises are trying to change they way they
            operate. The are trying their best to attract talent as their need
            for innovative talent is higher than ever.
          </CardBody>

          <CardBody style={{ color: "grey" }}>
            The problem enterprises are facing is that they are unable to
            attract talent. Enterprises are also facing a hard time keeping
            their talented employees from leaving, specially the young
            change-enthusiasts. The bureaucracy, rou- tine, non-ending lists of
            rules, unfair distribution of revenues and constraints are just the
            tip of the iceberg. In this day and age, the market is changing more
            rapidly than ever, and the talent demand is changing even faster.
            Highly creative people are increasingly refusing the traditional
            ”work as usual” life- style.
          </CardBody>

          <Button color="secondary" onClick={this.toggle}>
            Read More!
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <CardBody style={{ color: "grey" }}>
              This talent acquisition crisis that is addressed globally urged
              the enterpris- es to go further than they have ever went in trying
              to find a solution. Their salvation, they think, is Digital
              Transformation, one of the most trending buzzwords in the business
              world nowadays. Digital Transformation push- es enterprises in all
              domains to restructure themselves, their hierarchy and work-flow
              with to embracing the agile behavior, creating a more attractive
              work environment for highly talented people.
            </CardBody>

            <CardBody style={{ color: "grey" }}>
              Finally, even in this digital age,enterprises are just using a
              fraction of itʼs full potential. Companies are not making use of
              people available with their minds and talents, but not physically.
              The number of freelancers and digital nomads is increasing more
              than ever. Nevertheless, their presence in the traditional
              work-place to help and aid enterprises is much lower than it could
              be. Worse comes to worst when we notice that there is a massive
              availability of highly-talented, highly-motivated,
              extremely-creative and qualified work force that is neglected.
              Copyright © 2019 Lirten Inc. All Rights Reserved
            </CardBody>

            <CardBody style={{ color: "grey" }}>
              This neglected workforce is simply none other than university
              students. Students are more than able to deliver and produce given
              a chance. Even more, those who didnʼt suffer the suffocation of a
              traditional office job tend to be more creative with their
              approaches and their problem solving abil- ities. So, enterprises
              and companies are as eager as ever to attract talent, change the
              way they operate and be more imaginative. And, we have a huge
              neglected work force that can create, work, produce yet theyʼre
              not given a chance. Finally, we have multi-talented creative
              people that prefer not to be constrained and they like the
              flexibility of freelancing. See the problem? At Lirten, we believe
              in students. We once were students. We know what students can do
              given a chance. We believe in freedom. We believe that the best
              set of rules is the minimal set of rules. You might think we want
              to fight well established organizations. On the contrary, We want
              to help them. Our ”help” comes through unlocking an unused
              potential that when directed correctly can only spark an economic
              growth that will benefit the entirety of the society.
            </CardBody>

            <CardBody style={{ color: "grey" }}>
              Shared economy and crowdsourcing are reshaping the economy as we
              know it. Look at Uber and Airbnb and how they disrupted age-old
              business mod- els. LirtenHub is trying to play the role of a
              platform connecting people who need work to get done, with the
              talent that can get it done.
            </CardBody>

            <CardBody style={{ color: "grey" }}>
              Isn’t that just any freelancing website? Well, there is a catch.
              trying to over- come the mess in the freelancing wolrd today. You
              see, traditionally if some company wanted to outsource, they would
              just post a description of a task and someone might do it or not.
              There were no guarantees and the alloca- tion of tasks followed a
              sub-optimal procedure. LirtenHub aims to solve the missing piece
              of the puzzle. LirtenHub introduces the solution by resolving the
              traditional operation to itʼs fundamental constituents.
            </CardBody>

            <CardBody style={{ color: "grey" }}>
              Workforce, expertise,infrastructure and management. The idea is to
              dynam- ically and on demand assign, consult, allocate and oversee
              a required task throughout itʼs execution. The entity with a task,
              a well-suited candidate for the task and finally the consultancy.
              Consultancies will allow companies to be sure that their tasks
              will be fulfilled. Also, will help people choose the right tasks
              that they can perform given their abilities. Because in Lirten we
              believe that motivation and talent run supreme.
            </CardBody>

            <CardBody style={{ color: "grey" }}>
              Our vision is to give a chance to those who wish to contribute but
              are not given a chance, to empower and teach those who want to
              better their fu- tures and finally to solve the mess of the
              freelancing world.
            </CardBody>

            <CardBody style={{ color: "grey" }}>
              Hence, the idea of our platform could be viewed as a way to change
              how work gets done.
            </CardBody>
          </Collapse>
        </Card>

        <Jumbotron style={{ backgroundColor: "#e5e8e8", borderColor: "#333" }}>
          <Row sm={{ size: 6, offset: 4 }}>
            <Col sm={{ size: 6, offset: 4 }}>
              <SocialIcon url="http://twitter.com/jaketrent" />{" "}
              <SocialIcon url="https://www.facebook.com/GUC.Official/" />{" "}
              <SocialIcon url="https://www.instagram.com" />{" "}
              <SocialIcon url="https://github.com/SE-GUC/team-xxx" />{" "}
              <SocialIcon url="https://www.youtube.com/user/GUCnews/featured" />{" "}
              <SocialIcon url="https://www.linkedin.com" />{" "}
            </Col>
          </Row>

          <Row>
            <Col sm={{ size: 6, offset: 4 }}>
              <ButtonGroup>
                <Button color="link" onClick={this.popUp}>
                  {this.props.buttonLabel}
                 Contact Us
                </Button>
                <Modal
                  isOpen={this.state.modal}
                  popUp={this.popUp}
                  className={this.props.className}
                >
                  <ModalHeader popUp={this.popUp}>Contact Us</ModalHeader>
                  <ModalBody>
                    SCRUM MASTER: 012981717291
                  </ModalBody>
                  <ModalBody>
                    HOTLINE: 16575
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.popUp}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
                
                <Button color="link" onClick={this.popUp2}>
                  {this.props.buttonLabel}
                  Location
                </Button>
                <Modal
                  isOpen={this.state.modal2}
                  popUp2={this.popUp2}
                  className={this.props.className}
                >
                  <ModalHeader popUp2={this.popUp2}>Contact Us</ModalHeader>
                  <ModalBody>
                  Downtown Mall in Espresso Perfetto 
                  </ModalBody>
                  <ModalBody>
                  Vintage CoWorking Space
                  </ModalBody>
                  <ModalFooter>
                  <Button color="secondary" onClick={this.popUp2}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>

                    <Button color="link" onClick={this.popUp3}>
                  {this.props.buttonLabel}
                  Privacy & Policy
                </Button>
                <Modal
                  isOpen={this.state.modal3}
                  popUp3={this.popUp3}
                  className={this.props.className}
                >
                  <ModalHeader popUp3={this.popUp3}>Privacy & Policy</ModalHeader>
                  <ModalBody>
                  Hopa La 
                  </ModalBody>
                  
                  <ModalFooter>
                  <Button color="secondary" onClick={this.popUp3}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 6, offset: 4 }}>
              Copyright © 2019 Lirten Inc. All Rights Reserved
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
}
export default About;

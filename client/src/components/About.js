import React from "react";
import { Jumbotron, Button, Col } from "reactstrap";
import { SocialIcon } from "react-social-icons";
import YouTube from "react-youtube";

class About extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <YouTube
              videoId="pQc8gRcmZRY"
              opts={opts}
              onReady={this._onReady}
            />
          </Col>
          <Col sm="12" md={{ size: 6, offset: 10 }}>
            <SocialIcon url="http://twitter.com/jaketrent" />{" "}
            <SocialIcon url="https://www.facebook.com/GUC.Official/" />{" "}
            <SocialIcon url="https://github.com/SE-GUC/team-xxx" />{" "}
            <SocialIcon url="https://www.youtube.com/user/GUCnews/featured" />{" "}
          </Col>
        </Jumbotron>
      </div>
    );
  }
}
export default About;

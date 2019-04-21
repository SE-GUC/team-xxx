import React from "react";
import { Jumbotron, Col } from "reactstrap";
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
          <h2 className="display-3">Welcome to Lirten Hub!</h2>
          <p className="lead">
            LirtenHub is trying to play the role of a platform connecting people
            who need work to get done, with the talent that can get it done.
          </p>
          <hr className="my-2" />
          <p>
            Isn’t that just any freelancing website? Well, there is a catch.
            trying to over- come the mess in the freelancing wolrd today. You
            see, traditionally if some company wanted to outsource, they would
            just post a description of a task and someone might do it or not.
            There were no guarantees and the alloca- tion of tasks followed a
            sub-optimal procedure. LirtenHub aims to solve the missing piece of
            the puzzle. LirtenHub introduces the solution by resolving the
            traditional operation to itʼs fundamental constituents.
          </p>
          <p className="lead" />
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

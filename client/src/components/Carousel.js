import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src:
      "https://switch-production-herokuapp-com.global.ssl.fastly.net/assets/switcher-bg-c94dcd081202e4e06151673e81e5cc6d.jpg",
    altText: "Slide 1",
    caption: "",
    header: "Think Different"
  },
  {
    src:
      "http://www.grovine.com/wp-content/uploads/2018/01/solve-2636254_1920-1110x550.jpg",
    altText: "Slide 2",
    caption: "",
    header: "For success, choose the best"
  },
  {
    src:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    altText: "Slide 3",
    caption: "",
    header: "Get fresh ideas from a freshman"
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;

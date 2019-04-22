import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "https://cdn-images-1.medium.com/max/1200/1*6GCuMpbMapiltNxYYeZYzg.png",
    altText: "Slide 1",
    caption:
      "We are simply Freelancers Website trying to reach each and everyone with the easiest way"
  },
  {
    src:
      "https://images.jacobinmag.com/2015/05/17003803/Ashley-Barron-At-the-Desk-1.jpg",
    altText: "Slide 2",
    caption: "We have Lifecoaches that may teach you anything you want"
  },
  {
    src:
      "http://www.blackandwhitephoto.com.au/wp-content/uploads/2017/01/blackandwhiteadelaide.jpg",
    altText: "Slide 3",
    caption: "You can always add all the projects you want "
  },
  {
    src:
      "https://static1.squarespace.com/static/551eda64e4b06ebe900f1e88/t/55366686e4b02b1607b44168/1429628552509/careers+section.jpg?format=1500w",
    altText: "Slide 4",
    caption: "We have expertise in all types of jobs"
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="1600" height="600" />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Example;

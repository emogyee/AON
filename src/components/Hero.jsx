import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Hero() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img src="/slide/slide-001.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/slide/slide_next.jpg.jpeg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/slide/slide-new.jpg.jpeg" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;

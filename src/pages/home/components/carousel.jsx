import { React } from "react";
import "bootstrap";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import "../home.css";

import solutions from "../../../assets/carousel_img/value.jpg";
import precision_2 from "../../../assets/carousel_img/precision_2.jpg";
import sustainable from "../../../assets/carousel_img/sustainable.jpg";
import { Link } from "react-router-dom";
import AnimatedElement from "../../../components/motionComponent";

function MainSlider() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={7500}>
        <CarouselImage
          className="carousel-image"
          text="First slide"
          sliderImage={solutions}
        />
        <Carousel.Caption className="sliderCaption mb-4">
          <AnimatedElement
            as="p"
            animation="fade-up"
            className="sliderCaptionMain defbodyFont my-4 pt-3"
          >
            <b>
              {" "}
              We are VALTEC, <br /> an energy technology company
            </b>
          </AnimatedElement>
          <AnimatedElement
            as="p"
            animation="fade-left"
            delay={0.2}
            className="sliderCaptionSubtext my-3 py-3 defbodyFont"
          >
            We take energy forward - making it safer, cleaner, and more
            efficient for people and the planet.
          </AnimatedElement>

          <Link className="mt-4" to="/service">
            {" "}
            <p className="btn btn-danger px-4 mt-0 defbodyFont">Explore</p>{" "}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={7500}>
        <CarouselImage
          className="carousel-image"
          text="Second slide"
          sliderImage={precision_2}
        />
        <Carousel.Caption className="sliderCaption mb-4">
          <AnimatedElement
            as="p"
            animation="fade-up"
            className="sliderCaptionMain defbodyFont my-4 pt-3"
          >
            <b>
              {" "}
              Empowering industries with <br /> precision and reliability
            </b>
          </AnimatedElement>
          <AnimatedElement
            as="p"
            animation="fade-left"
            delay={0.2}
            className="sliderCaptionSubtext my-3 py-3 defbodyFont"
          >
            Leveraging our expertise, we offer preventive, proactive, reactive
            and predictive solutions for your operations and plants; designed to
            enhance values and efficiency.
          </AnimatedElement>

          <Link className="mt-4" to="/service">
            {" "}
            <p className="btn btn-danger px-4 mt-0 defbodyFont">Explore</p>{" "}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={7500}>
        <CarouselImage
          className="carousel-image"
          text="Third slide"
          sliderImage={sustainable}
        />
        <Carousel.Caption className="sliderCaption mb-4">
          <AnimatedElement
            as="p"
            animation="fade-up"
            className="sliderCaptionMain defbodyFont my-4 pt-3"
          >
            <b>
              {" "}
              Building a sustainable
              <br /> future{" "}
            </b>
          </AnimatedElement>
          <AnimatedElement
            as="p"
            animation="fade-left"
            delay={0.2}
            className="sliderCaptionSubtext my-3 py-3 defbodyFont"
          >
            VALTEC is building a sustainable future through renewable energy.{" "}
            <br />
            We design and implement clean energy projects that reduce carbon
            footprints and lower energy costs.
          </AnimatedElement>

          <Link className="mt-4" to="/service/renewable_energy">
            {" "}
            <p className="btn btn-danger px-4 mt-0 defbodyFont">Explore</p>{" "}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlider;

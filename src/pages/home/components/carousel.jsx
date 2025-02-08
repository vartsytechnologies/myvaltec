import { React, useEffect } from "react";
import "bootstrap";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import "../home.css";
import AOS from "aos";
import solutions from "../../../assets/carousel_img/value.jpg";
import precision_2 from "../../../assets/carousel_img/precision_2.jpg";
import sustainable from "../../../assets/carousel_img/sustainable.jpg";
import { Link } from "react-router-dom";

function MainSlider() {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      offset: 50,
    });
  }, []);
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={2000}>
        <CarouselImage text="First slide" sliderImage={solutions} />
        <Carousel.Caption className="sliderCaption" id="captionWithButton">
          <p className="sliderCaptionMain defbodyFont" data-aos="fade-up">
            {" "}
            <b>
              {" "}
              We are VALTEC,
              <br />
              an energy technology company
            </b>
          </p>
          <p
            className="sliderCaptionSubtext defbodyFont d-none d-sm-block"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            We take energy forward - making it safer, cleaner, and more
            efficient for people and the plan
          </p>
          <Link
            className="bg-danger p-3 text-white fs-5 rounded"
            style={{ textDecorationLine: "none" }}
            to={`/service`}
          >
            Explore
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <CarouselImage text="Second slide" sliderImage={precision_2} />
        <Carousel.Caption className="sliderCaption">
          <p className="sliderCaptionMain defbodyFont" data-aos="fade-up">
            <b>
              {" "}
              Empowering projects <br /> with precision
            </b>
          </p>
          <p
            className="sliderCaptionSubtext defbodyFont d-none d-sm-block"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            With our expertise in Engineering, Procurement, and Construction, we
            drive efficiency and quality at every stage, helping your projects
            reach completion on time and within budget. Trust VALTEC to deliver
            solutions that meet the highest industry standards.
          </p>
          <Link
            className="bg-danger p-3 text-white fs-5 rounded"
            style={{ textDecorationLine: "none" }}
            to={`/service`}
          >
            Explore
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <CarouselImage text="Third slide" sliderImage={sustainable} />
        <Carousel.Caption className="sliderCaption">
          <p className="sliderCaptionMain defbodyFont" data-aos="fade-up">
            {" "}
            <b>
              {" "}
              Building a sustainable
              <br /> future{" "}
            </b>
          </p>
          <p
            className="sliderCaptionSubtext defbodyFont d-none d-sm-block"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Our commitment to renewable energy and sustainable practices is
            helping reshape industries across West Africa, one project at a
            time. Partner with us to create a lasting positive impact on the
            environment and your bottom line.
          </p>
          <Link
            className="bg-danger p-3 text-white fs-5  rounded"
            style={{ textDecorationLine: "none" }}
            to={`/service`}
          >
            Explore
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlider;

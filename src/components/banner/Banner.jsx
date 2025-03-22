import { React } from "react";
import "./Banner.css";
import AnimatedElement from "../../components/motionComponent";

function Banner(props) {
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <AnimatedElement
        as="h3"
        className="d-none d-lg-block banner-text text-center defheadFont mt-5 pt-5"
        animation="fade-up"
      >
        {props.title}
      </AnimatedElement>

      <AnimatedElement
        as="p"
        className="title d-block fw-bolder d-lg-none banner-text text-center debodyFont mt-5 pt-5"
        animation="fade-up"
      >
        {props.title}
      </AnimatedElement>
    </div>
  );
}
export default Banner;

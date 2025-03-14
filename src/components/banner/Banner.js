import { React, useEffect } from "react";
import "./Banner.css";
// import AOS from "aos";
import useIntersectionObserver from "../animationHook";

function Banner(props) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1050,
  //     offset: 50,
  //   });
  // });
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <h3
        ref={ref}
        className={`fade-up ${
          isVisible ? "visible" : ""
        } d-none d-lg-block banner-text text-center defheadFont mt-5 pt-5`}
        // data-aos="fade-up"
      >
        {props.title}
      </h3>
      {/* <p
        className="title d-block fw-bolder d-lg-none banner-text text-center debodyFont mt-5 pt-5"
        // data-aos="fade-up"
      >
        {props.title}
      </p> */}
    </div>
  );
}
export default Banner;

import { React, useEffect } from "react";
import "./Banner.css";
import AOS from "aos";

function Banner(props) {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      offset: 50,
    });
  });
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <h3
        className="d-none d-sm-block banner-text text-center defheadFont mt-5 pt-5"
        data-aos="fade-up"
      >
        {props.title}
      </h3>
      <p
        className="d-block fw-bolder d-sm-none banner-text text-center debodyFont mt-5 pt-5"
        data-aos="fade-up"
        style={{ fontSize: "1.6em" }}
      >
        {props.title}
      </p>
    </div>
  );
}

export default Banner;

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
      <h2
        className="banner-text text-center defheadFont mt-4 pt-5"
        data-aos="fade-up"
      >
        {props.title}
      </h2>
    </div>
  );
}

export default Banner;

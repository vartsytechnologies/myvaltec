
import {React, useEffect} from 'react';
import './Banner.css';
import AOS from 'aos';

function Banner(props) {
  useEffect(()=>{
    AOS.init({
      duration:1050,
      offset:50,
    })
  })
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <h1 className="banner-text text-center shadow defheadFont" data-aos="fade-up">{props.title}</h1>
    </div>
  );
}

export default Banner;

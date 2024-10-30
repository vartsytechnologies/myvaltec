
import React from 'react';
import './Banner.css';

function Banner(props) {
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <h1 className="banner-text shadow">{props.title}</h1>
    </div>
  );
}

export default Banner;

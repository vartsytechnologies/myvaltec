import React from "react";
import "./loader.css";
import { Container } from "react-bootstrap";

const Preloader = () => {
  return (
    <Container className="spinner-loader">
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </Container>
  );
};

export default Preloader;

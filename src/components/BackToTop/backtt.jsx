import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "react-bootstrap";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <Button
        variant="danger"
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "7px 10px",
          fontSize: "15px",
          zIndex: 1000,
        //   transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <FaArrowUp />
      </Button>
    )
  );
};

export default BackToTop;

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function BackToTop(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant={props.variant}
          size="lg"
          className="me-1"
          onClick={scrollToTop} // ✅ Add this click event
        >
          {props.name}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="white"
              className="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 3.5a.5.5 0 0 1 .5.5v7.293l2.146-2.147a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 11.293V4a.5.5 0 0 1 .5-.5"
              />
            </svg>
          </span>
        </Button>
      )}
    </>
  );
}

export default BackToTop;

import { React } from "react";
import { Card } from "react-bootstrap";
import AnimatedElement from "../../../components/motionComponent";

function MarketCard({ title, description, imgSrc }) {
  return (
    <>
      <AnimatedElement
        as={Card}
        className="shadow-sm h-100"
        animation="fade-up"
      >
        <AnimatedElement
          as={Card.Img}
          variant="top"
          src={imgSrc}
          animation="fade-up"
        />

        <Card.Body>
          <AnimatedElement
            as={Card.Title}
            className="defheadFont text-danger"
            animation="fade-up"
            delay={0.3}
          >
            {title}
          </AnimatedElement>

          <AnimatedElement
            as={Card.Text}
            className="defbodyFont"
            animation="fade-up"
            delay={0.5}
          >
            {description}
          </AnimatedElement>
        </Card.Body>
      </AnimatedElement>
    </>
  );
}

export default MarketCard;


import React from "react";
import { Card } from "react-bootstrap";

function ProjectCard({ title, description, imgSrc }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

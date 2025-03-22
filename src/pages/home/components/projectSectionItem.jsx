import { React } from "react";
import AnimatedElement from "../../../components/motionComponent";

function ProjectSectionItem(props) {
  return (
    <>
      <AnimatedElement
        animation="fade-up"
        as="p"
        style={{ zIndex: "0" }}
        className="zoom-out-container"
      >
        <img
          src={props.imageSource}
          alt="Project"
          style={{ width: "100%", height: "auto" }}
        />
      </AnimatedElement>

      <AnimatedElement
        animation="fade-up"
        as="h3"
        className="defbodyFont"
        delay={0.4}
      >
        {props.heading}
      </AnimatedElement>

      <AnimatedElement
        animation="fade-up"
        as="p"
        className="defbodyFont"
        delay={0.5}
      >
        {props.subtext}
      </AnimatedElement>
    </>
  );
}

export default ProjectSectionItem;

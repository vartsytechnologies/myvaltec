// import { React, useEffect } from "react";
// import AOS from "aos";

// function ProjectSectionItem(props) {
//   useEffect(() => {
//     AOS.init({
//       duration: 1050,
//       offset: 50,
//     });
//   });
//   return (
//     <>
//       <p style={{ zIndex: "0" }} className="zoom-out-container">
//         <img
//           src={props.imageSource}
//           alt="Project"
//           style={{ width: "100%", height: "auto" }}
//         />
//       </p>
//       <h3 className="defbodyFont">{props.heading}</h3>
//       <p className="defbodyFont">{props.subtext}</p>
//     </>
//   );
// }

// export default ProjectSectionItem;

// import { useEffect, useRef, useState } from "react";
// import useIntersectionObserver from "../../../components/animationHook"

// function ProjectSectionItem(props) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`project-section-item fade-in ${isVisible ? "visible" : ""}`}
//     >
//       <p className="zoom-out-container">
//         <img
//           src={props.imageSource}
//           alt="Project"
//           style={{ width: "100%", height: "auto" }}
//           className={`animate-instance fade-in ${isVisible ? "visible" : ""}`}
//         />
//       </p>
//       <h3
//         className={`defbodyFont animate-instance fade-in ${
//           isVisible ? "visible" : ""
//         } delay-2 `}
//       >
//         {props.heading}
//       </h3>
//       <p className={`defbodyFont subtext`}>{props.subtext}</p>
//     </div>
//   );
// }

// export default ProjectSectionItem;

import useIntersectionObserver from "../../../components/animationHook";

function ProjectSectionItem(props) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`project-section-item fade-up ${isVisible ? "visible" : ""}`}
    >
      <p className="zoom-out-container">
        <img
          src={props.imageSource}
          alt="Project"
          style={{ width: "100%", height: "auto" }}
          className={`fade-up ${isVisible ? "visible" : ""}`}
        />
      </p>
      <h3
        className={`defbodyFont fade-up ${isVisible ? "visible delay-1" : ""}`}
      >
        {props.heading}
      </h3>
      <p className={`defbodyFont subtext`}>{props.subtext}</p>
    </div>
  );
}

export default ProjectSectionItem;

/*
const { ref, isVisible } = useIntersectionObserver();
ref={ref}
fade-up ${isVisible ? "visible" : ""}`
className={`fade-up ${isVisible ? "visible" : ""}`}
*/

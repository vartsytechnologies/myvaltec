import { motion } from "framer-motion";
import { Button, Container, Row, Col, NavLink, Card } from "react-bootstrap"; // Add any Bootstrap components

const animations = {
  "fade-up": {
    initial: { opacity: 0, y: 150 },
    whileInView: { opacity: 1, y: 0 },
  },
  "fade-down": {
    initial: { opacity: 0, y: -150 },
    whileInView: { opacity: 1, y: 0 },
  },
  "fade-left": {
    initial: { opacity: 0, x: 150 },
    whileInView: { opacity: 1, x: 0 },
  },
  "fade-right": {
    initial: { opacity: 0, x: -150 },
    whileInView: { opacity: 1, x: 0 },
  },
};

const bootstrapComponents = { Button, Container, Row, Col, NavLink, Card };

const AnimatedElement = ({
  as: Component = "div",
  animation = "fade-up",
  delay = 0,
  duration = 0.4,
  viewportOnce = true,
  children,
  ...props
}) => {
  const MotionComponent = motion(bootstrapComponents[Component] || Component);

  return (
    <MotionComponent
      initial={animations[animation]?.initial || {}}
      whileInView={animations[animation]?.whileInView || {}}
      transition={{ duration, delay }}
      viewport={{ once: viewportOnce }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedElement;

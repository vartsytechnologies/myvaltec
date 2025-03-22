// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaArrowUp } from "react-icons/fa";

// const BackToTop = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShow(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     show && (
//       <motion.button
//         onClick={scrollToTop}
//         // initial={{ opacity: 0, y: 50 }}
//         // animate={{ opacity: show ? 1 : 0, y: show ? 0 : 50 }}
//         // transition={{ duration: 0.5 }}
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           padding: "7px 10px",
//           fontSize: "15px",
//           zIndex: 1000,
//           borderRadius: "50%",
//           backgroundColor: "#ff1143",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         <FaArrowUp />
//       </motion.button>
//     )
//   );
// };

// export default BackToTop;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Track the vertical scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 50 }} // Start hidden and 50px below
      animate={{
        opacity: scrollY > 300 ? 1 : 0, // Show only when scrollY > 300
        y: scrollY > 300 ? 0 : 50, // Move up when visible, move down when hidden
      }}
      transition={{ duration: 0.5 }} // Smooth animation
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "red",
        color: "white",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default BackToTop;

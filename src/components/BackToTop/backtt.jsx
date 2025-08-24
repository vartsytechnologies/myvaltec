import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // console.log("Navigated to:", pathname);
    console.log(document.querySelector(".bac"));
    console.log("initial scroll", window.scrollY);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY > 300);
    // console.log("current scroll", window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <p className="bac">
        <motion.button
          onClick={toTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: scrollY > 300 ? 1 : 0,
            y: scrollY > 300 ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "10px",
            padding: "10px",
            fontSize: "16px",
            border: "none",
            borderRadius: "50%",
            backgroundColor: "#1E293B",
            color: "#fff",
            cursor: "pointer",
            zIndex: 99999,
          }}
        >
          <FaArrowUp />
        </motion.button>
      </p>
    </>
  );
};
export default BackToTop;

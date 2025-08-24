import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
// import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const { pathname } = useLocation();
  const body = document.getElementsByTagName("body")[0];

  useEffect(() => {
    body.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrollY(body.scrollTop > 300);
    body.addEventListener("scroll", handleScroll);
    return () => body.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};
export default BackToTop;

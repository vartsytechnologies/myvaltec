import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BackToTop = () => {
  const { pathname } = useLocation();
  const body = document.getElementsByTagName("body")[0];

  useEffect(() => {
    body.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, body]);

  return null;
};

export default BackToTop;

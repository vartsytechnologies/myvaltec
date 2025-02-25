import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ResetScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for DOM load before scrolling to the top
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    if (document.readyState === "loading") {
      // If the document is still loading, wait for the load event
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    } else {
      // If already loaded, scroll immediately
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ResetScroll;

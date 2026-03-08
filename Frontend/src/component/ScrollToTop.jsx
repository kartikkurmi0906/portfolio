import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This resets the scroll to the very top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // This triggers every time the URL path changes

  return null;
};

export default ScrollToTop;
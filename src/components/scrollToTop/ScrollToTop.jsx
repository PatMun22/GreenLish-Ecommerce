import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.ScrollToTop({ top: 0, behavior: "smooth" });
  }, [pathname]);
};

export default ScrollToTop;

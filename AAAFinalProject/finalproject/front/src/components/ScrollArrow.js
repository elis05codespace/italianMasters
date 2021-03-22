import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import "../App.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FaArrowCircleUp
      className="scrollTop"
      onClick={scrollTop}
      style={{
        color: "#9430eb",
        height: 40,
        display: showScroll ? "flex" : "none",
      }}
    />
  );
};

export default ScrollArrow;

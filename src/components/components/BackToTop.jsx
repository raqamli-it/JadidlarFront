import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function BackToTop() {
  const [back, setBack] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        setBack(true);
      } else {
        setBack(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {back && (
        <button
          style={{
            background: "#0e2b65",
            border: "none",
            borderRadius: "50%",
            color: "#fff",
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "35px",
            fontWeight: "700",
            paddingTop: "5px",
            zIndex: "1001",
            cursor: "pointer",
            boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
          }}
          onClick={scrollUp}
        >
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
}

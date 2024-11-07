import React from "react";
import img from "../../assets/images/empty-box.png";

export default function Empty() {
  return (
    <div className="empty-container-big">
      <div className="empty_card" style={{ backgroundColor: "transparent" }}>
        <img src={img} alt="empty" style={{ width: 240, height: 260 }} />
        <p style={{ fontWeight: 600 }}>Ma'lumot yo'q</p>
      </div>
    </div>
  );
}

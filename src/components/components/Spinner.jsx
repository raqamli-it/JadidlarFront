import React from "react";
import ReactLoading from "react-loading";
export default function Spinner() {
  return (
    <div className="spinner_card" style={{ paddingTop: "50px" }}>
      <ReactLoading type="bubbles" width={100} height={100} color="#133654" />
    </div>
  );
}

import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="loderBody">
      <ReactLoading type="bars" width={100} height={100} color="#0e2b65" />
    </div>
  );
}

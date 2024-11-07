import React from "react";

export default function Card({ apiData }) {
  const isLoggedIn = localStorage.getItem("JADIDLAR_TOKEN");

  // Function to handle click event
  const handleClick = (e) => {
    // If logged in, prevent default behavior
    if (isLoggedIn && e.currentTarget.target === "_blank") {
      // Open link in the same tab
      e.preventDefault();
      window.location.href = e.currentTarget.href;
    }
  };
  return (
    <div className="card-body">
      <div className="cards">
        {apiData?.map((data) => (
          <a
            href={isLoggedIn ? data.file : "/kirish"}
            target={isLoggedIn ? "" : "_blank"} // If logged in, target is empty, otherwise "_blank"
            onClick={handleClick} // Add onClick event handler
          >
            <div key={data.id} className="card card1">
              <div className="container2">
                <img src={data.image} alt="las vegas" />
              </div>
              <div className="details">
                <h4 className="card_name">{data.jadid_fullname}</h4>
                <h4>{data.title}</h4>
                {(data?.brYear || data?.dyYear) && (
                  <p>
                    ({data.brYear}-{data.dyYear})
                  </p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

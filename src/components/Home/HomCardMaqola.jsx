import React from "react";
import fakeData from "../../data/Asarlar.json";

export default function HomeCardMaqola() {
  return (
    <div className="card-body">
      <div className="cards">
        {/* className='home-Card' */}

        {fakeData.map((data) =>
          // <div key={da.id} className="card">
          //   <img src={da.img} alt="" />
          //   <div className="card-info">
          //     <p className="title">{da.title}</p>
          //   </div>
          // </div>

          data.id < 7 ? (
            <div key={data.id} className="card card1">
              <div className="container2">
                <img src={data.img} alt="las vegas" />
              </div>
              <div className="details">
                <h3>{data.title}</h3>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

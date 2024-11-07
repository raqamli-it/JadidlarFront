import React from "react";

export default function HomCardXikmat({ apiData }) {
  return (
    <div className="cardMaqolalar">
      {apiData?.map((hikmatli) => (
        <div className="card-maqola-item" key={hikmatli.id}>
          <p
            className="maqola-title"
            dangerouslySetInnerHTML={{ __html: hikmatli.text }}
          ></p>
          <span className="maqola-author">{hikmatli.jadid_fullname}</span>
        </div>
      ))}
    </div>
  );
}

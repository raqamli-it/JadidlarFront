import React from "react";
import dateFormat from "dateformat";
import "../../assets/style/block/_cardCarousel.scss";
import { useTranslation } from "react-i18next";
export default function Card({ img, title, brYear, dyYear, onClick }) {
  const { t } = useTranslation();

  return (
    <div className="card_carusel_hm" onClick={onClick}>
      <div className="card_carusel_img">
        <img src={img} alt="" />
      </div>
      <div className="height">
        <div className="card_carusel_body">
          <h3>{title}</h3>
          {brYear || dyYear ? (
            <p className="jd_p">
              ({brYear ? dateFormat(brYear, "yyyy") : "?"} —{" "}
              {dyYear ? dateFormat(dyYear, "yyyy") : "?"})
            </p>
          ) : (
            <div style={{ color: "#fff", fontWeight: "700" }}>
              ( {t("unknown_")} )
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

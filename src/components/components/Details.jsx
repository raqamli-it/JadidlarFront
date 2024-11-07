import React from "react";
import dateFormat from "dateformat";
import { FaTelegramPlane } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Details({ image, fullname, birthday, die_day, bio }) {
  const { t } = useTranslation();
  const router = useParams();
  return (
    <div>
      <div className="detail_container">
        <div className="detail_img">
          <img src={image} />
        </div>
        <div className="detail_title">
          <h1>{fullname}</h1>
          <span className="data-jadids">
            {birthday || die_day ? (
              <p>
                ({birthday ? dateFormat(birthday, "yyyy") : t("unknown_")} —{" "}
                {die_day ? dateFormat(die_day, "yyyy") : t("unknown_")})
              </p>
            ) : (
              <div style={{ color: "#742d2d", fontWeight: "700" }}>
                ( {t("unknown_")} )
              </div>
            )}
          </span>
          <div className="detail_describtion">
            <p dangerouslySetInnerHTML={{ __html: bio }}></p>
          </div>
        </div>

        <div
          className="share-jadids"
          onClick={() =>
            window.open(
              `https://telegram.me/share/url?url=https://jadidlarimiz.uz/jadidlar/${router?.id}/`,
              "_blank"
            )
          }
        >
          <div>
            <a target="_blank" className="span-jadids">
              {" "}
              {t("share_")}
            </a>
            <div className="sp-ic-jd">
              {" "}
              <FaTelegramPlane />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import dateFormat from "dateformat";
import "../../assets/style/block/_news.scss";
import { useTranslation } from "react-i18next";

export default function NewsCard({ img, title, created_at, onClick, link }) {
  const { t } = useTranslation();

  const truncateText = (text, maxLength) => {
    // Matnni ko'rsatishni tark etish funksiyasi
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  };

  return (
    <>
      <div className="news_card">
        <div className="news_heading">
          <h3>{title} </h3>
          {/* <h3 className="news_pt">{title2}</h3> */}
        </div>
        <div className="news_flex">
          <div className="news_text">
            {/* <div dangerouslySetInnerHTML={{ __html: text }}></div> */}

            <p>{t("yangiliklar_")}</p>
            <span style={{ color: "#6b1324" }}>
              {dateFormat(created_at, "dd.mm.yyyy")}
            </span>
          </div>

          <div className="news_button">
            <button
              onClick={link ? () => window.open(link, "_blank") : onClick}
              // uzoq yo'l orqali foydalanilgan
              // onClick={() => {
              //   if (link) {
              //     window.open(link, "_blank");
              //   } else {
              //     onClick();
              //   }
              // }}
              className="button"
            >
              {t("more_")}
            </button>
          </div>
        </div>
        <div className="news_img">
          <img onClick={onClick} src={img} alt="" />
        </div>
      </div>
    </>
  );
}

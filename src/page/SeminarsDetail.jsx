import React, { useEffect, useState } from "react";
import Menu from "../components/components/Menu";
import { useParams } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function SeminarsDetail() {
  const { t } = useTranslation();
  const route = useParams();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.seminarsById(route?.id));
    setApiData(response);
    let x = document.querySelector("title");
    x.textContent = `Voqealar / Seminarlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();
  }, []);
  //
  return (
    <div className="jadidlar_container container_full">
      <Menu title="seminarlar_" link="/seminarlar" subtitle={apiData?.title} />
      <div className="news_page_container">
        <div className="news_page_img"></div>
        <div className="news_page_title">
          <h1>{apiData?.title}</h1>
          <h1>{apiData?.title2}</h1>
          <span>{apiData?.date}</span>
          <div dangerouslySetInnerHTML={{ __html: apiData?.text }}></div>
        </div>
      </div>
      <div className="global_share">
        <span>{t("share_")}</span>
        <a
          onClick={() =>
            (window.location.href = `https://telegram.me/share/url?url=https://jadidlarimiz.uz/seminarlar/${apiData?.id}`)
          }
          target="_blank"
        >
          <FaTelegramPlane />
        </a>
      </div>
    </div>
  );
}

import React from "react";
import Marquee from "react-fast-marquee";
import FakeHavolalar from "../data/Havolalar.json";
import { DataService } from "../config/dataService";
import { useState } from "react";
import { useEffect } from "react";
import { endpoints } from "../config/endpoints";
import { useTranslation } from "react-i18next";

export default function Havolalar() {
  const { t } = useTranslation();

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.usefulLink);
    // console.log(response, "havolalar");
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  //

  return (
    <div className="container_full">
      <div className="info__lazy" id="aboutus">
        <div className="text_lazy">
          <h2>{t("foydali_")}</h2>
        </div>
      </div>
      <div className="lazy">
        <Marquee pauseOnHover>
          {apiData?.results?.map((usefulItem, i) => (
            <div className="item__slide" key={i}>
              <a href={usefulItem.link}>
                <div className="item__img">
                  <img src={usefulItem.logo_image} alt="" />
                </div>
              </a>
            </div>
          ))}
        </Marquee>

        {/* <Marquee pauseOnHover direction="right">  
          {Shuffle(product).map((item, i) => (
            <div className="item__slide" key={i}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </Marquee> */}
      </div>
    </div>
  );
}

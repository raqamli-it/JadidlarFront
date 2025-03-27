import React, { useState, useEffect } from "react";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";
import Spinner from "../components/components/Spinner";
import Menu from "../components/components/Menu";
import Search from "../components/components/Search";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function About() {
  const lang = useSelector((state) => state.langReducer.value);

  const { t } = useTranslation();

  let x = document.querySelector("title");
  x.textContent = "Biz haqimizda";

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.sahifalar);
    // console.log(response);
    setApiData(response);
  };

  useEffect(() => {
    fetchData();
  }, [lang]);
  //

  // bu qism ishtirokchilar api lar bilan ishlash uchun
  const [apiData1, setApiData1] = useState();

  const fetchData1 = async () => {
    const response = await DataService.get(endpoints.ishtirokchilar);
    console.log(response, "ishtirokchi");
    setApiData1(response);
  };

  useEffect(() => {
    fetchData1();
  }, [lang]);

  //apiData1

  // API data

  return (
    <div className="container_full">
      <Menu title="about_" />
      {apiData ? (
        <div className="about_detail">
          {apiData?.results?.map((about) => (
            <div>
              <h1>{about.title}</h1>
              <div className="about_card">
                <div className="about_img">
                  <img className="about_image" src={about.image} />
                </div>
                <div className="about_title">
                  <div className="about_describtion">
                    <p dangerouslySetInnerHTML={{ __html: about.text }}></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
      <div className="people_box_card">
        <h2>{t("participants")}</h2>
        {/* ishtirokchilar */}
        {apiData1 ? (
          <div className="par_pd">
            <div className="people_container">
              {apiData1?.results?.map((ishtirikchilar) => (
                <div key={ishtirikchilar.id} className="people_card">
                  <img src={ishtirikchilar.image} alt="rasm" />
                  <div className="people_content">
                    <h4>{ishtirikchilar.fullname}</h4>

                    <p>{ishtirikchilar.position}</p>
                    <p>{ishtirikchilar.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

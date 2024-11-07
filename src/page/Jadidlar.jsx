import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tab from "../components/components/Tab";
import CardAsarlar from "../components/components/CardAsarlar";
import Menu from "../components/components/Menu";
import Spinner from "../components/components/Spinner";
import Empty from "../components/components/Empty";
import Details from "../components/components/Details";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import HomCardXikmat from "../components/Home/HomCardXikmat";
import { useTranslation } from "react-i18next";
import SEO from "../components/Seo";
import { useSelector } from "react-redux";
import { generateTabList } from "../components/components/Tabutils"; // Tabutils.js dan import qilingan

export default function Jadidlar() {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.langReducer?.value);

  const route = useParams();
  const [apiData, setApiData] = useState();
  const [activeTab, setActiveTab] = useState(1);

  const fetchData = async () => {
    const response = await DataService.get(endpoints.jadidById(route?.id));
    setApiData(response);
    let x = document.querySelector("title");
    x.textContent = `Jadidlar / ${response.title}`;
  };

  useEffect(() => {
    fetchData();
  }, [lang]);

  // Tablar uchun generatsiya qilish
  const tabs = [
    { id: 1, title: "jadid_", dataKey: true },
    { id: 2, title: "asarlar_", dataKey: "asarlar" },
    { id: 3, title: "maqolalar_", dataKey: "maqolalar" },
    { id: 4, title: "sherlar_", dataKey: "sherlar" },
    { id: 5, title: "esdaliklar_", dataKey: "hotiralar" },
    { id: 6, title: "hikmat_", dataKey: "hikmatli_sozlar" },
  ];
  const tablist = generateTabList(apiData, tabs);

  const onChangeTab = (id) => {
    setActiveTab(id);
  };

  const ActivePanel = () => {
    switch (activeTab) {
      case 1:
        return (
          <div>
            {apiData ? (
              <Details
                image={apiData?.image}
                fullname={apiData?.fullname}
                birthday={apiData?.birthday}
                die_day={apiData?.die_day}
                bio={apiData?.bio}
              />
            ) : (
              <Spinner />
            )}
          </div>
        );
      case 2:
        return (
          <div>
            {apiData?.asarlar?.length > 0 ? (
              <div>
                {apiData ? (
                  <CardAsarlar apiData={apiData?.asarlar} url="asarlar" />
                ) : (
                  <Spinner />
                )}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        );
      case 3:
        return (
          <div>
            {apiData?.maqolalar?.length > 0 ? (
              <div>
                {apiData ? (
                  <CardAsarlar apiData={apiData.maqolalar} url="maqolalar" />
                ) : (
                  <Spinner />
                )}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        );
      case 4:
        return (
          <div>
            {apiData?.sherlar?.length > 0 ? (
              <div>
                {apiData ? (
                  <CardAsarlar apiData={apiData.sherlar} url="sherlar" />
                ) : (
                  <Spinner />
                )}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        );
      case 5:
        return (
          <div>
            {apiData?.hotiralar?.length > 0 ? (
              <div>
                {apiData ? (
                  <CardAsarlar apiData={apiData.hotiralar} url="hotiralar" />
                ) : (
                  <Spinner />
                )}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        );
      case 6:
        return (
          <div>
            {apiData?.hikmatli_sozlar?.length > 0 ? (
              <div>
                {apiData ? (
                  <HomCardXikmat apiData={apiData.hikmatli_sozlar} />
                ) : (
                  <Spinner />
                )}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="jadidlar_container container_full">
      <Menu title="jadidlar_" link="/jadidlar" subtitle={apiData?.title} />
      <SEO
        title={apiData?.fullname}
        image={apiData?.image}
        discription={apiData?.fullname}
      />
      <Tab tablist={tablist} onChange={onChangeTab} active={activeTab} />
      <ActivePanel />
    </div>
  );
}

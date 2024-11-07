import React, { useState } from "react";
import Tab from "../components/components/Tab";
import HomeEshituv from "../components/Home/HomeEshituv";

import HomeKoruvlar from "./Home/HomeKoruvlar";
import HomeGallery from "./Home/HomGallery";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function korEshit() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(1);
  const tablist = [
    { id: 1, title: "koruvlar_" },
    { id: 2, title: "suratlar_" },
    { id: 3, title: "eshituvlar_" },
  ];

  const onChangeTab = (id) => {
    setActiveTab(id);
  };
  const mains = () => {
    switch (activeTab) {
      case 1:
        return <HomeKoruvlar />;
      case 2:
        return <HomeGallery />;
      case 3:
        return <HomeEshituv />;
    }
  };
  return (
    <div className="container_full">
      <h2>{t("kor_eshit_oqima_")}</h2>
      <Tab onChange={onChangeTab} active={activeTab} tablist={tablist} />
      {mains()}
    </div>
  );
}

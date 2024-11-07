import React, { useEffect, useState } from "react";
import Tab from "../components/components/Tab";
import Search from "../components/components/Search";
import Empty from "../components/components/Empty";
import Lists from "../components/Archive/Lists";
import Skaner from "../components/Archive/Skaner";
import Menu from "../components/components/Menu";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ArchiveDocuments() {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(params?.tab || "roʻyxat");
  const [search, setSearch] = useState("");

  const tablist = [
    { id: "roʻyxat", title: "royhat_", active: true },
    { id: "skaner", title: "skaner_", active: true },
  ];

  useEffect(() => {
    setActiveTab(params?.tab || "roʻyxat");
  }, [params?.tab]);

  const onChangeTab = (tab) => {
    setActiveTab(tab);
    navigate(`/arxiv_hujjatlar/${tab}`);
  };

  const onSearch = (value) => {
    setSearch(value);
  };

  const ActivePanel = () => {
    switch (activeTab) {
      case "roʻyxat":
        document.title = "Manbalar / Arxiv hujjatlari / Roʻyxat";
        return <Lists search={search} url="arxiv_hujjatlar" />;
      case "skaner":
        document.title = "Manbalar / Arxiv hujjatlari / Skaner";
        return <Skaner search={search} url="arxiv_hujjatlar" />;
      default:
        return <Empty />;
    }
  };

  return (
    <div className="container_full">
      <Menu
        title="manbalar_"
        subtitle={t(tablist.find((tab) => tab.id === activeTab)?.title)}
      />
      <Search onSearch={onSearch} />
      <Tab onChange={onChangeTab} active={activeTab} tablist={tablist} />
      <ActivePanel />
    </div>
  );
}

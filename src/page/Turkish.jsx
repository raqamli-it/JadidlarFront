import React, { useEffect, useState } from "react";
import Tab from "../components/components/Tab";

import Search from "../components/components/Search";
import TurkCollection from "../components/TM/TurkCollection";
import TurkArticle from "../components/TM/TurkArticle";
import Sherlar from "../components/TM/Sherlar";
import TurkMemories from "../components/TM/TurkMemories";
import Menu from "../components/components/Menu";
import { useNavigate, useParams } from "react-router";

export default function ResearchPage() {
  const [search, setSearch] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(params?.tab);
  useEffect(() => {
    setActiveTab(params?.tab);
  }, [params?.tab]);
  const tablist = [
    { id: "asarlar", title: "asarlar_" },
    { id: "maqolalar", title: "maqolalar_" },
    { id: "sherlar", title: "sherlar_" },
    { id: "esdaliklar", title: "esdaliklar_" },
  ];

  const onChangeTab = (id) => {
    setActiveTab(id);
    navigate(`/turkiston_muxtoriyati/${id}`);
  };
  const Mains = () => {
    switch (activeTab) {
      case "asarlar":
        let x = document.querySelector("title");
        x.textContent = "Turkiston Muxtoriyati / Asarlar";
        return <TurkCollection search={search} url="asarlar" />;
      case "maqolalar":
        let q = document.querySelector("title");
        q.textContent = "Turkiston Muxtoriyati / Maqolalar";
        return <TurkArticle search={search} url="maqolalar" />;
      case "sherlar":
        let e = document.querySelector("title");
        e.textContent = "Turkiston Muxtoriyati / Sheʼrlar ";
        return <Sherlar search={search} url="sherlar" />;
      case "esdaliklar":
        let r = document.querySelector("title");
        r.textContent = "Turkiston Muxtoriyati / Esdaliklar";
        return <TurkMemories search={search} url="hotiralar" />;
    }
  };
  const onSearch = (value) => {
    console.log(value);
    setSearch(value);
  };
  return (
    <>
      <div className="container_full">
        <Menu title="turkiston_" subtitle={`${activeTab}_`} />
        <Search onSearch={onSearch} />
        <Tab onChange={onChangeTab} active={activeTab} tablist={tablist} />
        <Mains />
      </div>
    </>
  );
}

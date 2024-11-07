import React, { useCallback, useEffect, useMemo, useState } from "react";
import Tab from "../components/components/Tab";
import Collection from "../components/AShortStory/Collection";
import Article from "../components/AShortStory/Article";
import WiseWords from "../components/AShortStory/WiseWords";
import Search from "../components/components/Search";
import Menu from "../components/components/Menu";
import { useMatch, useNavigate, useParams } from "react-router-dom";

export default function CollectionPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(params?.tab);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setActiveTab(params?.tab);
  }, [params?.tab]);
  const tablist = [
    { id: "asarlar", title: "asarlar_" },
    { id: "maqolalar", title: "maqolalar_" },
    { id: "hikmatlar", title: "hikmatlar_" },
  ];

  const onChangeTab = (tab) => {
    setActiveTab(tab);
    navigate(`/til_va_imlo/${tab}`);
  };
  const Mains = () => {
    switch (activeTab) {
      case "asarlar":
        let a = document.querySelector("title");
        a.textContent = "Til va Imlo / Asarlar";
        return <Collection search={search} url="asarlar" />;
      case "maqolalar":
        let b = document.querySelector("title");
        b.textContent = "Til va Imlo / Maqolalar";
        return <Article search={search} url="maqolalar" />;
      case "hikmatlar":
        let d = document.querySelector("title");
        d.textContent = "Til va Imlo / Hikmatli So'zlar";
        return <WiseWords search={search} />;
    }
  };
  const onSearch = (value) => {
    setSearch(value);
  };
  return (
    <>
      <div className="container_full">
        <Menu title="til_va_imlo_" subtitle={`${activeTab}_`} />
        <Search onSearch={onSearch} />
        <Tab onChange={onChangeTab} active={activeTab} tablist={tablist} />
        <Mains />
      </div>
    </>
  );
}

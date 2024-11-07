import React, { useState } from "react";
import Tab from "../components/components/Tab";
import Search from "../components/components/Search";
import Empty from "../components/components/Empty";
import Lists from "../components/Archive/Lists";
import Menu from "../components/components/Menu";
import Tarix from "../components/Matbuot/Tarix";
import Siyosat from "../components/Matbuot/Siyosat";
import Iqtisod from "../components/Matbuot/Iqtisod";
import Madaniyat from "../components/Matbuot/Madaniyat";
import Ijtimoiy from "../components/Matbuot/Ijtimoiy";
import Adabiyot from "../components/Matbuot/Adabiyot";
import Talim from "../components/Matbuot/Talim";
import Boshqa from "../components/Matbuot/Boshqa";
import Bibliografik from "../components/Matbuot/Bibliografik";
import { useNavigate, useParams } from "react-router-dom";

export default function Press() {
  const params = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(params?.tab);
  const [search, setSearch] = useState("");

  const tablist = [
    { id: "tarix", title: "tarix_" },
    { id: "siyosat", title: "siyosat_" },
    { id: "iqtisod", title: "iqtisod_" },
    { id: "madaniyat_va_san’at", title: "madaniyat_" },
    { id: "ijtimoiy_masalalar_va_din", title: "ijtimoiy_" },
    { id: "adabiyot", title: "adabiyot_" },
    { id: "ta’lim_tarbiya", title: "talim_" },
    { id: "boshqa_masalalar", title: "boshqa_" },
    { id: "bibliografik_ko’rsatkich", title: "see_" },
  ];
  const onChangeTab = (tab) => {
    setActiveTab(tab);
    navigate(`/matbuot/${tab}`);
  };

  const Mains = () => {
    switch (activeTab) {
      case "tarix":
        let x = document.querySelector("title");
        x.textContent = "Manbalar / Matbuot / Tarix";
        return <Tarix search={search} url="maqolalar" />;
      case "siyosat":
        let w = document.querySelector("title");
        w.textContent = "Manbalar / Matbuot / Siyosat";
        return <Siyosat search={search} url="maqolalar" />;
      case "iqtisod":
        let r = document.querySelector("title");
        r.textContent = "Manbalar / Matbuot / Iqtisod";
        return <Iqtisod search={search} url="maqolalar" />;
      case "madaniyat_va_san’at":
        let t = document.querySelector("title");
        t.textContent = "Manbalar / Matbuot / Madaniyat va san’at";
        return <Madaniyat search={search} url="maqolalar" />;
      case "ijtimoiy_masalalar_va_din":
        let u = document.querySelector("title");
        u.textContent = "Manbalar / Matbuot / Ijtimoiy masalalar va din";
        return <Ijtimoiy search={search} url="maqolalar" />;
      case "adabiyot":
        let i = document.querySelector("title");
        i.textContent = "Manbalar / Matbuot / Adabiyot";
        return <Adabiyot search={search} url="maqolalar" />;
      case "ta’lim_tarbiya":
        let o = document.querySelector("title");
        o.textContent = "Manbalar / Matbuot / Taʼlim-Tarbiya";
        return <Talim search={search} url="maqolalar" />;
      case "boshqa_masalalar":
        let h = document.querySelector("title");
        h.textContent = "Manbalar / Matbuot / Boshqa masalalar";
        return <Boshqa search={search} url="maqolalar" />;
      case "bibliografik_ko’rsatkich":
        let n = document.querySelector("title");
        n.textContent = "Manbalar / Matbuot / Bibliografik ko'rsatkich";
        return <Bibliografik search={search} url="maqolalar" />;
    }
  };
  const onSearch = (value) => {
    setSearch(value);
  };
  return (
    <>
      <div className="container_full">
        <Menu
          title="matbuot_"
          subtitle={tablist.find((tab) => tab.id === activeTab)?.title}
        />
        <Search onSearch={onSearch} />
        <Tab onChange={onChangeTab} active={activeTab} tablist={tablist} />
        <Mains />
      </div>
    </>
  );
}

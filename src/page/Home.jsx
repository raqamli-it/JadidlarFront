import React, { useEffect, useState } from "react";
import KorEshit from "../components/KorEshit";
import Havolalar from "../components/Havolalar";
import LandingCarousel from "../components/LandingCarousel";
import CardCarousel from "../components/CardCarousel";
import Loading from "../components/components/Loading";
import News from "../components/News";
import HomeTab from "../components/HomeTab";
import HomeTabManba from "../components/HomeTabManba";
import HomeTabIzlanish from "../components/HomeTabIzlanish";
import HomeTabTurkiston from "../components/HomeTabTurkiston";
import HomeKoruvlar from "../components/Home/HomeKoruvlar";
import HomeGallery from "../components/Home/HomGallery";
import Spinner from "../components/components/Spinner";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Slider from "../components/Slider";

export default function Home() {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.langReducer.value);
  useEffect(() => {
    document.title = `JADIDLAR | ${t("jadidlar_")}`;
  }, [lang]);

  return (
    <div>
      <>
        <Slider />
        <div className="container_full">
          <News />
          <CardCarousel />
          <HomeTabManba />
          <HomeTabIzlanish />
          <HomeTab />
          <HomeTabTurkiston />
          <KorEshit />

          <Havolalar />
        </div>
      </>
    </div>
  );
}

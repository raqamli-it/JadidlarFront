import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import "../assets/style/block/_landingCarousel.scss";
import { useTranslation } from "react-i18next";

export default function LandingCarousel() {
  const { t } = useTranslation();

  const banner = useSelector((state) => state.banner.value);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
  };

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-right" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-left" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
  const lang = useSelector((state) => state.langReducer?.value);
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    setApiData(banner);
    let x = document.querySelector("title");
    x.textContent = "Jadidlar";
  };
  useEffect(() => {
    fetchData();
  }, [lang, banner]);
  //

  return (
    <div className="londing_home">
      {apiData ? (
        <div className="landing_container">
          <Slider
            {...settings}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {apiData?.results?.map((landingItem) => (
              <div className="landing_content" key={landingItem}>
                <img src={landingItem.image} alt="" />
                <div className="landing_title">
                  <h3>{landingItem.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: landingItem.text.slice(0, 150),
                    }}
                  ></p>
                  <button>
                    <a href={landingItem.citations}>{t("more_")}</a>
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { useSelector } from "react-redux";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/style/block/_slider.scss";
import { useTranslation } from "react-i18next";
import Spinner from "./components/Spinner";

// Install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

function Slider() {
  const { t } = useTranslation();
  const banner = useSelector((state) => state.banner.value);
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
    <div className="home_slider">
      {apiData ? (
        <Swiper
          spaceBetween={30}
          effect="fade"
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="Slider"
        >
          {apiData?.results?.map((landingItem) => (
            <SwiperSlide>
              <div className="landing_content" key={landingItem}>
                <img src={landingItem.image} alt="" />
                <div className="landing_title">
                  <h3 style={{ lineHeight: "80px" }}>{landingItem.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: landingItem.text.slice(0, 150),
                    }}
                  ></p>
                  <button>
                    <a href={landingItem.citations} target="_blank">
                      {t("more_")}
                    </a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Slider;

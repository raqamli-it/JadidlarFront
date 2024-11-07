import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarusel from "../components/components/CardCarusel";
import fakeData from "../data/jadidlar.json";
import { useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Loading from "./components/Loading";
import Spinner from "./components/Spinner";
import { useTranslation } from "react-i18next";
import Empty from "./components/Empty";
import { useSelector } from "react-redux";

export default function CardSLider() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: true,

    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,

    responsive: [
      // {
      //   breakpoint: 1801,
      //   settings: {
      //     slidesToShow: 6,
      //   },
      // },
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 805,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-right1" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-left1" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );

  // bu qism api lar bilan ishlash uchun
  const lang = useSelector((state) => state.langReducer?.value);
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.jadidRandom);
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, [lang]);
  //

  return (
    <>
      <div className="info_carousel container_full">
        <h2>{t("jadidlar_")}</h2>
        {apiData ? (
          <div>
            {apiData?.length > 0 ? (
              <Slider
                {...settings}
                key={apiData?.length}
                watchSlidesProgress={true}
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
              >
                {apiData?.map((item) => (
                  <CardCarusel
                    onClick={() => navigate(`/jadidlar/${item.id}`)}
                    key={item.id}
                    img={item.image}
                    title={item.fullname}
                    brYear={item.birthday}
                    dyYear={item.die_day}
                  />
                ))}
              </Slider>
            ) : (
              <Empty />
            )}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}

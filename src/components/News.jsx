import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsData from "../data/News.json";
import NewsCard from "./components/NewsCard";
import { useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

function News() {
  const navigate = useNavigate();

  var settings = {
    // customPaging: function (i) {
    //   return <div className="custom-dot">{/* Nuqta stilini o'rnating */}</div>;
    // },
    // infinite: true,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
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

  const lang = useSelector((state) => state.langReducer?.value);

  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.news);
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, [lang]);

  return (
    <div className="news-container container_full">
      <Slider
        key={apiData?.results?.length}
        watchSlidesProgress={true}
        {...settings}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {apiData?.results?.slice(0, 15).map((newsItem) => (
          <NewsCard
            onClick={() => navigate(`/yangiliklar/${newsItem.id}`)}
            key={newsItem?.id}
            img={newsItem?.image}
            title={newsItem?.title}
            created_at={newsItem?.created_at}
            link={newsItem?.link}
          />
        ))}
      </Slider>
    </div>
  );
}

export default News;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fakeData from "../../data/Asarlar.json";
import CardCarusel from "../CardCarousel";
import { DataService } from "../../config/dataService";
import { endpoints } from "../../config/endpoints";
import "../../assets/style/block/_homeGallery.scss";
import Spinner from "../components/Spinner";
import Empty from "../components/Empty";

export default function HomeGallery() {
  const navigate = useNavigate();

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.foto);
    console.log("fotolarmiye", response);
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  //

  var settings = {
    dots: true,
    // customPaging: function (i) {
    //   return <div className="custom-dot">{/* Nuqta stilini o'rnating */}</div>;
    // },
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {apiData ? (
        <div>
          {apiData?.results?.length > 0 ? (
            <div className="gallerey-carousel">
              <Slider {...settings}>
                {apiData?.results?.map((item1) => (
                  <div className="gallery" key={item1.id}>
                    <img
                      src={item1.image}
                      onClick={() => navigate(`/suratlar/${item1.id}`)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <Empty />
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { endpoints } from "../../config/endpoints";
import { DataService } from "../../config/dataService";
import { RiPlayCircleLine } from "react-icons/ri";
import Spinner from "../components/Spinner";
import Empty from "../components/Empty";

export default function HomeKoruvlar() {
  const navigate = useNavigate();

  const [apiData, setApiData] = useState();

  const fetchData = async () => {
    const response = await DataService.get(endpoints.video); //endpoint o'zgartirilsin  endpoindi tayyor
    // console.log("bu videolar рўьвфпшқш", response.results);
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  var settings = {
    dots: true,
    // customPaging: function (i) {
    //   return <div className="custom-dot">{/* Nuqta stilini o'rnating */}</div>;
    // },
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 985,
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
            <div className="info_koruvlar">
              <Slider {...settings}>
                {apiData?.results?.slice(0, 15).map((item) => (
                  <div
                    key={item.id}
                    className="poster-home"
                    onClick={() => navigate(`/koʻruvlar/${item.id}`)}
                  >
                    <div
                      className="video-play-foto"
                      style={{
                        backgroundImage: "url(" + `${item?.file}` + ")",
                      }}
                    >
                      <RiPlayCircleLine className="icon-home-video" />
                    </div>
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

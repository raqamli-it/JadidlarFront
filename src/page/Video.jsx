import React, { useState, useEffect } from "react";
import { DataService } from "../config/dataService";
import ReactPlayer from "react-player";
import Menu from "../components/components/Menu";
import { endpoints } from "../config/endpoints";
import { RiPlayCircleLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";

const Video = () => {
  const navigate = useNavigate();
  const route = useParams();
  const [apiData, setApiData] = useState();
  const [apiVideo, setVideo] = useState();
  const [activeId, setActiveId] = useState();
  const [firstData, setFistData] = useState();
  const fetchData = async (id) => {
    const response = await DataService.get(endpoints.video); //endpoint o'zgartirilsin  endpoindi tayyor
    setApiData(response.results);
    let x = document.querySelector("title");
    x.textContent = "Ko'r-Eshit-O'qi / Koʻruvlar";
    if (response.results?.length > 0)
      navigate(`/koʻruvlar/${response.results[0]?.id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const onChangeId = (id) => {
    setActiveId(id);
    navigate(`/koʻruvlar/${id}`);
    setVideo();
  };

  const fetchVideo = async () => {
    const response = await DataService.get(
      endpoints.videoById(activeId ?? route.id)
    ); //endpoint o'zgartirilsin  endpoindi tayyor
    setFistData(response);
  };
  
  useEffect(() => {
    fetchVideo();
  }, [activeId, route.id]);

  // useEffect(() => {
  //   setActiveId(route?.id);
  //   console.log("bu tekshiruv", activeId);
  //   fetchVideo();

  // }, [route?.id]);
  const OnStart = () => {
    if (firstData?.link) {
      // window.location.href = firstData?.link;
      setVideo(firstData);
    } else {
      setVideo(firstData);
    }
  };
  function convertToEmbedLink(link) {
    const videoId = link?.split("v=")[1];
    console.log(videoId);
    if (videoId != undefined) {
      const embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      return embedLink;
    } else return `${link}?autoplay=1`;
  }
  return (
    <div className="video-cont">
      <Menu title="koruvlar_" subtitle={firstData?.title} />

      <div className="big-video-container">
        <div className="vid-container">
          <div className="main-video">
            <div className="video">
              {apiVideo ? (
                apiVideo?.link ? (
                  <iframe
                    src={convertToEmbedLink(apiVideo?.link)}
                    width={"100%"}
                    height={"500px"}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <video controls autoPlay>
                    <source src={apiVideo?.video} type="video/mp4" />
                  </video>
                )
              ) : (
                <div
                  className="poster"
                  style={{
                    backgroundImage: "url(" + `${firstData?.file}` + ")",
                  }}
                >
                  {/* <img src={firstData?.file} width={200} /> sloy */}
                  <div className="video-play-foto" onClick={OnStart}>
                    <RiPlayCircleLine />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="video-list">
            {apiData?.map((item) => (
              <div
                className="vid"
                key={item?.id}
                onClick={() => onChangeId(item.id)}
                style={{
                  background: activeId == item.id ? "#2980b9" : "",
                  color: activeId == item.id ? "#fff" : "",
                }}
              >
                <img src={item.file} alt="" width={150} height={100} />
                {/* <ReactPlayer width={"200px"} height={"160px"} style={{ color: "black" }} url={item.video} className='video' controls autoPlay /> */}
                <h3
                  className="video-title"
                  style={{
                    color: activeId == item.id ? "#fff" : "",
                    textTransform: "initial",
                  }}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

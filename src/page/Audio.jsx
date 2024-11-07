import React, { useEffect, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import Menu from "../components/components/Menu";
import Spinner from "../components/components/Spinner";
import { FaPlay } from "react-icons/fa";
import ReactAudioPlayer from "react-audio-player";

export default function Audios() {
  // Audio api
  const [apiData, setApiData] = useState();
  const [activeAudio, setActiveAudio] = useState();
  const [oldAudio, setoldAudio] = useState();
  const [AudioData, setAudioData] = useState(false);
  const [AudioID, setAudioID] = useState(1);
  const [autoplay, setAutoplay] = useState(false);

  const fetchData = async () => {
    const response = await DataService.get(endpoints.audio);
    setApiData(response);
    console.log("audio,", response);
    let x = document.querySelector("title");
    x.textContent = "Ko'r-Eshit-O'qi / Eshtuvlar";
  };
  useEffect(() => {
    fetchData();
    fetchAudio();
    return () => {
      setoldAudio();
      setActiveAudio();
    };
  }, []);

  const fetchAudio = async (id) => {
    const response = await DataService.get(endpoints.audioById(id ?? 1)); //endpoint o'zgartirilsin  endpoindi tayyor
    setAudioData(response);
    console.log("audioooData", response);
  };

  // useEffect(() => {
  //   fetchAudio();
  // }, [AudioID])
  // const onChangeId = (id) => {

  // };

  // useEffect(() => {
  //   if (oldAudio) {
  //     var x = document.getElementById(oldAudio);
  //     x.autoplay = false;
  //     x.load();
  //   }
  //   if (activeAudio) {
  //     var y = document.getElementById(activeAudio);
  //     y.autoplay = true;
  //     y.load();
  //     setoldAudio(activeAudio);
  //   }
  // }, [activeAudio]);

  // const [links, setLinks] = useState(0)/
  const handleAudioClick = (id) => {
    setAudioID(id);
    // Stop autoplay when user interacts (clicks)
    setAutoplay(true);
  };
  return (
    <div className="container_full">
      {" "}
      <Menu title="eshituvlar_" subtitle={apiData?.title} />
      {apiData ? (
        <div className="eshtvor">
          <div className="box-audio-list">
            <div className="audio-img">
              <img src={AudioData?.image} alt="image" />
              <div className="audio-player" style={{ marginTop: "20px" }}>
                {AudioData && AudioData.audio && (
                  <div>
                    <ReactAudioPlayer
                      className="audio"
                      src={AudioData.audio}
                      controls
                      autoPlay={autoplay}
                      preload="auto"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* active-audio */}

            <ul className="audio-list">
              {apiData?.results.map((audio) => (
                <li
                  onClick={() => {
                    fetchAudio(audio.id), handleAudioClick(audio.id);
                  }}
                  className={
                    AudioID == audio.id ? "active-audio" : "audio-list-item"
                  }
                  key={audio.id}
                >
                  {" "}
                  <span className="audio-id">
                    {" "}
                    <FaPlay />
                  </span>{" "}
                  <span className="audio-play-item">
                    <FaPlay />
                  </span>{" "}
                  <p className="audio-text">{audio.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
      {/*  <div className="audio_container">
      <Menu title="eshituvlar_" subtitle={apiData?.title} />


      {apiData ? (
        <div className="audio_content">
          {apiData?.results.map((audio) => (
            <div className="player active" key={audio?.id}>
              <div className="imgbox">
                <img src={audio.image} alt="" />
              </div>
              <h3>{audio.title}</h3>

              <audio
                src={audio.audio}
                volume="0.5"
                preload="auto"
                // id={`audio${audio?.id}`}
                type="audio/mp3"
                onPlay={() => setActiveAudio(`audio${audio?.id}`)}
                controls
                loop="true"
                controlsList="controls"
              ></audio>
            </div>
          ))}
        </div>
      ) : (
        <Spinner />
      )} 
    </div>*/}
    </div>
  );
}

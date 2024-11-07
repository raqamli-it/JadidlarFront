import React, { useEffect, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { DataService } from "../../config/dataService";
import { endpoints } from "../../config/endpoints";
import Spinner from "../../components/components/Spinner";
import { FaPlay } from "react-icons/fa";
import ReactAudioPlayer from "react-audio-player";
import { useNavigate } from "react-router-dom";

export default function Audio() {
  const navigate = useNavigate();

  // Audio api
  const [apiData, setApiData] = useState();
  const [activeAudio, setActiveAudio] = useState();
  const [AudioData, setAudioData] = useState(false);
  const [oldAudio, setoldAudio] = useState();
  const [AudioID, setAudioID] = useState(1);
  const [autoplay, setAutoplay] = useState(false);
  const fetchData = async () => {
    const response = await DataService.get(endpoints.audio);
    setApiData(response);
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

  const handleAudioClick = (id) => {
    setAudioID(id);
    // Stop autoplay when user interacts (clicks)
    setAutoplay(true);
  };

  return (
    <div className="audio_container">
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
                    fetchAudio(audio.id);
                    handleAudioClick(audio.id);
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
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Menu from "../components/components/Menu";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { DataService } from "../config/dataService";
import { useParams } from "react-router-dom";
import { endpoints } from "../config/endpoints";
import { motion } from "framer-motion";

export default function Foto() {
  const route = useParams();
  const [val, setVal] = useState();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.fotoById(route?.id));
    console.log("fotoNyId", response);
    setApiData(response);
    let x = document.querySelector("title");
    x.textContent = `Ko'r-Eshit-O'qi / Suratlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();
  }, []);

  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="foto_container">
        <Menu title="suratlar_" link="/suratlar" subtitle={apiData?.title} />

        <div className="foto-content">
          <div className="gird-template">
            {apiData?.images?.map((i, j) => (
              <motion.img
                src={i.image}
                alt=""
                className="foto-img "
                key={j}
                onClick={(key) => {
                  setVal(j);
                  console.log(key);
                }}
                initial={{ scale: 0 }}
                animate={{ scale: val == j ? 1.1 : 1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

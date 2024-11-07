import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import Logos from "../assets/images/logoku.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.langReducer.value);

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.footer);
    setApiData(response);

    // console.log("uzb yutqazdik", response);
  };
  const infoFooter = () => {
    Object.keys(apiData?.results[0]).map((key) => {
      return (
        <div className="footer-info-1">
          <h4 className="fi-1">{apiData?.results[0][key]}</h4>
          <a>{key}</a>
        </div>
      );
    });
  };

  useEffect(() => {
    fetchData();
  }, [lang]);
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img
              src={Logos}
              alt="Logo"
              style={{ width: "190px", height: "80px" }}
            />
          </Link>
        </div>
        <div className="footer-info">
          <div className="footer-info-1">
            <h4 className="fi-1">{t("Email")}</h4>
            <a style={{ letterSpacing: "2px" }}>
              {" "}
              {apiData?.results[0]?.Email}
            </a>
          </div>
          <div className="footer-info-1">
            <h4 className="fi-1">{t("phone_")}</h4>
            <a style={{ letterSpacing: "2px" }}>
              {" "}
              {apiData?.results[0]?.Telefon}
            </a>
          </div>
        </div>
        <div className="footer-icons">
          <h4 className="fi-2">{t("network_")}</h4>
          <div className="ft-icons-flex">
            <div className="icons-1">
              <a href={apiData?.results[0]?.Facebook}>
                <FaFacebookF />
              </a>
            </div>
            <div className="icons-1">
              <a href={apiData?.results[0]?.Instagram}>
                <FaInstagram />
              </a>
            </div>
            <div className="icons-1">
              <a href={apiData?.results[0]?.Telegram}>
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-text">
        <p>
          «{t("jadidlar_")}» {t("safe_")}
        </p>
        <p>© Copyright 2024 -</p>
      </div>
    </footer>
  );
};

export default Footer;

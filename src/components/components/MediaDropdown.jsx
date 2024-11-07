import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const MediaDropdown = () => {
  const { t } = useTranslation();
  const [theopen1, settheopen1] = useState(false);
  const [theopen2, settheopen2] = useState(false);
  const [theopen3, settheopen3] = useState(false);
  const [theopen4, settheopen4] = useState(false);
  const [theopen5, settheopen5] = useState(false);
  const [theopen6, settheopen6] = useState(false);

  const handleDropdownClick = (dropdownNumber) => {
    settheopen1(dropdownNumber === 1);
    settheopen2(dropdownNumber === 2);
    settheopen3(dropdownNumber === 3);
    settheopen4(dropdownNumber === 4);
    settheopen5(dropdownNumber === 5);
    settheopen6(dropdownNumber === 6);
  };

  // const handleDropdownToggle = (dropdown) => {
  //   if (dropdown === "dropdown1") {
  //     settheopen1(!theopen1);
  //     settheopen2(false);
  //   } else if (dropdown === "dropdown2") {
  //     settheopen2(!theopen2);
  //     settheopen1(false);
  //   }
  //   // Add more dropdowns as needed
  // };

  return (
    <div className="media-container">
      <div className="media-nn">
        <li>
          <Link to="/jadidlar" className="upper">
            {t("jadidlar_")}
          </Link>
        </li>
      </div>
      <div className="dn-top">
        <div className="dropdown-menu">
          <div
            className="dropdown-menu-btn"
            onClick={() => {
              handleDropdownClick(3);
              settheopen3(!theopen3);
            }}
            open={theopen3}
          >
            {t("manbalar_")}
            <span className={`dn-icon ${theopen3 ? "rotated" : ""}`}>
              <IoIosArrowDown />
            </span>
          </div>
          {theopen3 && (
            <div className="dn-content">
              <ul>
                <li>
                  <Link to="/arxiv_hujjatlar/roʻyxat">{t("arxiv_")}</Link>
                </li>
                <li style={{ paddingBottom: "0" }}>
                  <Link to="/matbuot/tarix">{t("matbuot_")}</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="dropdown-menu">
          <div
            className="dropdown-menu-btn"
            onClick={() => {
              handleDropdownClick(4);
              settheopen4(!theopen4);
            }}
            open={theopen4}
          >
            {t("izlanishlar_")}
            <span className={`dn-icon ${theopen4 ? "rotated" : ""}`}>
              <IoIosArrowDown />
            </span>
          </div>
          {theopen4 && (
            <div className="dn-content">
              <ul>
                <li>
                  <Link to="/izlanishlar/asarlar">{t("asarlar_")}</Link>
                </li>
                <li>
                  <Link to="/izlanishlar/maqolalar">{t("maqolalar_")}</Link>
                </li>
                <li>
                  <Link to="/izlanishlar/dissertatsiyalar">{t("disser_")}</Link>
                </li>
                <li style={{ paddingBottom: "0" }}>
                  <Link to="/izlanishlar/esdaliklar">{t("esdaliklar_")}</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="dropdown-menu">
          <div
            className="dropdown-menu-btn"
            onClick={() => {
              handleDropdownClick(2);
              settheopen2(!theopen2);
            }}
            open={theopen2}
          >
            {t("til_va_imlo_")}
            <span className={`dn-icon ${theopen2 ? "rotated" : ""}`}>
              <IoIosArrowDown />
            </span>
          </div>
          {theopen2 && (
            <div className="dn-content">
              <ul>
                <li>
                  <Link to="/til_va_imlo/asarlar">{t("asarlar_")}</Link>
                </li>
                <li>
                  <Link to="/til_va_imlo/maqolalar">{t("maqolalar_")}</Link>
                </li>
                <li style={{ paddingBottom: "0" }}>
                  <Link to="/til_va_imlo/hikmatlar">{t("hikmatlar_")}</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="dropdown-menu">
          <div
            className="dropdown-menu-btn"
            onClick={() => {
              handleDropdownClick(5);
              settheopen5(!theopen5);
            }}
            open={theopen5}
          >
            {t("turkiston_")}
            <span className={`dn-icon ${theopen5 ? "rotated" : ""}`}>
              <IoIosArrowDown />
            </span>
          </div>
          {theopen5 && (
            <div className="dn-content">
              <ul>
                <li>
                  <Link to="/turkiston_muxtoriyati/asarlar">
                    {t("asarlar_")}
                  </Link>
                </li>
                <li>
                  <Link to="/turkiston_muxtoriyati/maqolalar">
                    {t("maqolalar_")}
                  </Link>
                </li>
                <li>
                  <Link to="/turkiston_muxtoriyati/sherlar">
                    {t("sherlar_")}
                  </Link>
                </li>
                <li style={{ paddingBottom: "0" }}>
                  <Link to="/turkiston_muxtoriyati/esdaliklar">
                    {t("esdaliklar_")}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="dropdown-menu">
          <div
            className="dropdown-menu-btn"
            onClick={() => {
              handleDropdownClick(6);
              settheopen6(!theopen6);
            }}
            open={theopen6}
          >
            {t("voqealar_")}
            <span className={`dn-icon ${theopen6 ? "rotated" : ""}`}>
              <IoIosArrowDown />
            </span>
          </div>
          {theopen6 && (
            <div className="dn-content">
              <ul>
                <li>
                  <Link to="/yangiliklar">{t("yangiliklar_")}</Link>
                </li>
                <li>
                  <Link to="/yigʻinlar">{t("yiginlar_")}</Link>
                </li>
                <li style={{ paddingBottom: "0" }}>
                  <Link to="/seminarlar">{t("seminarlar_")}</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="dropdown-menu">
          <div
            className="dropdown-menu-btn"
            onClick={() => {
              handleDropdownClick(1);
              settheopen1(!theopen1);
            }}
            open={theopen1}
          >
            {t("kor_eshit_oqima_")}
            <span className={`dn-icon ${theopen1 ? "rotated" : ""}`}>
              <IoIosArrowDown />
            </span>
          </div>
          {theopen1 && (
            <div className="dn-content">
              <ul>
                <li>
                  <Link to="/suratlar">{t("suratlar_")}</Link>
                </li>
                <li>
                  <Link to="/koʻruvlar">{t("koruvlar_")}</Link>
                </li>
                <li style={{ paddingBottom: "0" }}>
                  <Link to="/eshituvlar">{t("eshituvlar_")}</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="media-nn pt-f">
        <li>
          <Link to="/biz_haqimizda" className="upper">
            {t("about_")}
          </Link>
        </li>
      </div>
      {/* <ul>
        <li>
          <Link>
            Ko'r-eshit-o'qi{" "}
            <div className="drop-icon">
              <IoIosArrowDown />
            </div>
          </Link>

          <ul className="dropdown-hover">
            <li>
              <Link to="/suratlar">Suratlar</Link>
            </li>
            <li>
              <Link to="/koʻruvlar">Ko'ruvlar</Link>
            </li>
            <li style={{ paddingBottom: "0" }}>
              <Link to="/eshituvlar">Eshituvlar</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link>
            Til va imlo
            <div className="drop-icon">
              <IoIosArrowDown />
            </div>
          </Link>
          <ul className="dropdown-hover">
            <li>
              <Link to="/til_va_imlo/asarlar">Asarlar</Link>
            </li>
            <li>
              <Link to="/til_va_imlo/maqolalar">Maqolalar</Link>
            </li>
            <li style={{ paddingBottom: "0" }}>
              <Link to="/til_va_imlo/hikmatlar">Hikmatlar</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link>
            Manbalar
            <div className="drop-icon">
              <IoIosArrowDown />
            </div>
          </Link>
          <ul className="dropdown-hover">
            <li>
              <Link to="/arxiv_hujjatlar">arxiv_hujjatlar hujjatlari</Link>
            </li>
            <li style={{ paddingBottom: "0" }}>
              <Link to="/matbuot">Matbuot</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link>
            Izlanishlar
            <div className="drop-icon">
              <IoIosArrowDown />
            </div>
          </Link>
          <ul className="dropdown-hover">
            <li>
              <Link to="/izlanishlar/asarlar">Asarlar</Link>
            </li>
            <li>
              <Link to="/izlanishlar/maqolalar">Maqollar</Link>
            </li>
            <li>
              <Link to="/izlanishlar/disertatsiyalar">Dissertatsiyalar</Link>
            </li>
            <li style={{ paddingBottom: "0" }}>
              <Link to="/izlanishlar/estaliklar">Esdaliklar</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link>
            turkiston_muxtoriyati muxtoriyati
            <div className="drop-icon">
              <IoIosArrowDown />
            </div>
          </Link>
          <ul className="dropdown-hover">
            <li>
              <Link to="/turkiston_muxtoriyati/asarlar">Asarlar</Link>
            </li>
            <li>
              <Link to="/turkiston_muxtoriyati/maqolalar">Maqollar</Link>
            </li>
            <li>
              <Link to="/turkiston_muxtoriyati/sherlar">She'rlar</Link>
            </li>
            <li style={{ paddingBottom: "0" }}>
              <Link to="/turkiston_muxtoriyati/esdaliklar">Esdaliklar</Link>
            </li>
          </ul>
        </li>
        <li className="vis-h li">
          <Link>
            Voqealar
            <div className="drop-icon">
              <IoIosArrowDown />
            </div>
          </Link>
          <ul className="dropdown-hover">
            <li>
              <Link to="/yangiliklar">Yangiliklar</Link>
            </li>
            <li>
              <Link to="/meetingsPage">Yig'inlar</Link>
            </li>
            <li style={{ paddingBottom: "0" }}>
              <Link to="/seminarsPage">Seminarlar</Link>
            </li>
          </ul>
        </li>
      </ul> */}
    </div>
  );
};

export default MediaDropdown;

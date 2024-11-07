import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../redux/reduser/lang";
import i18next from "i18next";
import "../assets/style/block/langMedia.scss";

export default function Language() {
  const [active, setActive] = useState(
    localStorage.getItem("JADID_LAN") == "ru"
      ? "Ўз"
      : localStorage.getItem("JADID_LAN") == "en"
      ? "Eng"
      : "O'z"
  );
  const [selectClicked, setSelectClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [caretRotate, setCaretRotate] = useState(false);
  const dispatch = useDispatch();
  const handleSelectClick = () => {
    setSelectClicked(!selectClicked);
    setCaretRotate(!caretRotate);
    setMenuOpen(!menuOpen);
  };
  const handleChange = (value) => {
    dispatch(changeLanguage(value));
    localStorage.setItem("JADID_LAN", value);
    i18next.changeLanguage(value);
    setActive(value == "ru" ? "Ўз" : value == "en" ? "Eng" : "O'z");
  };
  return (
    <div className={`dropdown2 ${selectClicked ? "select-clicked2" : ""}`}>
      <div className="select2" onClick={handleSelectClick}>
        <span className="selected2">{active}</span>
        <div className={`caret2 ${caretRotate ? "caret-rotate2" : ""}`}></div>

        <ul className={`menu2 ${menuOpen ? "menu-open2" : ""}`}>
          <li
            className={active == "O'z" ? "active2" : ""}
            onClick={() => handleChange("uz")}
          >
            O'zbek
          </li>
          <li
            className={active == "Уз" ? "active2" : ""}
            onClick={() => handleChange("ru")}
          >
            Ўзбек
          </li>
          <li
            className={active == "Eng" ? "active" : ""}
            onClick={() => handleChange("en")}
          >
            English
          </li>
        </ul>
      </div>
    </div>
  );
}

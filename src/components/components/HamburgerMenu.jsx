import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";

import MediaDropdown from "./MediaDropdown";
import LanguageMedia from "../LanguageMedia";
import ReactModal from "react-modal";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    setIsOpen(false);
  }, [window.location.pathname]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  // console.log("modal", modalIsOpen);
  // modalni yopish uchun ishlatiladi
  const closeModal = () => setModalIsOpen(false);
  // tokenni o'chirish uchun ishlatiladi
  const onLogout = () => {
    localStorage.removeItem("JADIDLAR_TOKEN");
    setModalIsOpen(false);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="hamburger-icon" onClick={handleToggle}>
        <FaBars />
      </div>
      {isOpen && (
        <aside>
          <ReactModal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            // style={customStyles}
            className="logout_modal"
            contentLabel="Example Modal"
          >
            <h3>Hisobdan chiqmoqchimisiz?</h3>
            <span onClick={closeModal}>X</span>
            <button onClick={onLogout}>Chiqish</button>
          </ReactModal>
          <div className="menu-container">
            <div className="menu-flex">
              <div
                className="menu-lang"
                style={{ display: "flex", gap: "10px" }}
              >
                <LanguageMedia />
                {localStorage.getItem("JADIDLAR_TOKEN") ? (
                  <button
                    className="nav_regis_none"
                    onClick={() => setModalIsOpen(true)}
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <GrLogout style={{ color: "#000" }} />
                  </button>
                ) : (
                  ""
                )}
              </div>
              <button className="menu-close-btn" onClick={handleClose}>
                <IoClose />
              </button>
            </div>
            <hr />
            <ul className="menu-items">
              <div>
                <MediaDropdown />
              </div>
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
};

export default HamburgerMenu;

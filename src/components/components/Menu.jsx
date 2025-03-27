import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Menu({ title, link, subtitle }) {
  console.log(subtitle, "subtitle");

  const { t } = useTranslation();
  return (
    <div className="menu_container">
      <div className="mn_1">
        <p>
          <Link to="/">{t("boshpage_")}</Link>
        </p>
      </div>

      <div className="mn_2">
        <span>/</span>{" "}
      </div>

      <div className="mn_3">
        <p>
          <Link to={link}>{t(title)}</Link>
        </p>
      </div>

      <div className="mn_4">
        <span>/</span>{" "}
      </div>

      <div className="mn_5">
        <p className="page_name">
          <Link to="">{t(subtitle)}</Link>
        </p>
      </div>
    </div>
  );
}

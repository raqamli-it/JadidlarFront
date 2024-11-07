import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import "../../assets/style/block/searchNavbar.scss";

export default function SearchNavbar() {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "search",

      search: createSearchParams({
        title: e.target.SearchInput.value,
      }).toString(),
    });
  };
  return (
    <div className="input-container2">
      <br />
      <form onSubmit={onSubmit}>
        <input placeholder="Qidiruv" type="search" name="SearchInput" />
        <div className="back">
          <button className="modal_search_button" type="submit">
            Qidiruv{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

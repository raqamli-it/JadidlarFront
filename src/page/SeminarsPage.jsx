import React, { useEffect, useState } from "react";
import SeminarsPageStyle from "./SeminarsPageStyle";
import Menu from "../components/components/Menu";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { useParams } from "react-router-dom";
import Spinner from "../components/components/Spinner";
import Pagination from "../components/Pagination";

export default function SeminarsPage() {
  const route = useParams();
  // bu qism api lar bilan ishlash uchun
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.seminarsPage, {
      page: 1,
      limit: 15,
    });
    setApiData(response);
    console.log("seminarsDetail", response.results);
    setApiData(response);
    let x = document.querySelector("title");
    x.textContent = "Voqealar / Seminarlar";
  };

  useEffect(() => {
    fetchData();
  }, []);
  //

  const handleCurrentPage = async (page) => {
    const response = await DataService.get(endpoints.seminarsPage, {
      page: page,
      limit: 15,
    });
    setApiData(response);
  };

  return (
    <div className="news_main">
      <Menu title={"seminarlar_"} link="/seminarlar" />
      {apiData ? (
        <div>
          <SeminarsPageStyle apiData={apiData?.results} link={apiData?.link} />
          <Pagination
            totalItems={apiData?.pagination?.total}
            page={apiData?.pagination?.currentPage || 1}
            currentPage={(e) => handleCurrentPage(e)}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

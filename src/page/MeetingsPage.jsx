import React, { useEffect, useState } from "react";
import MeetingsPageStyle from "./MeetingPageStyle";
import Menu from "../components/components/Menu";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { useParams } from "react-router-dom";
import Spinner from "../components/components/Spinner";
import Pagination from "../components/Pagination";

export default function MeetingsPage() {
  const route = useParams();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.meetingsPage, {
      page: 1,
      limit: 15,
    });
    console.log("meetingsDetail", response);
    setApiData(response);
    console.log("meetingsDetail", response.results);
    setApiData(response);
    let x = document.querySelector("title");
    x.textContent = "Voqealar / Yigʻinlar";
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleCurrentPage = async (page) => {
    const response = await DataService.get(endpoints.meetingsPage, {
      page: page,
      limit: 15,
    });
    setApiData(response);
  };

  return (
    <div className="news_main">
      <Menu title={"yiginlar_"} link="/yigʻinlar" />
      <div className="event_content">
        {apiData ? (
          <div>
            <MeetingsPageStyle
              apiData={apiData?.results}
              link={apiData?.link}
            />
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
    </div>
  );
}

import React, { useEffect, useState } from "react";
// import HomeCard from '../Home/HomeCard';
import { endpoints } from "../../config/endpoints";
import CardAsarlar from "../components/CardAsarlar";
import { DataService } from "../../config/dataService";
import Spinner from "../components/Spinner";
import Empty from "../components/Empty";
import Pagination from "../Pagination";

export default function Collection({ search, url }) {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.collection, {
      // type: "Til va imlo",
      til_va_imlo: true,
      search: search,
      page: 1,
      limit: 15,
    });
    setApiData(response);
    console.log("oqibbatr", response);
  };
  useEffect(() => {
    fetchData();
  }, [search]);
  //
  const handleCurrentPage = async (page) => {
    const response = await DataService.get(endpoints.collection, {
      til_va_imlo: true,
      search: search,
      page: page,
      limit: 15,
    });
    setApiData(response);
  };

  return (
    <div>
      {apiData ? (
        <div className="collection-container">
          {apiData?.results?.length > 0 ? (
            <div>
              <CardAsarlar apiData={apiData?.results} url={url} />
              <Pagination
                totalItems={apiData?.pagination?.total}
                page={apiData?.pagination?.currentPage || 1}
                currentPage={(e) => handleCurrentPage(e)}
              />
            </div>
          ) : (
            <Empty />
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

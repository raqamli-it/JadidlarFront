import React, { useEffect, useState } from "react";
import Empty from "../components/Empty";
import { DataService } from "../../config/dataService";
import { endpoints } from "../../config/endpoints";
import CardAsarlar from "../components/CardAsarlar";
import Spinner from "../components/Spinner";
import Pagination from "../Pagination";

export default function Skaner({ search, url }) {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.arChiveLists, {
      type: "SKANER",
      search: search,
      page: 1,
      limit: 15,
    }); // endpointni almashtirish kere  !!!!
    console.log("Type data filter", response);
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, [search]);

  const handleCurrentPage = async (page) => {
    const response = await DataService.get(endpoints.collection, {
      type: "SKANER",
      search: search,
      limit: 15,
      page: page,
    });
    setApiData(response);
  };

  return (
    <div>
      {apiData ? (
        <div>
          {apiData?.results?.length > 0 ? (
            <div className="collection-container">
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

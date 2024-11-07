import React, { useEffect, useState } from "react";
import Empty from "../components/Empty";
import { DataService } from "../../config/dataService";
import { endpoints } from "../../config/endpoints";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import Pagination from "../Pagination";
import CardAsarlar from "../components/CardAsarlar";

export default function TurkMemories({ search, url }) {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.memories, {
      type: "Turkiston_muxtoriyati",
      search: search,
      page: 1,
      limit: 15,
    });

    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, [search]);
  //
  const handleCurrentPage = async (page) => {
    const response = await DataService.get(endpoints.memories, {
      search: search,
      limit: 15,
      page: page,
      type: "Turkiston_muxtoriyati",
    });
    setApiData(response);
  };

  return (
    <div className="collection-container">
      {apiData ? (
        <div>
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

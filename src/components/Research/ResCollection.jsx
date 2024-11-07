import React, { useEffect, useState } from "react";
// import HomeCard from '../Home/HomeCard';
import { endpoints } from "../../config/endpoints";
import Card from "../components/Card";
import { DataService } from "../../config/dataService";
import Spinner from "../components/Spinner";
import Pagination from "../Pagination";
import Empty from "../components/Empty";
import CardAsarlar from "../components/CardAsarlar";

export default function ResCollection({ search, url }) {
  console.log("ResCollection", url, search);
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.collection, {
      // type: "Tadqiqotlar",
      tadqiqotlar: true,
      search: search,
      page: 1,
      limit: 15,
    }); //endpoint o'zgartirilsin  endpoindi tayyor

    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, [search]);
  //

  const handleCurrentPage = async (page) => {
    const response = await DataService.get(endpoints.collection, {
      tadqiqotlar: true,
      search: search,
      limit: 15,
      page: page,
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

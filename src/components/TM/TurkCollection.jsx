import { endpoints } from "../../config/endpoints";
import Card from "../components/Card";
import { DataService } from "../../config/dataService";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Pagination from "../Pagination";
import Empty from "../components/Empty";
import CardAsarlar from "../components/CardAsarlar";

export default function TurkCollection({ search, url }) {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    setApiData();
    const response = await DataService.get(endpoints.collection, {
      // type: "Turkiston muxtoriyati",
      search: search,
      turkiston_muxtoriyati: true,
      limit: 15,
      page: 1,
    }); //endpoint o'zgartirilsin  endpoindi tayyor

    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, [search]);
  //
  const handleCurrentPage = async (page) => {
    const response = await DataService.get(endpoints.collection, {
      turkiston_muxtoriyati: true,
      search: search,
      page: page,
      limit: 15,
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

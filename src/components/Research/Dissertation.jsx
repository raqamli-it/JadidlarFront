import { endpoints } from "../../config/endpoints";
import CardAsarlar from "../components/CardAsarlar";
import { DataService } from "../../config/dataService";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Pagination from "../Pagination";
import Empty from "../../components/components/Empty";

export default function Disertation({ search, url }) {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.disetations, {
      search: search,
      page: 1,
      limit: 15,
    }); //endpoint o'zgartirilsin  endpoindi tayyor

    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, [search]);

  const handleCurrentPage = async (page) => {
    const response = await DataService.get(endpoints.disetations, {
      search: search,
      limit: 15,
      page: page,
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

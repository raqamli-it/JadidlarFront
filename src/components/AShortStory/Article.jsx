import { endpoints } from "../../config/endpoints";
import CardAsarlar from "../components/CardAsarlar";
import { DataService } from "../../config/dataService";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Pagination from "../Pagination";
import Empty from "../components/Empty";

export default function Article({ search, url }) {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.article, {
      til_va_imlo: true,
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
    const response = await DataService.get(endpoints.article, {
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

import { endpoints } from "../../config/endpoints";
import Card from "../components/Card";
import { DataService } from "../../config/dataService";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Pagination from "../Pagination";
import Empty from "../components/Empty";
import CardAsarlar from "../components/CardAsarlar";

export default function TurkArticle({ search, url }) {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.article, {
      // type: "Turkiston muxtoriyati",
      turkiston_muxtoriyati: true,
      search: search,
      limit: 15,
      page: 1,
    });

    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, [search]);
  //
  const handleCurrentPage = async (page) => {
    const response = await DataService.get(endpoints.article, {
      turkiston_muxtoriyati: true,
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

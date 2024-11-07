import React from "react";
import { endpoints } from "../../config/endpoints";
import Card from "../components/Card";
import { DataService } from "../../config/dataService";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Empty from "../components/Empty";
import { useSelector } from "react-redux";
import Pagination from "../Pagination";
export default function WiseWords({ search }) {
  const lang = useSelector((state) => state.langReducer?.value);

  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.wisewords, {
      page: 1,
      limit: 15,
      search: search,
    });
    console.log("HIKMAT", response.results);
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, [lang, search]);
  //
  const handleCurrentPage = async (page) => {
    const response = await DataService.get(endpoints.wisewords, {
      search: search,
      page: page,
      limit: 15,
    });
    setApiData(response);
  };

  return (
    <>
      {apiData ? (
        <div className="cardMaqolalar">
          {apiData?.results?.length > 0 ? (
            <div>
              {apiData?.results?.map((data) => (
                <div>
                  <div className="card-maqola-item" key={data.id}>
                    <p
                      className="maqola-title"
                      dangerouslySetInnerHTML={{ __html: data.text }}
                    ></p>
                    <span className="maqola-author">
                      {data?.jadid_fullname}
                    </span>
                  </div>
                </div>
              ))}
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
    </>
  );
}

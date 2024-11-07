import React, { useEffect, useRef, useState } from "react";
import Menu from "../components/components/Menu";
import Search from "../components/components/Search";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import Spinner from "../components/components/Spinner";
import dateFormat from "dateformat";
import { useNavigate } from "react-router";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";
import Empty from "../components/components/Empty";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export default function JadidlarAll() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const lang = useSelector((state) => state.langReducer.value);
  const [searchParams, setSearchParams] = useSearchParams();

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.jadidlar, {
      page: searchParams.get("page") ?? 1,
      limit: 15,
    });
    setApiData(response);
    let x = document.querySelector("title");
    x.textContent = "Jadidlar";
  };

  useEffect(() => {
    fetchData();
  }, [lang]);
  //

  const handleCurrentPage = async (page) => {
    setSearchParams({ page: page });
    const response = await DataService.get(endpoints.jadidlar, {
      limit: 15,
      page: page,
    });
    setApiData(response);
  };
  const onSearch = async (value) => {
    setApiData();
    const response = await DataService.get(endpoints.jadidlar, {
      search: value,
    });

    setApiData(response);
  };
  return (
    <div className="jadidlar_container container_full">
      <Menu title="jadidlar_" />
      <Search onSearch={onSearch} />
      <br />
      <br />

      {/* {apiData ? <Card apiData={apiData} /> : <Spinner />} */}

      {apiData ? (
        <div>
          {apiData?.results?.length > 0 ? (
            <div>
              <div className="jadid_cards">
                {apiData?.results?.map((jadidlarAll) => (
                  <div
                    className="card_carusel cc_height"
                    key={jadidlarAll.id}
                    onClick={() => navigate(`/jadidlar/${jadidlarAll.id}`)}
                  >
                    <div className="card_carusel_img">
                      <img src={jadidlarAll.image} alt="las vegas" />
                    </div>
                    <div className="height">
                      <div className="card_carusel_body">
                        <h3>{jadidlarAll.fullname}</h3>
                        {jadidlarAll.birthday || jadidlarAll.die_day ? (
                          <p className="jd_p">
                            (
                            {jadidlarAll.birthday
                              ? dateFormat(jadidlarAll.birthday, "yyyy")
                              : "?"}{" "}
                            —{" "}
                            {jadidlarAll.die_day
                              ? dateFormat(jadidlarAll.die_day, "yyyy")
                              : "?"}
                            )
                          </p>
                        ) : (
                          <div
                            className="jd_p"
                            style={{ color: "#fff", fontWeight: "700" }}
                          >
                            ( {t("unknown_")} )
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  // <div
                  //   key={jadidlarAll.id}
                  //   className="jadids_card"
                  //   onClick={() => navigate(`/jadidlar/${jadidlarAll.id}`)}
                  // >
                  //   <img src={jadidlarAll.image} alt="las vegas" />
                  //   <div className="jadid_intro">
                  //     <div className="jadid_intro_height">
                  //       <h3>{jadidlarAll.fullname}</h3>
                  //       {jadidlarAll?.birthday && jadidlarAll?.die_day ? (
                  //         <p>
                  //           ({dateFormat(jadidlarAll.birthday, "yyyy")} —
                  //           {dateFormat(jadidlarAll.die_day, "yyyy")})
                  //         </p>
                  //       ) : (
                  //         <div style={{ color: "#742d2d", fontWeight: "700" }}>
                  //           ( {t("unknown_")} )
                  //         </div>
                  //       )}
                  //     </div>
                  //   </div>
                  // </div>
                ))}
              </div>
              <br />
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

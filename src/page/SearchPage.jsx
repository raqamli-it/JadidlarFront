import React, { useEffect, useState } from "react";
import Search from "../components/components/Search";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import Empty from "../components/components/Empty";

import dateFormat from "dateformat";
import CardAsarlar from "../components/components/CardAsarlar";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function SearchPage() {
  const lang = useSelector((state) => state.langReducer.value);
  const { t } = useTranslation();
  const navigate = useNavigate();

  let x = document.querySelector("title");
  x.textContent = "Qidiruv natijalari";
  const [searchParams, setSearchParams] = useSearchParams();
  const [apiData, setApiData] = useState();
  const [newsData, setNewsData] = useState();

  const fetchData = async () => {
    const response = await DataService.get(
      endpoints.search(searchParams.get("title"))
    );
    console.log("search, qildug mamamamamamamama", response);
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, [searchParams.get("title"), lang]);
  console.log(searchParams.get("title"));
  return (
    <div className="search_page">
      <h1>
        Qidiruv natijalari:{" "}
        <span style={{ color: "#143d8f" }}>{searchParams.get("title")}</span>
      </h1>
      <div>
        <section>
          <h1
            style={{
              borderBottom: "1px solid #ccc",
              padding: 20,
              color: "#223b6d",
            }}
          >
            Yangiliklar
          </h1>
          {apiData?.yangi?.length > 0 ? (
            <div className="newsPage_container">
              {apiData?.yangi.map((data) => (
                <Link
                  to={`/yangiliklar/${data.id}`}
                  className="news_small"
                  key={data?.id}
                >
                  <div className="news_content">
                    <div className="news_small_img">
                      <img src={data?.image} />
                    </div>
                    <div className="news_small_text">
                      <div className="news_small_text_title">
                        <h3>{data?.title}</h3>
                      </div>
                    </div>
                    <div className="news_flex_style">
                      <div className="news_small_text_date">
                        <p>{dateFormat(data?.created_at, "dd.mm.yyyy")}</p>
                      </div>
                      <div className="news_button_style">
                        <button>{t("more_")}</button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      </div>

      <div>
        <h1
          style={{
            borderBottom: "1px solid #ccc",
            padding: 20,
            color: "#223b6d",
          }}
        >
          Asarlar
        </h1>
        <div>
          {apiData?.asar?.length > 0 ? (
            <div className="card-body">
              <div>
                <CardAsarlar apiData={apiData?.asar} url="asarlar" />
                {/* {apiData?.asar.map((data) => (

                  <Link href={data.file} target="_blank" key={data.id}>
                    <div className="card card1">
                      <div className="container2">
                        <img src={data.image} alt="las vegas" />
                      </div>
                      <div className="details">
                        <h4>{data.jadid_fullname}</h4>
                        <h4>{data.title}</h4>
                        {(data?.brYear || data?.dyYear) && (
                          <p>
                            ({data.brYear} — {data.dyYear})
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))} */}
              </div>
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </div>

      <div>
        <h1
          style={{
            borderBottom: "1px solid #ccc",
            padding: 20,
            color: "#223b6d",
          }}
        >
          Jadidlar
        </h1>
        {apiData?.jadid?.length > 0 ? (
          <div>
            <div className="cards">
              {apiData?.jadid.map((jadidlarAll) => (
                <div
                  key={jadidlarAll.id}
                  className="card card1"
                  onClick={() => navigate(`/jadidlar/${jadidlarAll.id}`)}
                >
                  <div className="container2">
                    <img src={jadidlarAll.image} alt="las vegas" />
                  </div>
                  <div className="details">
                    <h3>{jadidlarAll.fullname}</h3>
                    {(jadidlarAll?.birthday || jadidlarAll?.die_day) && (
                      <p>
                        ({dateFormat(jadidlarAll.birthday, "yyyy")} —{" "}
                        {dateFormat(jadidlarAll.die_day, "yyyy")})
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Empty />
        )}
      </div>

      <div>
        <h1
          style={{
            borderBottom: "1px solid #ccc",
            padding: 20,
            color: "#223b6d",
          }}
        >
          Maqolalar
        </h1>
        {apiData?.asar?.length > 0 ? (
          <div>
            <div>
              <CardAsarlar apiData={apiData?.maqola} url={"maqolalar"} />
              {/* {apiData?.maqola.map((jadidlarAll) => (
                <div
                  key={jadidlarAll.id}
                  className="card card1"
                >
                  <div className="container2">
                    <img src={jadidlarAll.image} alt="las vegas" />
                  </div>
                  <div className="details">
                    <h3>{jadidlarAll.title}</h3>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        ) : (
          <Empty />
        )}
      </div>

      <div>
        <h1
          style={{
            borderBottom: "1px solid #ccc",
            padding: 20,
            color: "#223b6d",
          }}
        >
          Hikmatli So'zlar
        </h1>

        {apiData?.hikmat?.length > 0 ? (
          <div className="cardMaqolalar">
            {apiData?.hikmat.map((data) => (
              <div className="card-maqola-item" key={data.id}>
                <p
                  className="maqola-title"
                  dangerouslySetInnerHTML={{ __html: data.text }}
                ></p>
                <span className="maqola-author">{data?.jadid_fullname}</span>
              </div>
            ))}
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}

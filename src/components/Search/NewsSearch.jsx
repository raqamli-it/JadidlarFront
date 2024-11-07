import React from 'react'
import Empty from '../components/Empty';
import { Link } from 'react-router-dom';

export default function newSearch({ key, img, title, text, date }) {
  { console.log("ichida donak borakan", data); }
  return (
    <div className="newsPage_container">
      {apiData?.yangi ? apiData?.yangi.map((data) => (
        <Link
          // to={`/newsDetail/${data.id}`}
          className="news_small"
          key={data?.id}
        >
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
              {/* <p>{dateFormat(data?.created_at, "mm.dd.yyyy")}</p> */}
            </div>
            <div className="news_button_style">
              <button>Batafsil</button>
            </div>
          </div>
        </Link>
      )) : <Empty />}
    </div>
  )
}

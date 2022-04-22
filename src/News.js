import "./News.css";
import bunga from "./bunga.jpg";
import ktb from "./ktb.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const News = (params) => {
  const [DataResponse, setDataResponses] = useState(0);
  const axios = require("axios");

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/news?instansi_id=9")
      .then(function (response) {
        setDataResponses(response.data.data.data);
        console.log(response.data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h2>
        Berita <span className="terbaru">Terbaru</span> __
      </h2>
      {DataResponse &&
        DataResponse.map((item, index) => {
          return (
            <div className="blog-card" key={index}>
              <div className="meta">
                <img src={item.image_file_data} alt={item.title} className="bunga"></img>
                <ul className="details">
                  <li className="author">
                    <a href="#"></a>
                  </li>
                  <li className="date"></li>
                  <li className="tags">
                    <ul>
                      <li>
                        <a href="#"></a>
                      </li>
                      <li>
                        <a href="#"></a>
                      </li>
                      <li>
                        <a href="#"></a>
                      </li>
                      <li>
                        <a href="#"></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="description">
                <h1>{item.title}</h1>
                <h2>{item.news_category_id}</h2>
                <p> {item.intro}</p>
                <p className="read-more">
                  <Link to={`/news/${item.id}`}>Read more</Link>
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

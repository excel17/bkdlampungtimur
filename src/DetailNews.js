import orang from "./orang.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const DetailNews = (params) => {
  const [DataResponse, setDataResponses] = useState(0);
  const { id } = useParams();
  // console.log("ini id = ", id);
  const axios = require("axios");

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/news/" + id)
      .then(function (response) {
        setDataResponses(response.data.data);
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div>
        <div>
          <h1>{DataResponse.title}</h1>
        </div>

        <img src={DataResponse.image_file_data} alt={DataResponse.title} className="lahhh"></img>

        <p dangerouslySetInnerHTML={{ __html: DataResponse.content }}></p>
      </div>
    </div>
  );
};

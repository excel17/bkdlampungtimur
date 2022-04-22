import { useEffect, useState } from "react";

export const Videogallery = (params) => {
  const [DataResponse, setDataResponses] = useState(null);

  // console.log("ini id = ", id);
  const axios = require("axios");

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=9")
      .then(function (response) {
        setDataResponses(response.data.data.data);
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {DataResponse &&
        DataResponse.map((item, index) => {
          return item.image_gallery_item.map((itm, idx) => {
            return (
              <div key={idx}>
                <iframe type="text/html" style={{ width: "50%", height: "50%" }} src={`https://www.youtube.com/embed/${itm.video_url}`} frameborder="0"></iframe>
              </div>
            );
          });
        })}
    </div>
  );
};

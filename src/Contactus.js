import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const Contactus = (params) => {
  const [DataResponse, setDataResponses] = useState(0);
  const { id } = useParams();
  // console.log("ini id = ", id);
  const axios = require("axios");

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/instansi/detail/9")
      .then(function (response) {
        setDataResponses(response.data.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div>
        <div>
          <h2 className="kon">{DataResponse.email}</h2>
          <h2 className="tak">{DataResponse.nomor_telepon}</h2>
          <iframe className="lokasi" src={DataResponse.google_map} width="100%" height="250" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <p dangerouslySetInnerHTML={{ __html: DataResponse.content }}></p>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import moment from "moment";
export const Dokumen = (params) => {
  const [DataResponse, setDataResponses] = useState();
  const axios = require("axios");
  useEffect(() => {
    console.log("hit");
    axios
      .get("http://adminmesuji.embuncode.com/api/dokumen?instansi_id=9")
      .then(function (response) {
        console.log("Response " + response.data);
        setDataResponses(response.data.data.data);
        // setDataResponses("test");
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Dokumen</h1>
      {console.log("saa", +DataResponse)}
      {DataResponse &&
        DataResponse.map((item, index) => {
          return item.dokumen_item.map((itm, idx) => {
            return (
              <Row>
                <Col sm={12} md={4} lg={12} key={idx} className="wrapper-pdf">
                  <Link to={"/pdftest/" + item.slug.replace(/\s/g, "")} className="content-pdf">
                    <i className="fa-solid fa-file-pdf"></i>
                    <div className="content-meta-pdf">
                      <div className="item-pdf">
                        <h5>{itm.dokumen_file_name}</h5>
                        <p>{itm.description_dokumen}</p>
                        <div className="item-pdf-info">
                          <span className="info-pdf">{moment(itm.created_at).format("ll")}</span>
                          <span className="info-pdf info-right">{item.created_by}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            );
          });
        })}
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
      </Card.Body>
    </div>
  );
};

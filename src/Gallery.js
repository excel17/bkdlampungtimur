import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import satu from "./ke.jpg";
import dua from "./gi.jpg";
import tiga from "./a.jpg";
import empat from "./tan.jpg";
import maju from "./be.jpg";
import mundur from "./ka.jpg";
import belakang from "./de.jpg";
import fresh from "./fresh.jpeg";
import brown from "./brown.jpg";
import teh from "./teh.jpg";

export const Gallery = (params) => {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
  };
  return (
    <div>
      <h1 className="fotoo">Gallery Kegiatan</h1>
      <div className="fotogallery row">
        <div className="col-md-4">
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={satu}>
              <img className="pad" alt="kegiatan" src={satu} />
            </a>
          </LightGallery>
        </div>
        <div className="col-md-4">
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={empat}>
              <img className="ke" alt="iya " src={empat} />
            </a>
          </LightGallery>
        </div>
        <div className="col-md-4">
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={empat}>
              <img className="think" alt="iya " src={empat} />
            </a>
          </LightGallery>
        </div>
      </div>
      <div className="fotogallery row">
        <div className="col-md-4">
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={satu}>
              <img className="lap" alt="kegiatan" src={maju} />
            </a>
          </LightGallery>
        </div>
        <div className="col-md-4">
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={empat}>
              <img className="ke" alt="iya " src={mundur} />
            </a>
          </LightGallery>
        </div>
        <div className="col-md-4">
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={empat}>
              <img className="top" alt="iya " src={belakang} />
            </a>
          </LightGallery>
        </div>
      </div>
      <div className="fotogallery row">
        <div className="col-md-4">
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={satu}>
              <img className="seger" alt="kegiatan" src={fresh} />
            </a>
          </LightGallery>
        </div>
        <div className="col-md-4">
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={empat}>
              <img className="ke" alt="enak " src={brown} />
            </a>
          </LightGallery>
        </div>
        <div className="col-md-4">
          <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide}>
            <a href={empat}>
              <img className="top" alt="iya " src={teh} />
            </a>
          </LightGallery>
        </div>
      </div>
    </div>
  );
};

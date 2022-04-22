import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./App.css";
import gambar from "./Ltimur.png";
import waitem from "./waitem.webp";
import gambar3 from "./pesan.png";
import gambarpenes from "./bkd.jpg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import gambarpegawai from "./pegawai.jpg";
import gambarpegawai2 from "./patung.jpg";
import gambarpegawai3 from "./itu.jpeg";
import logolawancovid from "./logolawancovid.jpg";
import logojdih from "./logojdih.png";
import logolaporanonlinerakyat from "./logolaporanonlinerakyat.jpg";
import gambarcuaca from "./logocuaca.jpg";
import gambarcuacahari from "./logocuaca.jpg";
import logobps from "./logobps.png";
import salam from "./salam.jpg";
import bapak from "./bapak.jpg";
import satu from "./ke.jpg";
import dua from "./gi.jpg";
import tiga from "./a.jpg";
import empat from "./tan.jpg";
import maju from "./be.jpg";
import mundur from "./ka.jpg";
import belakang from "./de.jpg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

export const Home = (params) => {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
  };
  const [DataResponse, setDataResponses] = useState(0);
  const axios = require("axios");

  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/news?instansi_id=9&per_page=2")
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
      <Carousel>
        <Carousel.Item>
          <img src={gambarpegawai} alt="..." className="fotopegawai"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={gambarpegawai2} alt="..." className="fotopegawai"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={gambarpegawai3} alt="..." className="fotopegawai"></img>
        </Carousel.Item>
      </Carousel>
      {/* Akhir Slider Poto */}
      <div className="headerberita">
        <h2>
          Berita <span className="terbaru">Terbaru</span> __
        </h2>
      </div>

      <div className="portalberita row">
        <div className="col-md-8">
          <div className="row">
            {DataResponse &&
              DataResponse.map((item, index) => {
                return (
                  <div className="col-md-6" key={{ index }}>
                    <Card style={{ width: "22rem" }}>
                      <img src={item.image_file_data} alt={item.title} className="penes"></img>
                      <Card.Body>
                        <Card.Text className="kiriin">{item.created_at} | Berita Terbaru</Card.Text>
                        <Card.Title className="anjay">{item.title}</Card.Title>
                        <Card.Text className="ketpns">{item.intro}</Card.Text>
                        <Link to={`/news/${item.id}`}> Baca Lebih</Link>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>

        {/* {header} */}

        <div className="col-md-4">
          <ListGroup>
            <ListGroup.Item>
              <h5 className="naikpangkat">Syarat Kenaikan Pangkat Periode April 2022</h5>
              <span className="turunpangkat">11 Februari 2022</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5 className="naikpangkat">Berita Yang Ada Pada Tahun 2022 Tentang Badan Kepegawaian Daerah</h5>
              <span className="turunpangkat">11 Februari 2022</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5 className="naikpangkat">Syarat dan ketentuan PNS agar bisa mengikuti Kuliah lagi</h5>
              <span className="turunpangkat">11 Februari 2022</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5 className="naikpangkat">8 Sekolah Kedinasan CPNS Resmi dibuka besok pagi, Ini alur dan syaratnya</h5>
              <span className="turunpangkat">11 Februari 2022</span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      {/* Support Us */}
      <div className="supportus">
        <div className="row">
          <div className="col-md-3">
            <img src={logolawancovid} alt="..." className="logolawancovid"></img>
          </div>
          <div className="col-md-3">
            <img src={logojdih} alt="..." className="logolawancovid"></img>
          </div>
          <div className="col-md-3">
            <img src={logolaporanonlinerakyat} alt="..." className="laporanrakyat"></img>
          </div>
          <div className="col-md-3">
            <img src={logobps} alt="..." className="logolawancovid"></img>
          </div>
        </div>
      </div>
      {/* Akhir Support Us */}
      {/* Info cuaca berita umum kepala badan */}
      <div className="icbukb">
        <div className="row infocuaca">
          <div className="col-md-4">
            <h4 className="kucing">Info Cuaca __</h4>
            <a class="weatherwidget-io" href="https://forecast7.com/en/n5d11105d69/east-lampung-regency/" data-label_1="LAMPUNG TIMUR" data-label_2="WEATHER" data-theme="original">
              LAMPUNG TIMUR WEATHER
            </a>
            {/* info gempa */}
            <div className="infogempa">
              <h4>Info Gempa __</h4>
              <div className="row">
                <div className="col-md-6">
                  <a href="https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg">
                    <Button className="btnbiru" variant="primary">
                      Temperatur
                    </Button>
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg">
                    <Button className="putihbiru" variant="outline-primary">
                      Dirasakan
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="headerberitaumum">Berita Umum __</h4>
            <Card className="beritaumum" style={{ width: "25rem" }}>
              <img className="bersalaman" src={salam} alt="..."></img>
              <Card.Body>
                <Card.Title className="iya">Forum Perangkat Daerah Bidang Kepegawaian</Card.Title>
                <Card.Text className="iya">21 Februari 2022</Card.Text>
              </Card.Body>
            </Card>
            <ListGroup className="beritaumumlg">
              <ListGroup.Item>
                <h5>Pemkab Tulang Bawang terima penghargaan BKN</h5>
                <span>12 Februari 2022 | Berita Umum</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Patroli Terpadu Peningkatan Disiplin dan Prokes</h5>
                <span>13 Februari 2022 | Berita Umum</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>BKD Lampung Timur Salurkan Bantuan Sembako</h5>
                <span>14 Februari 2022 | Berita Umum</span>
              </ListGroup.Item>
            </ListGroup>
            <div className="pemerintahkabupaten">
              <h3 className="headerpemkab">
                Pemerintah <span className="kabupaten">Kabupaten</span>
              </h3>
              <ListGroup className="pemkablg">
                <ListGroup.Item>
                  <h5>Penandatanganan Perjanjian Kerjasama Pendataan</h5>
                  <span>21 Februari 2022 | Badan kepegawaian Daerah</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Pemkab Lampung Timur Raih Predikat Kepatuhan Tinggi</h5>
                  <span>20 Februari 2022 | Badan kepegawaian Daerah</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>PKS Pemanfaatan Data Kependudukan Penerbitan Akta</h5>
                  <span>19 Februari 2022 | Badan kepegawaian Daerah</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Bupati Lampung Timur Menghadiri Acara Pelantikan</h5>
                  <span>18 Februari 2022 | Dinas Kependudukan dan Catatan Sipil</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Workshop Peningkatan Kapasitas Lampung Timur</h5>
                  <span>17 Februari 2022 | Dinas Pertanian</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Pelantikan Ketua Pengadilan Negeri Menggala</h5>
                  <span>16 Februari 2022 | Pemerintah Kabupaten</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Bupati Lampung Timur inginkan Sinergita</h5>
                  <span>15 Februari 2022 | Pemerintah Kabupaten</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Bupati Pimpin Rakor Dengan Para Camat dan Ka. P</h5>
                  <span>14 Februari 2022 | Pemerintah Kabupaten</span>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="col-md-2">
            <div className="row">
              <div className="col-md-6">
                <span className="anjing">Kepala</span>
              </div>
              <div className="col-md-6">
                <span className="nescafe">Badan</span>
              </div>
            </div>
            <img className="bapakke" src={bapak} alt="..."></img>
            <ListGroup.Item className="geser">Pengumuman_</ListGroup.Item>
            <ListGroup.Item className="geser">Publikasi_</ListGroup.Item>
            <ListGroup.Item className="geser">Komunitas_</ListGroup.Item>
            {/* Jumlah Pengunjung */}
            <div className="jumlahpengunjung">
              <ListGroup className="jumlahpengunjunglg">
                <ListGroup.Item className="jmlhpengunjung">
                  <span>--Jumlah Pengunjung--</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="hari">Hari Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angka">1</span>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="minggu">Minggu Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angka">2</span>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="bulan">Bulan Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angkabulan">19</span>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="tahun">Tahun Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angkatahun">46</span>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div className="jumlahpengunjung">
              <ListGroup className="jumlahpengunjunglg">
                <ListGroup.Item className="jmlhpengunjung">
                  <span>--Hit Pengunjung--</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="hari">Hari Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angka">8</span>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="minggu">Minggu Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angka">9</span>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="bulan">Bulan Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angkabulan">40</span>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="tahun">Tahun Ini</span>
                    </div>
                    <div className="col-md-6">
                      <span className="angkatahun">95</span>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
            {/* Akhir Jumlah Pengunjung */}
          </div>
        </div>
      </div>
      {/* Akhir Info cuaca berita umum kepala badan */}
      {/* Gallery */}
      <div className="cimory">
        <h3 className="gallerystyle">
          Gallery <span className="terbaru">Kegiatan</span> __
        </h3>
      </div>
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
      {/* Akhir Gallery */}
      <div className="videokegiatan">
        <h1 className="kapalapi">Video Kegiatan</h1>
        <ul className="gallery">
          <li>
            <a href="#">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bD_Zk-nmes4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <span className="name">
                <span className="title"></span>
              </span>
            </a>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VzhLBaaBlQ0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/phm7N1M6yyQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
        </ul>
        <ul className="gallery">
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eBwHhq4bxhs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Bo7LNQeYxtg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ei5bO4A9LkE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
        </ul>
      </div>
    </div>
  );
};

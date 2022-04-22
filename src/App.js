import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./App.css";
import gambar from "./Ltimur.png";
import gambar2 from "./download.png";
import gambar3 from "./pesan.png";
import gambarpenes from "./bkd.jpg";
import Nav from "react-bootstrap/Nav";
import { Home } from "./Home";
import { Gallery } from "./Gallery";
// import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import gambarpegawai from "./pegawai.jpg";
import waitem from "./waitem.webp";
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
import orang from "./orang.jpg";
import { News } from "./News";
import { DetailNews } from "./DetailNews";
import { PdfView } from "./PdfView";
import { Navbars } from "./Navbars";
import { Contactus } from "./Contactus";
import { Videogallery } from "./Videogallery";
import { Dokumen } from "./Dokumen";
import { Staticpage } from "./Staticpage";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

function App() {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
  };
  return (
    <div className="App">
      {/* {header} */}
      <div className="top-info">
        <div className="header">
          <div className="row">
            <div className="col-md-6">
              <p className="welcome">Selamat Datang | Badan Kepegawaian Daerah Lampung Timur</p>
            </div>
            <div className="col-md-6 sos">
              <a href="https://www.instagram.com/bkd.lampung/">
                <i className="instagram fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <a href="https://www.facebook.com/ProvLampungBKD/">
                  <i class="facebook fa-brands fa-facebook"></i>
                </a>
              </a>
              <a href="#">
                <a href="https://www.youtube.com/channel/UCA6LO_U0FliBRm3oocN1d5A">
                  <i class="youtube fa-brands fa-youtube"></i>
                </a>
              </a>
            </div>
          </div>
        </div>
        <div className="text">
          <p>Selamat Datang di Badan Kepegawaian Daerah Lampung Timur, Sejahtera Selalu!</p>

          <div className="row">
            <div className="col-md-4">
              <img src={gambar} alt="..." className="kabupaten"></img>
              <span className="keteranganlogo"> Badan Kepegawaian Daerah</span>
            </div>
            <div className="col-md-4">
              <img src={waitem} alt="..." className="wa"></img>
              <span className="waitem"> Call Us? 089777775656</span>
            </div>
            <div className="col-md-4">
              <img src={gambar3} alt="..." className="pesan"></img>
              <span className="keteranganemail"> yahahahawahyu@GMAIL.COM</span>
            </div>
          </div>
        </div>
      </div>
      {/* <Navbar className="nav" bg="dark" variant="blue">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Pengaduan" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Test">Layanan Publik</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="#test">Informasi</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="#test">Contact Us</Nav.Link>
            <Nav.Link href="#test">PPID Pembantu</Nav.Link>
            <Nav.Link href="#test">Profil SKPD</Nav.Link>
            <Nav.Link href="#test">BIDANG 2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <Navbars />
      {/* Slider Poto */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<DetailNews />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/videoGallery" element={<Videogallery />} />
        <Route path="/dokumen" element={<Dokumen />} />
        <Route exact path="/pdftest/:id" element={<PdfView />} />
        <Route path="static/:id" element={<Staticpage />} />
      </Routes>

      <div className="pengaduanmasyarakat">
        <div className="row">
          <div className="col-md-4">
            <h2>
              Pengaduan <span className="masyarakat">Masyarakat __</span>
            </h2>
          </div>
          <div className="col-md-4">
            <img className="telponpm" src={gambar2} alt="..."></img>
            <span className="kettelponpm">Call Us (08120000000)</span>
          </div>
          <div className="col-md-4">
            <img className="emailpm" src={gambar3} alt="..."></img>
            <span className="ketemailpm">Email Us (yahahahawahyu@mail.com)</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h5 className="tentang">Tentang Kami</h5>
        </div>
        <div className="col-md-4">
          <h5 className="maps">Maps</h5>
          <iframe
            className="lokasi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.3585444115915!2d105.51957701429966!3d-5.045485952698126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4090a2e5e14215%3A0x2dd87cc482d84e66!2sBkdd%20Lampung%20Timur!5e0!3m2!1sid!2sid!4v1646113096246!5m2!1sid!2sid"
            width="100%"
            height="250"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-md-4">
          <h5 className="bukutamu">Buku Tamu</h5>
          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <hr></hr>
        <p>Copyright © Diskominfo All Rights Reserved 2022</p>
      </footer>
      {/* Akhir Footer */}
    </div>
  );
}

export default App;

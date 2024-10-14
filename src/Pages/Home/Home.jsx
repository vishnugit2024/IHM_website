import React, { useState, useEffect } from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import sliderImage1 from "../../Assets/WardrobeBanner.png";
import sliderImage2 from "../../Assets/slide2.avif";
import sliderImage3 from "../../Assets/slide3.jpg";
import sliderImage4 from "../../Assets/Furniturebanner.png";
import kitchen1 from "../../Assets/kitchen1.jpg";
import kitchen3 from "../../Assets/kitchen13.jpg";
import kitchen4 from "../../Assets/kitchen19.jpg";
import kitchen29 from "../../Assets/kitchen29.jpg";
import Wardrobeimg1 from "../../Assets/Wardrobe1.jpg";
import HIngedWard3 from "../../Assets/HInged-Ward3.webp";
import PANELSLIDING1 from "../../Assets/PANEL SLIDING1.jpg";
import SIMPLEWHITE1 from "../../Assets/SIMPLE WHITE1.jpg";
import CROCKERY4 from "../../Assets/CROCKERY CABINET4.png";
import CROCKERY2 from "../../Assets/CROCKERY CABINET2.png";
import Entertainment2 from "../../Assets/ENTERTAINMENT UNIT2.jpg";
import Entertainment3 from "../../Assets/ENTERTAINMENT UNIT3.jpg";
import Study3 from "../../Assets/STUDY UNIT3.jpeg";
import Study4 from "../../Assets/STUDY UNIT4.jpg";
import WINE3 from "../../Assets/WINE CABINETS3.jpg";
import WINE4 from "../../Assets/WINE CABINETS4.jpg";
import ourservice1 from "../../Assets/ourservice1.png";
import ourservice2 from "../../Assets/ourservice2.png";
import ourservice3 from "../../Assets/ourservice3.png";
import Component1 from "../../Assets/Component1.png";
import Component2 from "../../Assets/Component2.png";
import Component3 from "../../Assets/Component3.png";
import Component4 from "../../Assets/Component4.png";
import Work2 from "../../Assets/Work2.png";
import Work4 from "../../Assets/Work4.png";
import slide1 from "../../Assets/downslider1.png";
import slide2 from "../../Assets/downslider2.png";
import slide3 from "../../Assets/downslider3.png";
import Slider from "react-slick";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleShowModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const downslide = [
    { src: slide1, alt: "Image 1" },
    { src: slide2, alt: "Image 2" },
    { src: slide3, alt: "Image 3" },
    { src: slide1, alt: "Image 4" },
    { src: slide2, alt: "Image 5" },
    { src: slide3, alt: "Image 6" },
  ];

  const settings = {
    dots: false, // Enable dots for navigation if needed
    infinite: true,
    speed: 2000,
    slidesToShow: 3, // Number of images shown at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false, // Prevent pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section>
        <div className="carousel-container">
          <Carousel
            controls={true}
            indicators={false}
            interval={2000}
            fade={true}
            pause={false}
          >
            {/* Slide 1 */}
            <Carousel.Item>
              <img
                className="d-block img-fluid"
                src={sliderImage1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>
                  RENOVATE YOUR HOME WITH <br />
                  <span>IHOME MASTERS</span>
                </h1>
                <p>
                  Modern Style creates functional spaces with a delightful
                  aesthetic.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <img
                className="d-block img-fluid"
                src={sliderImage2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h1>EXPERT INTERIOR DESIGN SERVICES</h1>
                <p>
                  Transform your space with our unique interior design
                  solutions.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <img
                className="d-block img-fluid"
                src={sliderImage3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1>MODERN ARCHITECTURAL SOLUTIONS</h1>
                <p>We deliver modern and timeless architectural designs.</p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Slide 4 */}
            <Carousel.Item>
              <img
                className="d-block img-fluid"
                src={sliderImage4}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1>MODERN FURNITURE</h1>
                <p>We deliver modern furniture for your comfort life.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* Social Media Icons */}
          <div className="social-media-icons">
            <a target="_blank" href="https://www.facebook.com/ihomemasters" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a target="_blank" href="https://www.instagram.com/ihomemasters/" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a target="_blank" href="https://youtube.com/@ihomemasters?si=Uc5ZABtWUEpNu3pT" aria-label="Youtube">
            <FaYoutube />
            </a>
            <a target="_blank" href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="title-head">
                <h3>
                  ABOUT <span>IHOME MASTERS</span>
                </h3>
                <p>
                  Welcome to iHome Masters - the complete interior company. We
                  provide interior designing and interior works for homes at
                  reasonable costs. iHome Masters Private Limited was incepted
                  with the idea of providing seamless solutions for complete
                  home interiors to customers of new homes. Our production works
                  are done at the factory, as per design and customized
                  measurements, using the finest brand materials, delivered and
                  installed at your place following all safety protocols. iHome
                  Masters assures quality interiors at reasonable costs, so go
                  ahead with confidence and get in touch with us for a free
                  consultation and estimate to the best interior works.
                </p>
              </div>
            </div>

            <div className="col-md-6 titleimg">
              <img src={sliderImage1} alt="office Img" />
            </div>
          </div>
        </div>
      </section>

      <section className="ourprojects">
        <div className="container-fluid">
          <div className="row">
            <div className="content-head pb-2">
              <h2>
                OUR <span>PROJECTS</span>
              </h2>
            </div>

            {/* Left Column Slider */}
            <div className="col-md-4 pb-3">
              <Carousel
                controls={true}
                indicators={false}
                interval={3000}
                pause={false}
                fade={true}
              >
                {/* Slide 1 */}
                <Carousel.Item>
                  <img className="d-block w-100" src={kitchen1} alt="Slide 1" />
                  <Carousel.Caption>
                    <h3>MODULAR KITCHEN</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 2 */}
                <Carousel.Item>
                  <img className="d-block w-100" src={kitchen1} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>L-SHAPED MODULAR KITCHEN</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Slide 3 */}
                <Carousel.Item>
                  <img className="d-block w-100" src={kitchen4} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>STRAIGHT MODULAR KITCHEN</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Slide 4 */}
                <Carousel.Item>
                  <img className="d-block w-100" src={kitchen3} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>U-SHAPED MODULAR KITCHEN</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            {/* mid Column Slider */}
            <div className="col-md-4 pb-3">
              <Carousel
                controls={true}
                indicators={false}
                interval={3000}
                pause={false}
                fade={true}
              >
                {/* Slide 1 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={SIMPLEWHITE1}
                    alt="Slide 1"
                  />
                  <Carousel.Caption>
                    <h3>MODULAR WARDROBES</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 2 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Wardrobeimg1}
                    alt="Slide 2"
                  />
                  <Carousel.Caption>
                    <h3>SLINDING SHUTTER WARDROBE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Slide 3 */}

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={HIngedWard3}
                    alt="Slide 2"
                  />
                  <Carousel.Caption>
                    <h3>HINGED WARDROBE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Slide 4 */}

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={PANELSLIDING1}
                    alt="Slide 2"
                  />
                  <Carousel.Caption>
                    <h3>PANEL SLIDING DOORS WARDROBE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            {/* right Column Slider */}
            <div className="col-md-4">
              <Carousel
                controls={true}
                indicators={false}
                interval={3000}
                pause={false}
                fade={true}
              >
                {/* Slide 1 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={CROCKERY2}
                    alt="Slide 1"
                  />
                  <Carousel.Caption>
                    <h3>MODULAR FURNITURE</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 2 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Entertainment3}
                    alt="Slide 2"
                  />
                  <Carousel.Caption>
                    <h3>ENTERTAINMENT UNIT</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Slide 3 */}

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Study3}
                    alt="Slide 2"
                  />
                  <Carousel.Caption>
                    <h3>STUDY UNIT</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Slide 4 */}

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={WINE3}
                    alt="Slide 2"
                  />
                  <Carousel.Caption>
                    <h3>WINE CABINETS</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/Project" className="btn">
              View All
            </Link>
          </div>
        </div>
      </section>

      <section className="ourservices">
        <div className="container-fluid">
          <div className="row">
            <div className="content-head pb-2">
              <h2>
                OUR <span>SERVICES</span>
              </h2>
            </div>
            <div className="col-md-3 service-box">
              <img src={ourservice1} alt="Icon 1" className="service-icon" />
              <h4 className="service-title">RENOVATION & CIVIL WORKS</h4>
              <div className="underline"></div>
              <p className="service-description">
                Architecture bibendum eros eget lacus the vulputate sit amet
                vehicula nibh.
              </p>
            </div>

            <div className="col-md-3 service-box">
              <img src={ourservice2} alt="Icon 2" className="service-icon" />
              <h4 className="service-title">INTERIOR DESIGNING</h4>
              <div className="underline"></div>
              <p className="service-description">
                Architecture bibendum eros eget lacus the vulputate sit amet
                vehicula nibh.
              </p>
            </div>

            <div className="col-md-3 service-box">
              <img src={ourservice3} alt="Icon 3" className="service-icon" />
              <h4 className="service-title">UPVC & ALUMINUM WORKS</h4>
              <div className="underline"></div>
              <p className="service-description">
                Architecture bibendum eros eget lacus the vulputate sit amet
                vehicula nibh.
              </p>
            </div>

            <div className="col-md-3 service-box">
              <img src={ourservice3} alt="Icon 4" className="service-icon" />
              <h4 className="service-title">ELECTRICAL & LIGHTING</h4>
              <div className="underline"></div>
              <p className="service-description">
                Architecture bibendum eros eget lacus the vulputate sit amet
                vehicula nibh.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/MoreService" className="btn">
              View All
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid py-5  outline">
          <div className="row">
            <div className="col-md-3 warranty">
              <img src={Component1} alt="Component1" />
            </div>
            <div className="col-md-3 warranty">
              <img src={Component2} alt="Component1" />
            </div>
            <div className="col-md-3 warranty1">
              <img src={Component3} alt="Component1" />
            </div>
            <div className="col-md-3 warranty">
              <img src={Component4} alt="Component1" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row ">
            <div className="content-head py-3">
              <h2>
                OUR <span>WORK</span>
              </h2>
            </div>
            <div className="col-md-6">
              <img
                src={kitchen29}
                alt="Modular Kitchen"
                className="img-fluid main-image"
                onClick={() => handleShowModal(kitchen29)}
              />

              <div className="row mt-3">
                <div className="col-6 ">
                  <img
                    src={CROCKERY4}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(CROCKERY4)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={Study4}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(Study4)}
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-6">
                  <img
                    src={Entertainment2}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(Entertainment2)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={WINE4}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(WINE4)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={SIMPLEWHITE1}
                    alt="Living Room"
                    className="img-fluid"
                    onClick={() => handleShowModal(SIMPLEWHITE1)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          style={{ display: showModal ? "block" : "none" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden={!showModal}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Image Preview
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={modalImage} alt="Preview" className="img-fluid" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-5">
          {/* Section title */}
          <div className="content-head1 ">
            <h5>HOW WE WORK</h5>
            <h2>OUR WORK PROCEDURE</h2>
          </div>

          {/* Work procedure steps */}
          <div className="row mt-4">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <img src={Work2} alt="chat" />
                  <h5 className="fw-bold mt-3">CLIENT DESIGN CONSULTATION</h5>
                  <p>
                    Free consultation meeting to design your home perfectly.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <img src={Work4} alt="chat" />{" "}
                  <h5 className="fw-bold mt-3">FINALIZE QUOTATION</h5>
                  <p>Get a detailed quotation of the work.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <img src={Work2} alt="chat" />
                  <h5 className="fw-bold mt-3">GET DESIGNS</h5>
                  <p>
                    Get 3D designs to choose, and the materials will be
                    processed according to you.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <img src={Work4} alt="chat" className="chat" />
                  <h5 className="fw-bold mt-3">MOVE IN TIMELY</h5>
                  <p>Complete interior will be installed at your home.</p>
                </div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-4">
            <Link to="/WeWork" className="btn">
              View All
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid pb-1">
          <Slider {...settings}>
            {downslide.map((image, idx) => (
              <div key={idx} className="col-md-4">
                <img
                  className="d-block img-fluid small-image1"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Home;

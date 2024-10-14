import React, { useState, useEffect } from "react";
import "./Furniture.css";
import furniture from "../../Assets/Furniture1.png";
import Entertainment1 from "../../Assets/ENTERTAINMENT UNIT1.jpeg";
import Entertainment2 from "../../Assets/ENTERTAINMENT UNIT2.jpg";
import Entertainment3 from "../../Assets/ENTERTAINMENT UNIT3.jpg";
import Entertainment4 from "../../Assets/ENTERTAINMENT UNIT4.jpg";
import Study1 from "../../Assets/STUDY UNIT1.jpg";
import Study2 from "../../Assets/STUDY UNIT2.jpg";
import Study3 from "../../Assets/STUDY UNIT3.jpeg";
import Study4 from "../../Assets/STUDY UNIT4.jpg";
import CROCKERY1 from "../../Assets/CROCKERY CABINET1.png";
import CROCKERY2 from "../../Assets/CROCKERY CABINET2.png";
import CROCKERY3 from "../../Assets/CROCKERY CABINET3.jpg";
import CROCKERY4 from "../../Assets/CROCKERY CABINET4.png";
import WINE1 from "../../Assets/WINE CABINETS1.avif";
import WINE2 from "../../Assets/WINE CABINETS2.jpg";
import WINE3 from "../../Assets/WINE CABINETS3.jpg";
import WINE4 from "../../Assets/WINE CABINETS4.jpg";
import pocket from "../../Assets/pocket.png";
import Brand from "../../Components/Brands/Brand";
import Contact from "../../Components/GetinTouch/Contact";
import Environmental from "../../Components/Environmental&Safety/Environmental";

const Furniture = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [sliderValue, setSliderValue] = useState(0);

  // Function to handle slider value change
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleShowModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section>
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

        <section>
          <div className="container-fluid">
            <div className="heroimg3">
              <div className="overlay3">
                <h2>MODULAR FURNITURE</h2>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="title-head">
                  <h3>
                    MODULAR <span> FURNITURE</span>
                  </h3>
                  <p>
                    iHome Masters produces modular furniture that is pre-made or
                    order to made furniture which can be used according to the
                    need and room spacing. It’s easy to install & dismantle
                    according to need & it gives a modern look to your home or
                    office. As looking to the limitation of space in apartments
                    of flats, modular furniture is very helpful to save space.
                    You can use them in different ways.
                  </p>
                  <p>
                    iHome Masters most popular modular furniture for homes is
                    the modular kitchen cabnets and wardrobes. Customization of
                    furniture is possible according to the need. Modular
                    bedrooms, living rooms, dining rooms, crockery units,
                    wardrobes, wine units, study units are available in a wide
                    range. Also TV show cases, entertainment units & computer
                    tables give a elegant look to the rooms.
                  </p>
                </div>
              </div>

              <div className="col-md-6 py-3">
                <img
                  src={furniture}
                  alt="Modular Kitchen"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container py-5">
            <div className="row outside">
              <div className="inputhead">
                <h1>
                  FURNITURE <span> ESTIMATE</span>
                </h1>
              </div>
              <div className="col-md-6 mt-4">
                <div className="row">
                  <div className="col-md-6 item pt-3">
                    <label htmlFor="options" className="itemstyle">
                      Cabnet Material
                    </label>
                  </div>
                  <div className="col-md-6 optionchoose pt-3">
                    <select
                      name="Wardrobe"
                      id="options"
                      className="inneroption form-control"
                    >
                      <option value="">--Select an option--</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="col-md-6 item pt-3">
                    <label htmlFor="options" className="itemstyle">
                      Shutter Finish
                    </label>
                  </div>
                  <div className="col-md-6 optionchoose pt-3">
                    <select
                      name="Wardrobe"
                      id="options"
                      className="inneroption form-control"
                    >
                      <option value="">--Select an option--</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="row">
                  <div className="col-md-6 item pt-3">
                    <label htmlFor="options" className="itemstyle">
                      Hardware & Accessories
                    </label>
                  </div>
                  <div className="col-md-6 optionchoose pt-3">
                    <select
                      name="Wardrobe"
                      id="options"
                      className="inneroption form-control"
                    >
                      <option value="">--Select an option--</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="col-md-6 item pt-3">
                    <label htmlFor="options" className="itemstyle">
                      Total area sq.FT.
                    </label>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex" style={{ alignItems: "center" }}>
                      <div>
                        <div className="form-group">
                          <label htmlFor="rangeSlider">Select a number:</label>
                          <input
                            type="range"
                            id="rangeSlider"
                            className="form-range"
                            min="0"
                            max="50"
                            value={sliderValue}
                            onChange={handleSliderChange}
                          />
                        </div>
                      </div>
                      <div>
                        <p
                          style={{
                            border: "1px solid black",
                            padding: "0px 10px",
                            margin: "0",
                          }}
                        >
                          {sliderValue}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <form action="">
            <div className="container py-5">
              <div className="row outside">
                <div className="inputhead">
                  <h1>Contact Details</h1>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="row">
                    <div className="col-md-6 item py-3">
                      <label htmlFor="options" className="itemstyle">
                        Your Name
                      </label>
                    </div>
                    <div className="col-md-6 optionchoose pt-3">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="YOUR NAME"
                        required
                      />
                    </div>
                    <div className="col-md-6 item pt-3">
                      <label htmlFor="options" className="itemstyle">
                        Phone
                      </label>
                    </div>
                    <div className="col-md-6 optionchoose pt-3">
                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="YOUR NUMBER"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mt-4 phoneres">
                  <div className="row">
                    <div className="col-md-6 item pt-3">
                      <label htmlFor="options" className="itemstyle">
                        Your E-mail
                      </label>
                    </div>
                    <div className="col-md-6 optionchoose pt-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="YOUR EMAIL"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>

        <section>
          <div className="container py-3">
            <div className="row">
              <div className="col-md-6 subbtn">
                <button type="submit" className="btnstyle">
                  SUBMIT NOW
                </button>
              </div>
              <div className="col-md-6 costsection">
                <div className="pocketicon">
                  <img src={pocket} alt="Cost" className="iconcustom" />
                </div>
                <div className="rightcost">
                  <h2 className="cost">$2,300.00</h2>
                  <p>Approximate Project Cost</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  ENTERTAINMENT <span> UNIT</span>
                </h2>
              </div>
              <div className="col-md-8">
                <img
                  src={Entertainment4}
                  alt="Modular Wardrobe"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(Entertainment4)}
                />

                <div className="row mt-3">
                  <div className="col-6 ">
                    <img
                      src={Entertainment3}
                      alt="Modular Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(Entertainment3)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Entertainment2}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(Entertainment2)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-4">
                <img
                  src={Entertainment1}
                  alt="Wardrobe"
                  className="img-fluid main-image h-100"
                  // onClick={() => handleShowModal(Wardrobeimg1)}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  STUDY <span> UNIT</span>
                </h2>
              </div>
              <div className="col-md-8">
                <img
                  src={Study4}
                  alt="Modular Wardrobe"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(Study4)}
                />

                <div className="row mt-3">
                  <div className="col-6 ">
                    <img
                      src={Study3}
                      alt="Modular Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(Study3)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Study2}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(Study2)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-4">
                <img
                  src={Study1}
                  alt="Wardrobe"
                  className="img-fluid main-image h-100"
                  // onClick={() => handleShowModal(Wardrobeimg1)}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  CROCKERY <span> CABINETS</span>
                </h2>
              </div>
              <div className="col-md-8">
                <img
                  src={CROCKERY1}
                  alt="Modular Wardrobe"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(CROCKERY1)}
                />

                <div className="row mt-3">
                  <div className="col-6 ">
                    <img
                      src={CROCKERY3}
                      alt="Modular Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(CROCKERY3)}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={CROCKERY4}
                      alt="Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(CROCKERY4)}
                    />
                  </div>
                </div>
              </div>

              {/* Right smaller images */}
              <div className="col-md-4">
                <img
                  src={CROCKERY2}
                  alt="Wardrobe"
                  className="img-fluid main-image h-100"
                  // onClick={() => handleShowModal(Wardrobeimg1)}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row ">
              <div className="content-head py-4">
                <h2 className="mdk">
                  WINE <span> CABINETS</span>
                </h2>
              </div>
              <div className="col-md-8">
                <img
                  src={WINE1}
                  alt="Modular Wardrobe"
                  className="img-fluid main-image"
                  onClick={() => handleShowModal(WINE1)}
                />

                <div className="row mt-3">
                  <div className="col-6 ">
                    <img
                      src={WINE3}
                      alt="Modular Wardrobe"
                      className="img-fluid small-image"
                      onClick={() => handleShowModal(WINE3)}
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
              </div>

              {/* Right smaller images */}
              <div className="col-md-4">
                <img
                  src={WINE2}
                  alt="WINE"
                  className="img-fluid main-image h-100"
                  // onClick={() => handleShowModal(Wardrobeimg1)}
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <Environmental />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Brand />
      </section>
    </>
  );
};

export default Furniture;

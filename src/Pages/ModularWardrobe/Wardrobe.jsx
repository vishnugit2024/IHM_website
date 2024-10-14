import React, { useState, useEffect } from "react";
import './Wardrobe.css';
import Wardrobeimg1 from "../../Assets/Wardrobe1.jpg";
import Wardrobeimg2 from "../../Assets/Wardrobe2.jpg";
import Wardrobeimg3 from "../../Assets/Wardrobe3.jpg";
import Wardrobeimg4 from "../../Assets/Wardrobe4.jpg";
import HIngedWard1 from "../../Assets/HInged-Ward1.jpg";
import HIngedWard2 from "../../Assets/HInged-Ward2.jpg";
import HIngedWard3 from "../../Assets/HInged-Ward3.webp";
import HIngedWard4 from "../../Assets/HInged-Ward4.png";
import PANELSLIDING1 from "../../Assets/PANEL SLIDING1.jpg";
import PANELSLIDING2 from "../../Assets/PANEL SLIDING2.jpg";
import PANELSLIDING3 from "../../Assets/PANEL SLIDING3.jpg";
import PANELSLIDING4 from "../../Assets/PANEL SLIDING4.jpeg";
import SIMPLEWHITE1 from "../../Assets/SIMPLE WHITE1.jpg";
import SIMPLEWHITE2 from "../../Assets/SIMPLE WHITE2.jpg";
import SIMPLEWHITE3 from "../../Assets/SIMPLE WHITE3.png";
import SIMPLEWHITE4 from "../../Assets/SIMPLE WHITE4.avif";


import pocket from "../../Assets/pocket.png";
import Environmental from "../../Components/Environmental&Safety/Environmental";
import Contact from "../../Components/GetinTouch/Contact";
import Brand from "../../Components/Brands/Brand";

const Wardrobe = () => {

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

  const [sliderValue1, setSliderValue1] = useState(0);

  // Function to handle slider value change
  const handleSliderChange1 = (e) => {
    setSliderValue1(e.target.value);
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

    <section>{/* Modal */}
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
        <div className='container-fluid'>
        
            <div className="heroimg2">
              <div className="overlay2">
                <h2>MODULAR WARDROBE</h2>
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
                  MODULAR <span> WARDROBES</span>
                </h3>
                <p>
                  We at iHome Masters understands that modular wardrobes have
                  immense popularity in modern times due to its high utility and
                  convenience it brings with it. Basically modular wardrobes are
                  segmented units which are made to order; customized and then
                  assembled to fit to customer's need. Our bedrooms usually have
                  two main furniture, bed and wardrobe.
                </p>
                <p>
                  Modular furniture makes the house look attractive and
                  manageable. Choose wisely about what kind of furniture will
                  look good in your house and consult our designers at iHome
                  Masters accordingly.
                </p>
              </div>
            </div>

            <div className="col-md-6 py-3">
              <img
                src={Wardrobeimg1}
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
                WARDROBE <span> ESTIMATE</span>
              </h1>
            </div>
            <div className="col-md-6 mt-4">
              <div className="row">
                <div className="col-md-6 item pt-3">
                  <label htmlFor="options" className="itemstyle">
                    Wardrobe Cabnet Material
                  </label>
                </div>
                <div className="col-md-6 optionchoose pt-3">
                  <select
                    name="Wardrobe"
                    id="options"
                    className="inneroption form-control"
                  >
                    <option value="">--Select an option--</option>
                    <option value="option1">PreLam ProWood</option>
                    <option value="option2">HDHMR Premium Plus</option>
                    <option value="option3">BWP Marine Plywood</option>
                  </select>
                </div>
                <div className="col-md-6 item pt-3">
                  <label htmlFor="options" className="itemstyle">
                    Wardrobe Shutter Finish
                  </label>
                </div>
                <div className="col-md-6 optionchoose pt-3">
                  <select
                    name="Wardrobe"
                    id="options"
                    className="inneroption form-control"
                  >
                    <option value="">--Select an option--</option>
                    <option value="option1">Gloss/Suede Laminate</option>
                    <option value="option2">MR+ Tuff Gloss/Suede</option>
                    <option value="option3">UNI+ or Acrylic</option>
                  </select>
                </div>
              </div>
              <div className="row">
              <div className="col-md-6 item pt-3">
                  <label htmlFor="options" className="itemstyle">
                    Height
                  </label>
                </div>
                <div className="col-md-6">
                  <div className="d-flex" style={{alignItems:'center'}}>
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
                          margin:'0'
                          }}
                      >
                        {sliderValue}
                      </p>
                    </div>
                  </div>
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
                    <option value="option1">Economy Innotech</option>
                    <option value="option2">Premium Hettich</option>
                  </select>
                </div>
                <div className="col-md-6 item pt-3">
                  <label htmlFor="options" className="itemstyle">
                    Width
                  </label>
                </div>
                <div className="col-md-6">
                  <div className="d-flex" style={{alignItems:'center'}}>
                    <div>
                      <div className="form-group">
                        <label htmlFor="rangeSlider">Select a number:</label>
                        <input
                          type="range"
                          id="rangeSlider"
                          className="form-range"
                          min="0"
                          max="50"
                          value={sliderValue1}
                          onChange={handleSliderChange1}
                        />
                      </div>
                    </div>
                    <div>
                      <p
                        style={{
                          border: "1px solid black",
                          padding: "0px 10px",
                          margin:'0'
                          }}
                      >
                        {sliderValue1}
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
                SLIDING SHUTTER <span> WARDROBE</span>
              </h2>
            </div>
            <div className="col-md-8">
              <img
                src={Wardrobeimg1}
                alt="Modular Wardrobe"
                className="img-fluid main-image"
                onClick={() => handleShowModal(Wardrobeimg1)}
              />

              <div className="row mt-3">
                <div className="col-6 ">
                  <img
                    src={Wardrobeimg3}
                    alt="Modular Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(Wardrobeimg3)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={Wardrobeimg4}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(Wardrobeimg4)}
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-4">
              <img
                src={Wardrobeimg2}
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
                HINGED <span> WARDROBE</span>
              </h2>
            </div>
            <div className="col-md-8">
              <img
                src={HIngedWard3}
                alt="Modular Wardrobe"
                className="img-fluid main-image"
                onClick={() => handleShowModal(HIngedWard3)}
              />

              <div className="row mt-3">
                <div className="col-6 ">
                  <img
                    src={HIngedWard2}
                    alt="Modular Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(HIngedWard2)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={HIngedWard1}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(HIngedWard1)}
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-4">
              <img
                src={HIngedWard4}
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
                PANEL SLIDING DOORS <span> WARDROBE</span>
              </h2>
            </div>
            <div className="col-md-8">
              <img
                src={PANELSLIDING1}
                alt="Modular Wardrobe"
                className="img-fluid main-image"
                onClick={() => handleShowModal(PANELSLIDING1)}
              />

              <div className="row mt-3">
                <div className="col-6 ">
                  <img
                    src={PANELSLIDING2}
                    alt="Modular Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(PANELSLIDING2)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={PANELSLIDING4}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(PANELSLIDING4)}
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-4">
              <img
                src={PANELSLIDING3}
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
                SIMPLE WHITE <span> WARDROBE</span>
              </h2>
            </div>
            <div className="col-md-8">
              <img
                src={SIMPLEWHITE4}
                alt="Modular Wardrobe"
                className="img-fluid main-image"
                onClick={() => handleShowModal(SIMPLEWHITE4)}
              />

              <div className="row mt-3">
                <div className="col-6 ">
                  <img
                    src={SIMPLEWHITE2}
                    alt="Modular Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(SIMPLEWHITE2)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={SIMPLEWHITE1}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(SIMPLEWHITE1)}
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-4">
              <img
                src={SIMPLEWHITE3}
                alt="Wardrobe"
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

export default Wardrobe;

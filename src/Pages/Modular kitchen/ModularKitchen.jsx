import React, { useState , useEffect } from "react";
import './kitchen.css';
import kitchenimg from "../../Assets/kitchen.png";
import pocket from "../../Assets/pocket.png";
import kitchen1 from "../../Assets/kitchen1.jpg";
import kitchen2 from "../../Assets/kitchen2.jpg";
import kitchen3 from "../../Assets/kitchen3.jpg";
import kitchen4 from "../../Assets/kitchen4.jpg";
import kitchen5 from "../../Assets/kitchen5.jpg";
import kitchen6 from "../../Assets/kitchen6.jpg";
import kitchen7 from "../../Assets/kitchen7.jpg";
import kitchen8 from "../../Assets/kitchen8.jpg";
import kitchen9 from "../../Assets/kitchen9.jpg";
import kitchen10 from "../../Assets/kitchen10.jpg";
import kitchen11 from "../../Assets/kitchen11.jpg";
import kitchen12 from "../../Assets/kitchen12.png";
import kitchen13 from "../../Assets/kitchen13.jpg";
import kitchen14 from "../../Assets/kitchen14.jpg";
import kitchen15 from "../../Assets/kitchen15.jpg";
import kitchen16 from "../../Assets/kitchen16.jpeg";
import kitchen17 from "../../Assets/kitchen17.jpg";
import kitchen18 from "../../Assets/kitchen18.jpg";
import kitchen19 from "../../Assets/kitchen19.jpg";
import kitchen20 from "../../Assets/kitchen20.jpg";
import kitchen21 from "../../Assets/kitchen21.jpg";
import kitchen22 from "../../Assets/kitchen22.avif";
import kitchen23 from "../../Assets/kitchen23.jpg";
import kitchen24 from "../../Assets/kitchen24.jpg";
import kitchen25 from "../../Assets/kitchen25.jpg";
import kitchen26 from "../../Assets/kitchen26.jpg";
import kitchen27 from "../../Assets/kitchen27.jpg";
import kitchen28 from "../../Assets/kitchen28.jpg";
import kitchen29 from "../../Assets/kitchen29.jpg";
import kitchen30 from "../../Assets/kitchen30.jpg";
import Environmental from "../../Components/Environmental&Safety/Environmental";
import Contact from "../../Components/GetinTouch/Contact";
import Brand from "../../Components/Brands/Brand";

const ModularKitchen = () => {

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
            <div className="heroimg1">
              <div className="overlay1">
                <h2>MODULAR KITCHEN</h2>
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
                  MODULAR <span> KITCHENS</span>
                </h3>
                <p>
                  We at iHome Masters understands that a modular kitchen is a
                  trend in modern homes. A well-designed kitchen offers a
                  seamless cooking experience. There are several layers of
                  cabinets in a modular kitchen design that hold the appliances,
                  giving the kitchen space an organized look. In the modular
                  style of kitchen, the cabinets placed on the floor over PVC
                  legs are called base cabinets combined with upper wall
                  cabinets and optional upper loft cabinets.
                </p>
                <p>
                  The appliances are kept on the modular kitchen cabinets once
                  the kitchen counter-top is laid out. The kitchen worktop is
                  generally made of granite, quartz, or other options available
                  in the market. Apart from base cabinets, wall units are also
                  an integral part of the modular kitchen project. The perfect
                  kitchen space is to be dry and spacious. The creating more
                  functional space is of primary concern to ensure proper
                  protection during cooking and to prevent contamination of
                  food.
                </p>
              </div>
            </div>

            <div className="col-md-6 py-3">
              <img
                src={kitchenimg}
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
                KITCHEN <span> ESTIMATE</span>
              </h1>
            </div>
            <div className="col-md-6 p-4">
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
            </div>

            <div className="col-md-6 p-4 phoneres">
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
                    Total area sq.FT.
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
            <div className="content-head py-5">
              <h2 className="mdk">
                L-SHAPED <span>MODULAR KITCHEN</span>
              </h2>
            </div>
            <div className="col-md-6">
              <img
                src={kitchen1}
                alt="Modular Kitchen"
                className="img-fluid main-image"
                onClick={() => handleShowModal(kitchen1)}
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={kitchen2}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen2)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen3}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen3)}
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-6">
                  <img
                    src={kitchen4}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen4)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen5}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen5)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={kitchen6}
                    alt="Living Room"
                    className="img-fluid"
                    onClick={() => handleShowModal(kitchen6)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

    
      </section>
      <section>
        <div className="container">
          <div className="row ">
            <div className="content-head py-5">
              <h2 className="mdk">
                STRAIGHT <span>MODULAR KITCHEN</span>
              </h2>
            </div>
            <div className="col-md-6">
              <img
                src={kitchen7}
                alt="Modular Kitchen"
                className="img-fluid main-image"
                onClick={() => handleShowModal(kitchen7)}
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={kitchen8}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen8)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen9}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen9)}
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-6">
                  <img
                    src={kitchen10}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen10)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen11}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen11)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={kitchen12}
                    alt="Living Room"
                    className="img-fluid"
                    onClick={() => handleShowModal(kitchen12)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <section>
        <div className="container">
          <div className="row ">
            <div className="content-head py-5">
              <h2 className="mdk">
                U-SHAPED <span>MODULAR KITCHEN</span>
              </h2>
            </div>
            <div className="col-md-6">
              <img
                src={kitchen13}
                alt="Modular Kitchen"
                className="img-fluid main-image"
                onClick={() => handleShowModal(kitchen13)}
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={kitchen14}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen14)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen15}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen15)}
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-6">
                  <img
                    src={kitchen16}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen16)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen17}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen17)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={kitchen18}
                    alt="Living Room"
                    className="img-fluid"
                    onClick={() => handleShowModal(kitchen18)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </section>
      <section>
        <div className="container">
          <div className="row ">
            <div className="content-head py-5">
              <h2 className="mdk">
                PARALLEL SHAPED <span>MODULAR KITCHEN</span>
              </h2>
            </div>
            <div className="col-md-6">
              <img
                src={kitchen19}
                alt="Modular Kitchen"
                className="img-fluid main-image"
                onClick={() => handleShowModal(kitchen19)}
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={kitchen20}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen20)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen21}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen21)}
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-6">
                  <img
                    src={kitchen22}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen22)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen23}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen23)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={kitchen24}
                    alt="Living Room"
                    className="img-fluid"
                    onClick={() => handleShowModal(kitchen24)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </section>
      <section>
        <div className="container">
          <div className="row ">
            <div className="content-head py-5">
              <h2 className="mdk">
                ISLAND <span>MODULAR KITCHEN</span>
              </h2>
            </div>
            <div className="col-md-6">
              <img
                src={kitchen25}
                alt="Modular Kitchen"
                className="img-fluid main-image"
                onClick={() => handleShowModal(kitchen25)}
              />

              <div className="row mt-3">
                <div className="col-6">
                  <img
                    src={kitchen26}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen26)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen27}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen27)}
                  />
                </div>
              </div>
            </div>

            {/* Right smaller images */}
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-6">
                  <img
                    src={kitchen28}
                    alt="Kitchen Design"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen28)}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={kitchen29}
                    alt="Wardrobe"
                    className="img-fluid small-image"
                    onClick={() => handleShowModal(kitchen29)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <img
                    src={kitchen30}
                    alt="Living Room"
                    className="img-fluid"
                    onClick={() => handleShowModal(kitchen30)}
                  />
                </div>
              </div>
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

export default ModularKitchen;

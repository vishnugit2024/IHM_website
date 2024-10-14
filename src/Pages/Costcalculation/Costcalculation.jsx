import React, { useState } from "react";
import "./Costcalculation.css";
import pocket from "../../Assets/pocket.png";
import Environmental from "../../Components/Environmental&Safety/Environmental";
import Contact from "../../Components/GetinTouch/Contact";
import Brand from "../../Components/Brands/Brand";


const Costcalculation = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderValue1, setSliderValue1] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(0);

  // Function to handle slider value change
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };
  const handleSliderChange1 = (e) => {
    setSliderValue1(e.target.value);
  };
  const handleSliderChange2 = (e) => {
    setSliderValue2(e.target.value);
  };
  const [rooms, setRooms] = useState({
    kitchen: false,
    livingRoom: false,
    diningRoom: false,
    masterBedroom: false,
    bedroom2: false,
    bedroom3: false,
  });

  const handleToggle = (room) => {
    setRooms({ ...rooms, [room]: !rooms[room] });
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

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="heroimg5">
            <div className="overlay5">
              <h2>COST CALCULATOR</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-3">
          <div className="row">
            <div className="servicehead">
              <h1>
                HOME INTERIOR <span> ESTIMATE</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-3">
          <div className="row">
            <div className="room-selection-container">
              <h3>
                ROOM <span> SELECTION </span>
              </h3>

              <div className="room-selection">
                <div className="vertical-separator"></div>
                <div className="room">
                  <span>Kitchen</span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={rooms.kitchen}
                      onChange={() => handleToggle("kitchen")}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="vertical-separator"></div>

                <div className="room">
                  <span>Living Room</span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={rooms.livingRoom}
                      onChange={() => handleToggle("livingRoom")}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="vertical-separator"></div>

                <div className="room">
                  <span>Dining Room</span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={rooms.diningRoom}
                      onChange={() => handleToggle("diningRoom")}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="vertical-separator"></div>

                <div className="room">
                  <span>Master Bedroom</span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={rooms.masterBedroom}
                      onChange={() => handleToggle("masterBedroom")}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="vertical-separator"></div>

                <div className="room">
                  <span>Bedroom 2</span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={rooms.bedroom2}
                      onChange={() => handleToggle("bedroom2")}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="vertical-separator"></div>

                <div className="room">
                  <span>Bedroom 3</span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={rooms.bedroom3}
                      onChange={() => handleToggle("bedroom3")}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
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
            <div className="col-md-6">
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
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
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
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-6">
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
        <div className="container py-2">
          <div className="row outside">
            <div className="inputhead">
              <h1>
                DINING <span> ROOM</span>
              </h1>
            </div>
            <div className="col-md-6 mt-4">
              <div className="row">
                <div className="col-md-6 item pt-3">
                  <label htmlFor="options" className="itemstyle">
                    Dining Table
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
                    Crockery Unit
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

            <div className="col-md-6 mt-4 phoneres">
              <div className="row">
                <div className="col-md-6 item pt-3">
                  <label htmlFor="options" className="itemstyle">
                    False Celling
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
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row outside">
            <div className="inputhead">
              <h1>
                LIVING <span> ROOM</span>
              </h1>
            </div>
            <div className="col-md-6 mt-4 phoneres">
              <div className="row">
                <div className="col-md-6 item pt-3">
                  <label htmlFor="options" className="itemstyle">
                    Entertainment Unit
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
                    Sofa set
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
                <div className="col-md-6 item mt-3">
                  <label htmlFor="options" className="itemstyle">
                    False Celling
                  </label>
                </div>
                <div className="col-md-6 optionchoose mt-3">
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
          </div>
        </div>
      </section>

      <section>
        <div className="container py-2">
          <div className="row outside">
            <div className="inputhead">
              <h1>
                MASTER <span> BEDROOM</span>
              </h1>
            </div>
            <div className="col-md-6 mt-4">
              <div className="row">
                <div className="col-md-6 item1 pt-3">
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
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="col-md-6 item1 pt-3">
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
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4">
              <div className="row">
                <div className="col-md-6 item1 pt-3">
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
                    Sofa set
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

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 item1 pt-3">
                  <label htmlFor="options" className="itemstyle">
                    Entertainment Unit
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
                <div className="col-md-6 item1 pt-3">
                  <label htmlFor="options" className="itemstyle">
                    Width
                  </label>
                </div>
                <div className="col-md-6">
                  <div className="d-flex" style={{alignItems:'center'}}>
                    <div>
                      <div className="form-group ">
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

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 item pt-3">
                  <label htmlFor="options" className="itemstyle">
                    False Celling
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
                          value={sliderValue2}
                          onChange={handleSliderChange2}
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
                        {sliderValue2}
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

export default Costcalculation;

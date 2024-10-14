import React from "react";
import "./Contact.css";
import HalfCircle from "../../Assets/HalfCircle.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="contacttitle py-4">
              <h3>CONTACT US</h3>
              <p>Any question or remarks? Just write us a message!</p>
            </div>

            <div className="col-md-6 imgsection">
              <div className="bgblack">
                <div className="imagedata py-4">
                  <h2>Contact Information</h2>
                  <p>Say something to start a live chat!</p>
                </div>
                <div className="imgcontactdetail py-5">
                  <div className="phonedetail py-4">
                    <FaPhoneAlt />
                    <a
                      target="_blank"
                      href="tel:+918826806772"
                      aria-label="Phone"
                    >
                      +91 8826806772
                    </a>
                  </div>
                  <div className="maildetail py-4">
                    <FaEnvelope />
                    <a
                      target="_blank"
                      href="mailto:interiors@ihomemasters.com"
                      aria-label="mail"
                    >
                      interiors@ihomemasters.com
                    </a>
                  </div>
                  <div className="locationdetail py-4">
                    <FaLocationArrow />
                    <a target="_blank" href="#" aria-label="location">
                      D-224, Sector-63, Noida 201307.
                    </a>
                  </div>
                </div>
                <div className="imageIcon py-5">
                  <a target="_blank" href="https://www.facebook.com/ihomemasters" aria-label="Facebook">
                    <FaFacebook />
                  </a>
                  <a target="_blank" href="https://www.instagram.com/ihomemasters/" aria-label="Facebook">
                    <FaInstagram />
                  </a>
                  <a target="_blank" href="https://youtube.com/@ihomemasters?si=Uc5ZABtWUEpNu3pT" aria-label="Youtube">
                  <FaYoutube />
                  </a>
                </div>
                <div className="circleimg">
                  <img src={HalfCircle} alt="" />
                </div>
              </div>
            </div>

            {/* Form */}

            <div className="col-md-6">
              <form className="contact-form pt-4">
                <div className="row">
                  <div className="col-md-6 mb-3 cuscol">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="firstName"
                        placeholder=""
                        required
                      />
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3 cuscol">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="lastName"
                        placeholder=""
                        required
                      />
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control custom-input"
                      id="email"
                      placeholder=""
                      required
                    />
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control custom-input"
                      id="phone"
                      name="phone"
                      placeholder=""
                      maxLength="10"
                      pattern="[0-9]{10}" // Regex for exactly 10 digits
                      title="Phone number must be 10 digits."
                      required
                    />
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="select mb-3">Select Subject? </label>
                  <div className="d-flex justify-content-between subject-options">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="subject"
                        id="subject1"
                        required
                      />
                      <label className="form-check-label" htmlFor="subject1">
                        General Inquiry
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="subject"
                        id="subject1"
                        required
                      />
                      <label className="form-check-label" htmlFor="subject1">
                        Modular Kitchen
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="subject"
                        id="subject1"
                        required
                      />
                      <label className="form-check-label" htmlFor="subject1">
                        Modular Wardrobe
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="subject"
                        id="subject1"
                        required
                      />
                      <label className="form-check-label" htmlFor="subject1">
                        Modular Furniture
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-group">
                    <textarea
                      className="form-control custom-input"
                      id="message"
                      rows="3"
                      placeholder=""
                      required
                    ></textarea>
                    <label htmlFor="message" className="form-label">
                      Write your message...
                    </label>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

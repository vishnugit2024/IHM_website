import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaAngleRight,
} from "react-icons/fa";
import "./footer.css"; // Import the CSS file
import logo from "../../Assets/ihomemasters-1.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo-rights">
            <img src={logo} alt="Home Masters Logo" className="footer-logo" />
            <p className="footer-rights">
              All Rights Reserved. &#169; {new Date().getFullYear()}{" "}
              <Link to={`/`}>iHome Masters Private Limited</Link>.
              <br />
              Designed by{" "}
              <span>
                <a
                  href="https://www.digiindiasolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer" // Added for security
                >
                  DIGI India Solutions.
                </a>
              </span>
            </p>
          </div>

          <div className="footer-nav">
            <h5 className="footer-heading">NAVIGATION</h5>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  <FaAngleRight className="footer-icon" /> Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="footer-link">
                  <FaAngleRight className="footer-icon" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/MoreService" className="footer-link">
                  <FaAngleRight className="footer-icon" /> Our Services
                </Link>
              </li>
              <li>
                <Link to="/Project" className="footer-link">
                  <FaAngleRight className="footer-icon" /> Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h5 className="footer-heading">GET IN TOUCH</h5>
            <ul className="footer-contact-info">
              <li>
                <FaMapMarkerAlt className="footer-icon" /> D-224, Sector-63,
                Noida 201307.
              </li>
              <li>
                <FaClock className="footer-icon" /> Monday - Saturday
              </li>
              <li>
                <FaClock className="footer-icon" /> 08:00 AM - 08:00 PM
              </li>
            </ul>
            <div className="footer-social">
              <a target="_blank" href="https://www.facebook.com/ihomemasters" className="footer-social-icon">
                <FaFacebookF />
              </a>
              <a target="_blank" href="#" className="footer-social-icon">
                <FaTwitter />
              </a>
              <a target="_blank" href="https://youtube.com/@ihomemasters?si=Uc5ZABtWUEpNu3pT" className="footer-social-icon">
                <FaYoutube />
              </a>
              <a target="_blank" href="https://www.instagram.com/ihomemasters/" className="footer-social-icon">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

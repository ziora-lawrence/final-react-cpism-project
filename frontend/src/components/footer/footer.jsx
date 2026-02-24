import React from "react";
import logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Logo Section - Now at the very top */}
        <div className="footer-logo-top">
          <img src={logo} alt="Tours in Tuscany" className="logo-image" />
        </div>

        <div className="footer-top">
          {/* Links Grid */}
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>Bike and Rickshaw rental</li>
                <li>Guided Tours of Lucca</li>
                <li>Guided Bike Tour of Lucca</li>
                <li>Trip In The Tuscan Hills</li>
                <li>Transportation With Luxury Cars</li>
                <li>Wine Tours By Bus With Guide</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Home</h4>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Tour Packages</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Help</h4>
              <ul>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contacts</h4>
              <ul className="contact-list">
                <li>
                  <span className="icon">📍</span> Piazza Napoleone, Lucca, Tuscany
                </li>
                <li>
                  <span className="icon">📞</span> +39 346 368 5708
                </li>
                <li>
                  <span className="icon">✉️</span> italiainlimo@gmail.com
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Social Media</h4>
              <div className="social-icons">
                <a href="#" className="social-circle">𝕏</a>
                <a href="#" className="social-circle">f</a>
                <a href="#" className="social-circle">📸</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <hr className="footer-divider" />
          <p>Copyright © 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
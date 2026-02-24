import React from "react";
import "./contactus.css";
import maplocate from "../../assets/maplocate.png";
const Contactus = () => {
  return (
    <div>
      <section className="contactus">
        <div className="contact-container">
          <div className="contact-content">
            {/* Left Side: Information */}
            <div className="contact-info">
              <h1>Get In Touch!</h1>
              <p>
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>

              <div className="info-item">
                <span className="icon">📍</span>
                <span>Piazza Napoleone, Lucca, Tuscany</span>
              </div>

              <div className="info-item highlight-box">
                <span className="icon">📞</span>
                <span>+39 346 368 5708</span>
              </div>

              <div className="info-item">
                <span className="icon">✉️</span>
                <span>italiainlimo@gmail.com</span>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-group">
                  <label>Name and Surname</label>
                  <input
                    type="text"
                    placeholder="Enter your name and surname"
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email address" />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    placeholder="Enter your Message"
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="send-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='mapy'>
        <img src={maplocate} alt="Map" className="map-image" />
      </section>
    </div>
  );
};

export default Contactus;

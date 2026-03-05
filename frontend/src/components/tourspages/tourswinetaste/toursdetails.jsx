import React from "react";

const TourDetails = () => {
  return (
    <div style={{ padding: "120px 10% 80px 10%", color: "#333", background: "white" }}>
      <h1>TEST: Wine tasting In Tuscany - SIMPLIFIED</h1>
      <p>If you see this, the component is rendering</p>

      {/* Hero Section */}
      <section className="hero-booking-grid">
        <div className="hero-visuals">
          <img src={background1} alt="Main Tour" className="main-tour-img" />
          <div className="thumbnail-grid">
            <img src={background1} alt="thumb" />
            <img src={background1} alt="thumb" />
            <img src={background1} alt="thumb" />
          </div>
        </div>

        <div className="booking-sidebar">
          <h1>Wine tasting In Tuscany</h1>
          <div className="price-tag">from <span>34 €</span></div>
          <p className="tour-brief">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          
          <div className="calendar-placeholder">
            {/* You can integrate a library like react-calendar here later */}
            <div className="fake-calendar">December 2022 Calendar UI</div>
          </div>

          <div className="time-select">
            <label>Time</label>
            <select>
              <option>Select time</option>
              <option>10:00 AM</option>
              <option>02:00 PM</option>
            </select>
          </div>

          <button className="buy-now-btn">Buy Now</button>
        </div>
      </section>

      {/* Details Section */}
      <section className="details-section">
        <h2>Details</h2>
        <p className="full-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        
        <div className="specs-list">
          <div className="spec-item"><FaUsers /> <span>Number of group:</span> 15-30</div>
          <div className="spec-item"><FaClock /> <span>Duration:</span> 1.5 hours and 45 minutes</div>
          <div className="spec-item"><FaMapMarkerAlt /> <span>Departuring and arriving areas:</span> Lucca</div>
          <div className="spec-item"><FaUserTie /> <span>Guide service:</span> Included</div>
          <div className="spec-item"><FaLanguage /> <span>Language:</span> English, Italian</div>
          <div className="spec-item"><FaTicketAlt /> <span>Entry Fees:</span> 10€ included</div>
          <div className="spec-item"><FaBus /> <span>Entry Transportation:</span> Bus</div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="section-header">
          <h2>Gallery</h2>
          <div className="gallery-arrows">
            <FaChevronLeft className="arrow-icon disabled" />
            <FaChevronRight className="arrow-icon active" />
          </div>
        </div>
        <div className="gallery-grid">
          <div className="gallery-main"><img src={background1} alt="Gallery 1" /></div>
          <div className="gallery-sub"><img src={background1} alt="Gallery 2" /></div>
          <div className="gallery-sub"><img src={background1} alt="Gallery 3" /></div>
          <div className="gallery-side"><img src={background1} alt="Gallery 4" /></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
         <div className="section-header">
          <h2>Happy Customers Says</h2>
          <div className="gallery-arrows">
            <FaChevronLeft className="arrow-icon disabled" />
            <FaChevronRight className="arrow-icon active" />
          </div>
        </div>
        <div className="testimonials-row">
          {[1, 2].map((i) => (
            <div className="testimonial-card-small" key={i}>
              <img src={lyod} alt="user" />
              <p className="quote">“But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain...”</p>
              <span className="author">Lyod Gomez</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TourDetails;
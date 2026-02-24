import React from "react";
import "./home.css";
import background1 from "../../assets/background1.png";
import right from "../../assets/right arrow.png";
import left from "../../assets/left arrow.png";
import about from "../../assets/about picture.png";
import weirdwoman from "../../assets/weird woman.png";
import bycicle from "../../assets/bycicle.png";
import lyod from "../../assets/lyod.png";

import {
  FaGlobeAmericas,
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaFlag,
  FaCar,
  FaSearch,
} from "react-icons/fa";

import {
  FaBicycle,
  FaMapMarkedAlt,
  FaTicketAlt,
  FaUserTie,
  FaMapMarkerAlt,
  FaHandHoldingUsd,
  FaHeadset,
} from "react-icons/fa";

// ... inside the Home component, before the return, you can define the data:
const testimonials = [
  {
    name: "Llyod Gomez",
    image: lyod, // Using available 'lyod' image as placeholder
    text: "“SBut I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure”",
  },
  {
    name: "Lloyd Gomez",
    image: lyod,
    text: "“But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure”",
  },
];

const packages = [
  {
    title: "BIKE / RICKSHAW",
    price: 10,
    image: background1, // Replace with your actual image variable
    features: [
      { icon: <FaBicycle />, text: "Your bike for a day" },
      { icon: <FaMapMarkedAlt />, text: "City App" },
      { icon: <FaHandHoldingUsd />, text: "Discount on Rickshaw" },
      { icon: <FaHeadset />, text: "Guaranteed Support" },
    ],
  },
  {
    title: "BIKE TOURS",
    price: 30,
    image: background1,
    features: [
      { icon: <FaBicycle />, text: "A Mountain Bike Included" },
      { icon: <FaUserTie />, text: "A Guide For You" },
      { icon: <FaMapMarkerAlt />, text: "Bottle of water" },
      { icon: <FaHeadset />, text: "Guaranteed Support" },
    ],
  },
  {
    title: "BUS TRIPS",
    price: 45,
    image: background1,
    features: [
      { icon: <FaTicketAlt />, text: "Park ticket" },
      { icon: <FaCar />, text: "Return bus" },
      { icon: <FaUsers />, text: "Companion" },
      { icon: <FaHeadset />, text: "Guaranteed Support" },
    ],
  },
  {
    title: "TRANSFER",
    price: 10,
    image: background1,
    features: [
      { icon: <FaUserTie />, text: "Personal Driver" },
      { icon: <FaMapMarkerAlt />, text: "Wherever You Want" },
      { icon: <FaHandHoldingUsd />, text: "At the best price" },
      { icon: <FaHeadset />, text: "Guaranteed Support" },
    ],
  },
];

const Home = () => {
  return (
    <>
      <section
        className="section-1"
        style={{ backgroundImage: `url(${background1})` }}
      >
        <div className="home">
          <h1>Enjoy in the best way!</h1>
          <p>Enjoy our services for your trip anytime</p>
        </div>

        <div className="maincont">
          {/* Tab Selection */}
          <div className="search-tabs">
            <button className="tab active">
              <FaGlobeAmericas /> Public Tours
            </button>
            <button className="tab">
              <FaUsers /> Private Tours
            </button>
          </div>

          {/* Main Booking Bar */}
          <div className="booking-bar">
            <div className="input-field">
              <label>
                <FaUsers /> Number of people
              </label>
              <select>
                <option>Choose number</option>
                <option>1-2</option>
                <option>3-5</option>
              </select>
            </div>

            <div className="input-field">
              <label>
                <FaCalendarAlt /> Date
              </label>
              <input
                type="text"
                placeholder="Choose Date"
                onFocus={(e) => (e.target.type = "date")}
              />
            </div>

            <div className="input-field">
              <label>
                <FaClock /> Time
              </label>
              <select>
                <option>Choose Time</option>
              </select>
            </div>

            <div className="input-field">
              <label>
                <FaFlag /> Tour
              </label>
              <select>
                <option>Select Tour</option>
              </select>
            </div>

            <div className="input-field no-border">
              <label>
                <FaCar /> Transportation
              </label>
              <select>
                <option>Select Transportation</option>
              </select>
            </div>

            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="top">
          <div>
            <h2>Explore Our Popular Destinantions </h2>
          </div>
          <div className="arrows">
            <div>
              <img src={left} alt="Left Arrow" />
            </div>
            <div>
              <img src={right} alt="Right Arrow" />
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-image-container">
              <img src={background1} alt="Destination 1" className="card-img" />
            </div>
            <div className="card-content">
              <h3>Lucca Bike Tour</h3>
              <div className="price-row">
                <span className="price-label">from</span>
                <span className="price-value">34 €</span>
              </div>
              <div className="card-meta">
                <div className="meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  <p>EVERY DAY</p>
                </div>
                <div className="meta-item">
                  <FaUsers className="meta-icon" />
                  <p>3-10 PP</p>
                </div>
              </div>
              <p className="card-description">
                A tour of the city and its surroundings led by a professional
                guide ...
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image-container">
              <img src={background1} alt="Destination 1" className="card-img" />
            </div>
            <div className="card-content">
              <h3>Lucca Bike Tour</h3>
              <div className="price-row">
                <span className="price-label">from</span>
                <span className="price-value">34 €</span>
              </div>
              <div className="card-meta">
                <div className="meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  <p>EVERY DAY</p>
                </div>
                <div className="meta-item">
                  <FaUsers className="meta-icon" />
                  <p>3-10 PP</p>
                </div>
              </div>
              <p className="card-description">
                A tour of the city and its surroundings led by a professional
                guide ...
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image-container">
              <img src={background1} alt="Destination 1" className="card-img" />
            </div>
            <div className="card-content">
              <h3>Lucca Bike Tour</h3>
              <div className="price-row">
                <span className="price-label">from</span>
                <span className="price-value">34 €</span>
              </div>
              <div className="card-meta">
                <div className="meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  <p>EVERY DAY</p>
                </div>
                <div className="meta-item">
                  <FaUsers className="meta-icon" />
                  <p>3-10 PP</p>
                </div>
              </div>
              <p className="card-description">
                A tour of the city and its surroundings led by a professional
                guide ...
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image-container">
              <img src={background1} alt="Destination 1" className="card-img" />
            </div>
            <div className="card-content">
              <h3>Lucca Bike Tour</h3>
              <div className="price-row">
                <span className="price-label">from</span>
                <span className="price-value">34 €</span>
              </div>
              <div className="card-meta">
                <div className="meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  <p>EVERY DAY</p>
                </div>
                <div className="meta-item">
                  <FaUsers className="meta-icon" />
                  <p>3-10 PP</p>
                </div>
              </div>
              <p className="card-description">
                A tour of the city and its surroundings led by a professional
                guide ...
              </p>
            </div>
          </div>
        </div>
        <div className="after-cards">
          <div className="left">
            <img src={about} alt="about pic" />
          </div>
          <div className="right">
            <p className="title">WELCOME TO OUR SITE!</p>
            <h1>We are the best company for your visit</h1>
            <p className="description">
              After decades of experience, and a whole life in Lucca, we offer
              you the most complete tourism service in the city. In addition to
              having bikes and rickshaws to have as much fun as you want, you
              have the choice of tour guides with whom to tour and drivers for
              your every need! We offer packages in the way that you get the
              most at the lowest price. Book with us and we will always be
              available for you!
            </p>

            {/* NEW STATS SECTION */}
            <div className="stats-grid">
              <div className="stat-item">
                <h2>20+</h2>
                <p>
                  Years <br /> Experience
                </p>
              </div>
              <div className="stat-item">
                <h2>100+</h2>
                <p>
                  Happy <br /> Customer
                </p>
              </div>
              <div className="stat-item">
                <h2>15+</h2>
                <p>
                  Choice <br /> of Services
                </p>
              </div>
              <div className="stat-item">
                <h2>10+</h2>
                <p>
                  Professional <br /> Guides
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="weird-sec">
          <div className="weird1">
            <div className="container-2">
              <h1>
                Get Special Offers for <br /> Organizations
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                <br /> typesetting industry. Lorem Ipsum has been the
                <br /> industry's standard dummy text ever since the 1500s.
              </p>
              <button>contact us</button>
            </div>
          </div>
          <div className="weird2">
            <img
              className="weird-img"
              src={weirdwoman}
              alt="overlaping image"
            />
          </div>
        </div>
        <div className="services-section">
          <div className="service-card">
            <img src={background1} alt="Bike rental" />
            <h3>Bike and rickshaw rental</h3>
            <p>Book your quality vehicle quickly for an hour or all day!</p>
          </div>

          <div className="service-card">
            <img src={background1} alt="Guided tour" />
            <h3>Guided tour of the countryside</h3>
            <p>
              Live the real Lucchese experience by visiting the suburbs by bike!
            </p>
          </div>

          <div className="service-card">
            <img src={background1} alt="Taxi service" />
            <h3>Taxi and NCC service</h3>
            <p>
              Do you need not only a bike but also a driver? Then you have found
              the right place!
            </p>
          </div>

          <div className="service-card">
            <img src={background1} alt="Bus package" />
            <h3>Bus Package</h3>
            <p>
              Do you need not only a bike but also a driver? Then you have found
              the right place!
            </p>
          </div>
        </div>
        <div className="another-sec">
          <div className="form-left">
            <h1>Book bike now</h1>
            <div className="form-cont">
              <form>
                <div className="form-grid">
                  {/* Row 1 */}
                  <div className="individual-input">
                    <label>Name and Surname</label>
                    <input
                      type="text"
                      placeholder="Enter your name and surname"
                    />
                  </div>
                  <div className="individual-input">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="individual-input">
                    <label>Telephone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter your telephone number"
                    />
                  </div>
                  <div className="individual-input">
                    <label>Service Type</label>
                    <select>
                      <option value="" disabled selected>
                        Select the service types
                      </option>
                      <option value="bike">Bike Rental</option>
                      <option value="guided">Guided Tour</option>
                      <option value="taxi">Taxi / NCC</option>
                    </select>
                  </div>

                  {/* Row 3 */}
                  <div className="individual-input">
                    <label>Date</label>
                    <input type="date" placeholder="Select the date" />
                  </div>
                  <div className="individual-input">
                    <label>Time</label>
                    <input type="time" placeholder="Select the time" />
                  </div>

                  {/* Submit Button */}
                  <div className="button-container">
                    <button type="submit" className="submit-btn">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="img-sec">
            <img src={bycicle} alt="bike" />
          </div>
        </div>
        <div className="packages-section">
          <h2 className="packages-title">The Most Popular Packages</h2>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div className="package-card" key={index}>
                <div className="package-image">
                  <img src={pkg.image} alt={pkg.title} />
                </div>
                <div className="package-content">
                  <h4>{pkg.title}</h4>
                  <div className="package-price">
                    <span className="currency">€</span>
                    <span className="amount">{pkg.price}</span>
                    <span className="duration">/day</span>
                  </div>
                  <ul className="package-features">
                    {pkg.features.map((feat, i) => (
                      <li key={i}>
                        <span className="feat-icon">{feat.icon}</span>
                        {feat.text}
                      </li>
                    ))}
                  </ul>
                  <button className="package-btn">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="final-sec">
          <div className="top">
            <div>
              <h2>Happy customers say </h2>
            </div>
            <div className="arrows">
              <div>
                <img src={left} alt="Left Arrow" />
              </div>
              <div>
                <img src={right} alt="Right Arrow" />
              </div>
            </div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testi, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-header">
                  <img src={testi.image} alt={testi.name} className="user-avatar" />
                  <span className="user-name">{testi.name}</span>
                </div>
                <p className="testimonial-text">{testi.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

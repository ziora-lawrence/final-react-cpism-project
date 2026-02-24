import React from "react";
import "./tourpackages.css";
import background1 from "../../assets/background1.png";
import calender from "../../assets/calender.png";
import privateIcon from "../../assets/private.png";
import bycicle from "../../assets/bycicle.png";
import lyod from "../../assets/lyod.png";
import left from "../../assets/left arrow.png";
import right from "../../assets/right arrow.png";
const tourpackages = [
  {
    image: background1,
    title: "lucca bike tour",
    from: "from",
    currency: "34€",
    icon1: calender,
    everyday: "EVERY DAY",
    icon2: privateIcon,
    num: "3-10 PP",
    paragraph:
      "A tour of the city and its surroundings led by a professional ...",
    readmore: "Read More →",
  },
  {
    image: background1,
    title: "Wine tasting In Tuscany",
    from: "from",
    currency: "34€",
    icon1: calender,
    everyday: "MONDAY",
    icon2: privateIcon,
    num: "10-30 PP",
    paragraph:
      "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
    readmore: "Read More →",
  },
  {
    image: background1,
    title: "Cinque Terre Tour",
    from: "from",
    currency: "34€",
    icon1: calender,
    everyday: "TO BE DECIDED",
    icon2: privateIcon,
    num: "10-50 PP",
    paragraph:
      "Visiting the 5 Terre is a must, and you can never go there enough ...",
    readmore: "Read More →",
  },
  {
    image: background1,
    title: "Siena and Surroundings",
    from: "from",
    currency: "34€",
    icon1: calender,
    everyday: "TO BE DECIDED",
    icon2: privateIcon,
    num: "5-10 PP",
    paragraph:
      "Visit the beautiful Siena and the cities that surround it to experience ...",
    readmore: "Read More →",
  },
  {
    image: background1,
    title: "Tour of the Lucca Hills",
    from: "from",
    currency: "34€",
    icon1: calender,
    everyday: "AT YOUR CHOICE",
    icon2: privateIcon,
    num: "5-12 PP",
    paragraph:
      "Visit with us the beautiful hills of Lucca, with a guide who will make ...",
    readmore: "Read More →",
  },
  {
    image: background1,
    title: "Gardaland, Verona",
    from: "from",
    currency: "34€",
    icon1: calender,
    everyday: "TO BE DECIDED",
    icon2: privateIcon,
    num: "10-50 PP",
    paragraph:
      "Visit the largest and most fun park in Italy suitable for all ...",
    readmore: "Read More →",
  },
  {
    image: background1,
    title: "Pisa & Lucca",
    from: "from",
    currency: "34€",
    icon1: calender,
    everyday: "TO BE DECIDED",
    icon2: privateIcon,
    num: "10-50 PP",
    paragraph:
      "Visiting the 5 Terre is a must, and you can never go there enough ...",
    readmore: "Read More →",
  },
  {
    image: background1,
    title: "Florence",
    from: "from",
    currency: "34€",
    icon1: calender,
    everyday: "TO BE DECIDED",
    icon2: privateIcon,
    num: "5-10 PP",
    paragraph:
      "Visit the beautiful Siena and the cities that surround it to experience ...",
    readmore: "Read More →",
  },
];

const services = [
  {
    image: background1,
    title: "Bike and rickshaw rental",
    paragraph: "Book your quality vehicle quickly for an hour or all day!",
    readmore: "Read More →",
  },
  {
    image: background1,
    title: "Bike and rickshaw rental",
    paragraph: "Book your quality vehicle quickly for an hour or all day!",
    readmore: "Read More →",
  },
  {
    image: background1,
    title: "Bike and rickshaw rental",
    paragraph: "Book your quality vehicle quickly for an hour or all day!",
    readmore: "Read More →",
  },
  {
    image: background1,
    title: "Bike and rickshaw rental",
    paragraph: "Book your quality vehicle quickly for an hour or all day!",
    readmore: "Read More →",
  },
  {
    image: background1,
    title: "Bike and rickshaw rental",
    paragraph: "Book your quality vehicle quickly for an hour or all day!",
    readmore: "Read More →",
  },
  {
    image: background1,
    title: "Bike and rickshaw rental",
    paragraph: "Book your quality vehicle quickly for an hour or all day!",
    readmore: "Read More →",
  },
];

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
const Tourpackages = () => {
  return (
    <div>
      <section className="tourpackagessection">
        <h1 className="tit" style={{ color: "black" }}>
          Tour Packages
        </h1>
        <div className="tourpackages">
          {tourpackages.map((tour, index) => (
            <div key={index} className="tourcard">
              <img src={tour.image} alt={tour.title} className="tourimg" />
              <h3 className="tourtitle">{tour.title}</h3>
              <div className="layer1t">
                <p className="from">{tour.from}</p>
                <p className="currency">{tour.currency}</p>
              </div>
              <div className="layer2t">
                <div className="layer2tt">
                  <img src={tour.icon1} alt="calender" />
                  <p>{tour.everyday}</p>
                </div>
                <div className="layer2tt">
                  <img src={tour.icon2} alt="private" />
                  <p>{tour.num}</p>
                </div>
              </div>
              <p className="tourpara">{tour.paragraph}</p>
              <p className="readmore">{tour.readmore}</p>
            </div>
          ))}
        </div>
        <h1 className="secomd-title">Services</h1>

        <div className="services-grid">
          {services.map((serv, index) => (
            <div className="servicecard" key={index}>
              <img src={serv.image} alt={serv.title} className="serviceimg" />
              <h3 className="servicetitle">{serv.title}</h3>
              <p className="servicepara">{serv.paragraph}</p>
              <p className="readmore">{serv.readmore}</p>
            </div>
          ))}
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
                  <img
                    src={testi.image}
                    alt={testi.name}
                    className="user-avatar"
                  />
                  <span className="user-name">{testi.name}</span>
                </div>
                <p className="testimonial-text">{testi.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tourpackages;

import React from "react";
import "./aboutus.css";
import sidepic from "../../assets/sidepic.png";
import weirdsec from "../../assets/weirdsec.png";
import price from "../../assets/icon_best price (1).png";
import experience from "../../assets/icon_experience (1).png";
import guide from "../../assets/icon_guide (1).png";
import map from "../../assets/icon_map (1).png";
import lyod from "../../assets/lyod.png";
import right from "../../assets/right arrow.png";
import left from "../../assets/left arrow.png";

const testimonials = [
  {
    name: "Llyod Gomez",
    image: lyod, // Using available 'lyod' image as placeholder
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    name: "Llyod Gomez",
    image: lyod,
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
];

const below = [
  {
    number: "20+",
    years: "years",
    experience: "experience",
  },
  {
    number: "100+",
    years: "years",
    experience: "experience",
  },
  {
    number: "15+",
    years: "years",
    experience: "experience",
  },
  {
    number: "10+",
    years: "years",
    experience: "experience",
  },
];

const smalls = [
  {
    image: map,
    title: "Complete Packages For All Your Wishes",
  },
  {
    image: experience,
    title: "Over 30 Years Of Experience",
  },
  {
    image: guide,
    title: "Expert Guides For Yous",
  },
  {
    image: price,
    title: "Guaranteed fun at the best price!",
  },
];

const Aboutus = () => {
  return (
    <div>
      <section className="aboutus">
        <h1>Our team cares about your full relax</h1>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
        <button>view our tour packages</button>
      </section>
      <section className="section2">
        <div className="second">
          <div className="left">
            <img src={sidepic} alt="about pic" className='something-pic'/>
          </div>
          <div className="right">
            <p className="title">WELCOME TO OUR SITE!</p>
            <h1>We Are The Center Of Lucca To Offer You The Best</h1>
            <p className="description">
              We are right in the center of Lucca to offer you the real city
              life! With years of experience in practically every tourism
              sector, with us you can find complete packages at the lowest
              price, to travel and learn and have fun all without worries and
              without stress. What are you waiting for, book a bright evening, a
              trip to beautiful Tuscany or a personal tour for you!
            </p>
            <div className="stats-grid">
              {below.map((item, index) => (
                <div className="stat-item" key={index}>
                  <h2>{item.number}</h2>
                  <p>{item.years}</p>
                  <p>{item.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="small-sec"
          style={{ backgroundImage: `url(${weirdsec})` }}
        >
          {smalls.map((item, index) => (
            <div className="card-cont" key={index}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
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

export default Aboutus;

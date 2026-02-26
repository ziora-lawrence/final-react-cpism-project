import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Accountspage.css';
import background1 from "../../assets/background1.png";
import leftArrow from "../../assets/left arrow.png";
import rightArrow from "../../assets/right arrow.png";
import calenderIcon from "../../assets/calender.png";
import usersIcon from "../../assets/private.png";

import emptyimg from "../../assets/emptyimg.png";
import { getLoggedInEmail, isUserLoggedIn } from '../../utils/authStorage.js';

const AccountPage = () => {
  const navigate = useNavigate();
  const userEmail = getLoggedInEmail();

  // Redirect to home if not logged in
  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate('/');
    }
  }, [navigate]);

  const tourPackages = [
    {
      title: "Lucca Bike Tour",
      price: "34 €",
      image: background1,
      day: "EVERY DAY",
      people: "3-10 PP",
      desc: "A tour of the city and its surroundings led by a professional guide ..."
    },
    {
      title: "Wine tasting In Tuscany",
      price: "34 €",
      image: background1,
      day: "MONDAY",
      people: "10-30 PP",
      desc: "The real magic is here where you can enjoy the best Tuscan wine and eat ..."
    },
    {
      title: "Cinque Terre Tour",
      price: "34 €",
      image: background1,
      day: "TO BE DECIDED",
      people: "10-50 PP",
      desc: "Visiting the 5 Terre is a must, and you can never go there enough ..."
    },
    {
      title: "Siena and Surroundings",
      price: "34 €",
      image: background1,
      day: "TO BE DECIDED",
      people: "5-10 PP",
      desc: "Visit the beautiful Siena and the cities that surround it to experience ..."
    }
  ];

  return (
    <div className="account-page">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome back, {userEmail}!</h1>
        <p>Manage your bookings and explore more tour packages</p>
      </section>

      {/* My Tickets Section */}
      <section className="tickets-section">
        <h2 className="section-title">My Tickets</h2>
        <div className="empty-state">
          <img 
            src={emptyimg}
            alt="No tickets" 
            className="empty-img" 
          />
          <p className="empty-text">You don't have any tickets yet. Start planning your next trip!</p>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="packages-section">
        <div className="section-header">
          <h2 className="section-title">Tour Packages</h2>
          <div className="carousel-controls">
            <img src={leftArrow} alt="Previous" className="arrow-btn" />
            <img src={rightArrow} alt="Next" className="arrow-btn active" />
          </div>
        </div>

        <div className="packages-grid">
          {tourPackages.map((item, index) => (
            <div className="package-card" key={index}>
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <div className="card-price">
                  <span className="from">from</span>
                  <span className="amount">{item.price}</span>
                </div>
                <div className="card-meta">
                  <div className="meta-item">
                    <img src={calenderIcon} alt="Calendar" />
                    <span>{item.day}</span>
                  </div>
                  <div className="meta-item">
                    <img src={usersIcon} alt="Users" />
                    <span>{item.people}</span>
                  </div>
                </div>
                <p className="card-desc">{item.desc}</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AccountPage;
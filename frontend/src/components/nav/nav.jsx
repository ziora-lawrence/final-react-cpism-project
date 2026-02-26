import React from "react";
import "./nav.css";
import logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../modal/modal.jsx";
import SignUpForm from "../credentials/signup/signup.jsx";
import LoginForm from "../credentials/login/login.jsx";
import ForgotPassword from "../credentials/forgotpass/forgotpass.jsx";
import { isUserLoggedIn, logout } from "../../utils/authStorage.js";
import loggeduser from "../../assets/loggeduser.png";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isToursPage = location.pathname === "/tours";
  const isContactPage = location.pathname === "/contact";
  const isAccountPage = location.pathname === "/account";

  const [showsignup, setShowsignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showForgotPass, setshowForgotPass] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Check if user is logged in on mount and when location changes
  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());
  }, [location]);

  const handleForgotPassword = () => {
    setShowLogin(false);
    setshowForgotPass(true);
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <div
      className={`container ${isHomePage ? "nav-home" : ""} ${isAboutPage ? "nav-about" : ""} ${isToursPage ? "nav-tours" : ""} ${isContactPage ? "nav-contact" : ""} ${isAccountPage ? "nav-account" : ""}`}
    >
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger-btn ${hamburgerOpen ? "open" : ""}`}
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${hamburgerOpen ? "mobile-open" : ""}`}>
          <Link to="/">
            <li className={isHomePage ? "active-link" : ""}>Home</li>
          </Link>
          <Link to="/about">
            <li className={isAboutPage ? "active-link" : ""}>about us</li>
          </Link>
          <Link to="/tours">
            <li className={isToursPage ? "active-link" : ""}>Tour packages</li>
          </Link>
          <Link to="/contact">
            <li className={isContactPage ? "active-link" : ""}>contact us</li>
          </Link>
        </ul>

        {/* Navigation Buttons */}
        <div className={`nav-btns ${hamburgerOpen ? "mobile-open" : ""}`}>
          <select className={!isHomePage ? "dark-select" : ""}>
            <option value="eng">eng</option>
            <option value="fr">fr</option>
          </select>

          {!isLoggedIn ? (
            // Show Login and Signup buttons when NOT logged in
            <>
              <button className="login" onClick={() => {
                setShowLogin(true);
                setHamburgerOpen(false);
              }}>
                Login
              </button>
              <button className="signup" onClick={() => {
                setShowsignup(true);
                setHamburgerOpen(false);
              }}>
                sign up
              </button>
            </>
          ) : (
            // Show user dropdown when logged in
            <div className="user-menu-container">
              <div
                className="logged-user-icon"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <img src={loggeduser} alt="user" className="usericon1" />
              </div>

              {menuOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      <Link to="/account" onClick={() => {
                        setMenuOpen(false);
                        setHamburgerOpen(false);
                      }}>
                        My Tickets
                      </Link>
                    </li>
                    <li>
                      <Link to="/account" onClick={() => {
                        setMenuOpen(false);
                        setHamburgerOpen(false);
                      }}>
                        Settings
                      </Link>
                    </li>
                    <hr />
                    <li className="logout-btn" onClick={() => {
                      handleLogout();
                      setHamburgerOpen(false);
                    }}>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        <Modal isOpen={showLogin} onClose={() => setShowLogin(false)}>
          <LoginForm
            onClose={() => setShowLogin(false)}
            onSwitchToSignup={() => {
              setShowLogin(false);
              setShowsignup(true);
            }}
            onForgotPassword={handleForgotPassword}
          />
        </Modal>
        <Modal isOpen={showForgotPass} onClose={() => setshowForgotPass(false)}>
          <ForgotPassword onClose={() => setshowForgotPass(false)} />
        </Modal>
        <Modal isOpen={showsignup} onClose={() => setShowsignup(false)}>
          <SignUpForm
            onClose={() => setShowsignup(false)}
            onSwitchToLogin={() => {
              setShowsignup(false);
              setShowLogin(true);
            }}
          />
        </Modal>
      </nav>
    </div>
  );
};

export default Nav;

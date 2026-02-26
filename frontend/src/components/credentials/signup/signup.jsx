import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import { saveUserCredentials } from '../../../utils/authStorage';

const SignUpForm = ({ onSwitchToLogin, onClose }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    
    // Validation
    if (!name.trim()) {
      setError('Please enter your name and surname');
      return;
    }
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (!termsAccepted) {
      setError('You must agree to the Terms and Privacy policy');
      return;
    }

    // Save credentials to storage
    saveUserCredentials(email, password, rememberMe);
    
    // Close modal and redirect
    setError('');
    if (onClose) {
      onClose();
    }
    navigate('/account');
  };

  return (
    <div className="signup-form-container">
      <h2>Create Account</h2>
      
      <form className="signup-form" onSubmit={handleSignUp}>
        <div className="form-input-group">
          <label>Name and Surname</label>
          <input 
            type="text" 
            placeholder="Enter your name and surname" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>

        <div className="form-input-group">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="form-input-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <span 
              className="password-toggle" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
        </div>

        <div className="form-checkbox">
          <input 
            type="checkbox" 
            id="remember" 
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember">Remember me</label>
        </div>

        <div className="form-checkbox">
          <input 
            type="checkbox" 
            id="terms" 
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required 
          />
          <label htmlFor="terms">
            I agree with <span className="highlight">Terms</span> and <span className="highlight">Privacy</span>
          </label>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="signup-submit-btn">Sign Up</button>
      </form>

      <div className="form-divider">
        <span>or</span>
      </div>

      <button className="google-signup-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
        Sign Up with Google
      </button>

      <p className="form-footer">
        Already have an account? <span className="login-link" onClick={onSwitchToLogin}>Log In</span>
      </p>
    </div>
  );
};

export default SignUpForm;
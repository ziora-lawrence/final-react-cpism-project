import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { validatePassword, emailExists, saveUserCredentials } from '../../../utils/authStorage';

const LoginForm = ({ onSwitchToSignup, onForgotPassword, onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validation
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }

    // Check if email exists in storage
    if (!emailExists(email)) {
      setError('Email not found. Please sign up first');
      return;
    }

    // Validate password
    if (!validatePassword(email, password)) {
      setError('Incorrect password');
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

  const handleForgotClick = () => {
    if (!email.trim()) {
      setError('Please enter your email address first');
      return;
    }
    if (!emailExists(email)) {
      setError('Email not found in our system');
      return;
    }
    setError('');
    onForgotPassword();
  };

  return (
    <div className="login-form-container">
      <h2>Log In</h2>
      
      <form className="login-form" onSubmit={handleLogin}>
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

        <div className="form-options">
          <div className="remember-me">
            <input 
              type="checkbox" 
              id="remember" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <span className="forgot-password" onClick={handleForgotClick}>Forgot password?</span>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-submit-btn">Log In</button>
      </form>

      <div className="form-divider">
        <span>or</span>
      </div>

      <button className="google-login-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
        Log In with Google
      </button>

      <p className="form-footer">
        Don't have an account? <span className="signup-link" onClick={onSwitchToSignup}>Sign Up</span>
      </p>
    </div>
  );
};

export default LoginForm;
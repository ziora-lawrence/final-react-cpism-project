import React, { useState } from "react";
import "./forgotpass.css";
import { emailExists, updatePassword } from '../../../utils/authStorage';

const ForgotPassword = ({ onClose }) => {
  const [step, setStep] = useState(1); // 1: Request, 2: OTP, 3: Reset
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Handle email submission
  const handleSendCode = () => {
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    // Check if email exists in storage
    if (!emailExists(email)) {
      setError("Email not found in our system");
      return;
    }
    setError("");
    setStep(2);
  };

  // Handle OTP input
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Allow only 1 digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 3) {
      document.querySelector(`.otp-box:nth-child(${index + 2})`).focus();
    }
  };

  // Handle OTP verification
  const handleVerifyCode = () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 4) {
      setError("Please enter all 4 digits");
      return;
    }
    // Here you would validate the OTP with your backend
    setError("");
    setStep(3);
  };

  // Handle password reset
  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      setError("Please fill in all password fields");
      return;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    
    // Update password in storage
    const success = updatePassword(email, newPassword);
    if (success) {
      setError("");
      onClose();
    } else {
      setError("Failed to update password");
    }("Passwords do not match");
      return;
    }
    // Here you would submit the new password to your backend
    setError("");
    onClose();
  };

  // Handle resend code
  const handleResendCode = () => {
    setError("");
    setOtp(["", "", "", ""]);
    // Here you would resend the code via API
  };

  return (
    <div className="forgot-password-container">
      {/* STEP 1: REQUEST RESET */}
      {step === 1 && (
        <div className="forgot-step">
          <h2>Forgot Password?</h2>
          <p className="step-description">
            Enter your email address to receive a 4-digit verification code.
          </p>
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
          {error && <p className="error-message">{error}</p>}
          <button className="forgot-submit-btn" onClick={handleSendCode}>
            Send Code
          </button>
        </div>
      )}

      {/* STEP 2: VERIFY OTP */}
      {step === 2 && (
        <div className="forgot-step">
          <h2>Verify Code</h2>
          <p className="step-description">
            Enter the 4-digit code sent to your email.
          </p>
          <div className="otp-input-container">
            {otp.map((digit, index) => (
              <input 
                key={index}
                type="text" 
                maxLength="1" 
                className="otp-box" 
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="forgot-submit-btn" onClick={handleVerifyCode}>
            Verify Code
          </button>
          <p className="resend-text">
            Didn't receive code? <span onClick={handleResendCode}>Resend</span>
          </p>
        </div>
      )}

      {/* STEP 3: NEW PASSWORD */}
      {step === 3 && (
        <div className="forgot-step">
          <h2>New Password</h2>
          <p className="step-description">
            Set a strong password to protect your account.
          </p>
          <div className="form-input-group">
            <label>New Password</label>
            <input 
              type="password" 
              placeholder="Enter new password" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required 
            />
          </div>
          <div className="form-input-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm your password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="forgot-submit-btn" onClick={handleResetPassword}>
            Reset Password
          </button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
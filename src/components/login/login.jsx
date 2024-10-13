import React from "react";
import "./login.css";

const LoginModal = ({ show, closeModal }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="card">
          <div className="card-heading">Login</div>
          <div className="card-subtitle">
            Let us know who we are giving service on
          </div>

          <input
            type="text"
            id="contact-info"
            className="input-box"
            placeholder="*Email or Phone"
          />
          <input
            type="password"
            id="password"
            className="input-box"
            placeholder="*Password"
          />

          <a href="#" className="forgot-password">
            Forgot Password?
          </a>

          <button className="confirm-login-btn">Login</button>
          <div className="another-option-btn-wrapper">
            <button className="sign-in-btn">Login</button>
            <button className="home-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { login } from "../../services/authService";
import "./login.css";

const LoginModal = ({ show, closeModal, onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!show) return null;

  const handleLogin = async () => {
    try {
      const data = await login(username, password);
      onLoginSuccess(data.token);
      alert("Logged in Successfully");
      closeModal();
    } catch (error) {
      alert("Login Failed");
    }
  };

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
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            className="input-box"
            placeholder="*Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <a href="#" className="forgot-password">
            Forgot Password?
          </a>

          <button className="confirm-login-btn" onClick={handleLogin}>
            Login
          </button>
          <div className="another-option-btn-wrapper">
            <button className="sign-in-btn">Sign In</button>
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

import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { register } from "../../services/authService";
import "./signIn.css";

const SignIn = ({ closeModal, onSignInSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const data = await register(username, password);
      alert("User registered successfully!");
      onSignInSuccess();
    } catch (error) {
      alert("Error registering user");
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="card">
          <div className="card-heading">Sign In</div>
          <div className="card-subtitle">
            Let us know who we are giving service on
          </div>

          <label className="input-label" htmlFor="contact-info">
            Email or Phone
          </label>
          <input
            type="text"
            id="contact-info"
            className="input-box"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input-box"
            placeholder="*Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="confirm-sign-in-button" onClick={handleRegister}>
            Sign In
          </button>
          <button className="home-button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
      <div className="modal-overlay" onClick={closeModal}></div>
    </div>
  );
};

export default SignIn;

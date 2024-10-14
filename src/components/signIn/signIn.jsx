import React from "react";
import "./signIn.css";

const SignIn = ({ closeModal }) => {
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
            placeholder="*Email or Phone"
          />

          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input-box"
            placeholder="*Password"
          />

          <label className="input-label" htmlFor="repeat-password">
            Repeat Password
          </label>
          <input
            type="password"
            id="repeat-password"
            className="input-box"
            placeholder="*Repeat password"
          />

          <button className="confirm-sign-in-button">Sign In</button>
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

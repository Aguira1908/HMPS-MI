import React from "react";
import "./signIn.css";

const SignIn = () => {
  return (
    <div className="card">
      <div className="card-heading">Sign In</div>
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
      <input
        type="password"
        id="repeat-password"
        className="input-box"
        placeholder="*Repeat password"
      />

      <button className="sign-in-button">Login</button>
      <button className="home-button">Home</button>
    </div>
  );
};

export default SignIn;

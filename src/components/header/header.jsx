import React, { useState, useEffect } from "react";
import "./header.css";
import headerImg from "../../img/headerlogo.png";
import LoginModal from "../login/login";
import SignIn from "../signIn/signIn";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSignInOpen, setIsModalSignInOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openLoginModal = () => {
    setIsModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsModalOpen(false);
  };

  const openSignInModal = () => {
    setIsModalSignInOpen(true); // Membuka modal
  };

  const closeSignInModal = () => {
    setIsModalSignInOpen(false); // Menutup modal
  };

  return (
    <div className={`header-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <img
        src={headerImg}
        alt="Logo"
        className={`logo ${isScrolled ? "hide-logo" : ""}`}
      />
      <ul>
        <li>
          <a className="nav-button" href="/">
            Home
          </a>
          <a className="nav-button" href="/about">
            About Us
          </a>
          <a className="nav-button" href="#activity">
            Activity
          </a>
          <a className="nav-button" href="#product">
            Our Product
          </a>
        </li>
      </ul>
      <div className="login-button-wrapper">
        <button className="btn-signIn" onClick={openSignInModal}>
          Sign-In
        </button>
        <button className="btn-login" onClick={openLoginModal}>
          Login
        </button>
      </div>
      {isModalSignInOpen && <SignIn closeModal={closeSignInModal} />}

      {/* Add the modal component here */}
      <LoginModal show={isModalOpen} closeModal={closeLoginModal} />

      {/* Apply background blur when modal is open */}
      {isModalOpen && <div className="blur-background"></div>}
    </div>
  );
};

export default Header;

// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import Home from "./components/home/home";
import Header from "./components/header/header";
import Home from "./components/home/home";
import AboutUs from "./components/aboutUs/aboutUs";
import LoginModal from "./components/login/login";

const HmpsMi = ({ openLoginModal }) => (
  <div>
    <Home openLoginModal={openLoginModal} />
    <AboutUs />
  </div>
);

function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  // Fungsi untuk membuka modal
  const openLoginModal = () => setLoginModalOpen(true);
  // Fungsi untuk menutup modal
  const closeLoginModal = () => setLoginModalOpen(false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HmpsMi />
              </>
            }
          />
        </Routes>
        {isLoginModalOpen && <LoginModal closeLoginModal={closeLoginModal} />}
      </div>
    </Router>
  );
}

export default App;

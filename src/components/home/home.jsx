import React from "react";
import "../home/home.css";

const Home = () => {
  return (
    <section
      className="section-Home"
      // style={{
      //   backgroundImage: ` url(${imgBackground})`,
      // }}
    >
      <h1 className="welcome-text">Welcome To</h1>
      <div className="additional-text">
        <span className="hmps-text">HMPS -</span>
        <span className="manajemen-text">MANAJEMEN INFORMATIKA</span>
      </div>
    </section>
  );
};

export default Home;

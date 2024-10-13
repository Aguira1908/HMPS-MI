import React from "react";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <section className="section-aboutUs">
      <div className="body-wrapper">
        <div className="body-title">
          <h2 style={{ color: "#f4ba09" }}>About Us</h2>
          <h1 style={{ color: "white" }}>HMPS - MANAJEMEN INFORMATIKA</h1>
        </div>

        <div className="body-main">
          <p>
            Menjadikan HMPS MI Sebagai organisasi yang memiliki dedikasi serta
            loyalitas yang tinggi dalam menyatukan dan memperkuat chemistry
            antar mahasiswa/i serta menjadikan anggota HMPS MI sebagai penggerak
            dari keseluruhan mahasiswa/i Prodi MI guna sebagai pendukung bagi
            mahasiswa/i yang berprestasi.
          </p>
        </div>

        <div className="body-footer">
          <button
            onClick={() => (window.location.href = "../Pimpinan/index.html")}
            onMouseOver={() => PointerEvent}
          >
            Selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

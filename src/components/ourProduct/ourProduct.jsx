import React, { useRef, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import lanyard from "../../img/MOCKUPlanyard3 3.jpg";
import keyChain from "../../img/MANAJEMEN INFORMATIKA (1).png";
import tumbler from "../../img/desain tumblr e bisnis 2.png";
import workJacket from "../../img/workjacket.png";
import topi from "../../img/MANAJEMEN INFORMATIKA.png";

import "./ourProduct.css";

const OurProduct = () => {
  const productsRef = useRef(null); // Reference to the products div
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productWidth, setProductWidth] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const navigate = useNavigate();

  // Calculate product width and count after the component mounts
  useEffect(() => {
    const products = productsRef.current;
    if (products && products.children.length > 0) {
      const firstProduct = products.children[0];
      const calculatedProductWidth = firstProduct.offsetWidth + 40; // 300px width + 40px margin
      setProductWidth(calculatedProductWidth);
      setProductCount(products.children.length);
    }
  }, []);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < productCount - 3) {
      // Show 3 products at a time
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Apply the sliding effect using inline style
  const translateX = `translateX(-${currentIndex * productWidth}px)`;

  const pilihanProduct = (jenis) => {
    navigate(`/productDetail?jenis=${jenis}`);
  };

  return (
    <section className="section-ourProduct">
      <h1>Our Products</h1>
      <div className="products-wrapper">
        <div className="arrow left" onClick={slideLeft}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div
          className="products"
          ref={productsRef}
          style={{ transform: translateX }}
        >
          <div className="product">
            <img
              alt="Lanyard with ID card and design"
              height="400"
              src={lanyard}
              width="300"
              onClick={() => pilihanProduct("Lanyard")}
            />
          </div>
          <div className="product">
            <img
              alt="Keychain"
              height="400"
              src={keyChain}
              width="300"
              onClick={() => pilihanProduct("Gantungan Kunci")}
            />
          </div>
          <div className="product produk-tumbler">
            <img
              alt="White and black bottles with text and logo"
              src={tumbler}
              width="300"
              height="auto"
              onClick={() => pilihanProduct("Tumbler")}
            />
          </div>
          <div className="product produk-jaket">
            <img
              alt="Jacket"
              src={workJacket}
              width="300"
              height="auto"
              onClick={() => pilihanProduct("Jahim")}
            />
          </div>
          {/* <div className="product">
            <img
              alt="Hat"
              height="400"
              width="300"
              src={topi}
              onClick={() => pilihanProduct("Topi")}
            />
          </div> */}
        </div>
        <div className="arrow right" onClick={slideRight}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;

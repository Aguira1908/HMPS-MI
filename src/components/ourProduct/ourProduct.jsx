import React, { useRef, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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
              src="https://storage.googleapis.com/a1aa/image/eqeS2W1ssKnPYEOGSXHt2ZFBTsf2kEnf3yrYKO1K9ULLGwWOB.jpg"
              width="300"
              onClick={() => pilihanProduct("Lanyard")}
            />
          </div>
          <div className="product">
            <img
              alt="Keychain"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/gUgfvEyqsdwufUa5yqFRVLEWfYOS1EPTARMh7blzSfZsZxWOB.jpg"
              width="300"
              onClick={() => pilihanProduct("Gantungan Kunci")}
            />
          </div>
          <div className="product">
            <img
              alt="White and black bottles with text and logo"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/2ccirQpn904MNdQBoz1kQoFXkIBH0p5NfTScWDc0nLhwA2yJA.jpg"
              width="300"
              onClick={() => pilihanProduct("Tumbler")}
            />
          </div>
          <div className="product">
            <img
              alt="Jacket"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/PhEtqrTKDCrpKBxb40qE02g3H4NosVZmkGASxZ3eISB5L2yJA.jpg"
              width="300"
              onClick={() => pilihanProduct("Jahim")}
            />
          </div>
          <div className="product">
            <img
              alt="Hat"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/v4I1RKFtNn6FNNOU054WB2aOKkf1MDzGHA6rFdz3N994L2yJA.jpg"
              width="300"
              onClick={() => pilihanProduct("Topi")}
            />
          </div>
        </div>
        <div className="arrow right" onClick={slideRight}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;

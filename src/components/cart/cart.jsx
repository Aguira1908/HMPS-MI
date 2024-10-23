import React, { useState } from "react";
import "./cart.css"; // Link your styles
import { useLocation } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const produkString = queryParams.get("produk");
  let produk = null;

  const [quantity, setQuantity] = useState(1); // Initial quantity
  const [isSent, setIsSent] = useState(false); // Checkbox state
  const basePrice = 30000;
  const shippingFee = 10000;

  if (produkString) {
    try {
      produk = JSON.parse(decodeURIComponent(produkString)); // Decode dan parse JSON string
      console.log("Produk berhasil di-parse:", produk); // Debugging
    } catch (error) {
      console.log("Error Parsing JSON: ", error);
    }
  }

  // Calculate total based on quantity and shipping selection
  const total = isSent
    ? basePrice * quantity + shippingFee
    : basePrice * quantity;

  return (
    <section className="section-cart">
      <a className="back-cart" href="#">
        Back
      </a>
      <div className="title-cart">
        {produk ? produk.judul_produk : "Product"}
      </div>
      <div className="subtitle-cart">
        Item Stock: {produk ? produk.stok_produk : "N/A"} | Terjual: xx
      </div>
      <div className="line-cart"></div>
      <div className="price-cart">Rp {produk ? produk.harga_produk : 0}</div>
      <div className="product-section-cart">
        <img
          alt={produk ? produk.judul_produk : "Product"}
          className="product-image-cart"
          height="350"
          src={produk ? produk.foto_produk : ""}
          width="250"
        />
        <div className="product-details-cart">
          <div className="quantity-control-cart">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <input type="text" value={quantity} readOnly />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <div className="checkbox-container-cart">
            <div className="checkbox-wrapper-cart">
              <input
                id="send-item"
                type="checkbox"
                checked={isSent}
                onChange={() => setIsSent(!isSent)}
              />
              <label htmlFor="send-item">
                Would you like the item to be sent?
              </label>
            </div>
            {isSent && (
              <div className="note-cart">*this will add up to Rp10.000</div>
            )}
          </div>
          <div className="note2-cart">
            There are 3 days return warranty if the item is not as promised or
            has delivery issues.
          </div>
        </div>
      </div>
      <div className="total-checkout-container-cart">
        <div className="total-cart">Total Rp{total.toLocaleString()}</div>
        <button className="checkout-button-cart">Check Out</button>
      </div>
    </section>
  );
}

export default Cart;

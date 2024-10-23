import React, { useEffect, useState } from "react";
import "./productDetail.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import DetailModal from "../detailProductModal/detailProductModal";
// import { getProductByName } from "../../services/productService";
import { Buffer } from "buffer";
import { getProductByName } from "../../services/productService";

const ProductDetail = () => {
  const [isDetailModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jenis = queryParams.get("jenis");
  const [showFullDescription, setShowFullDescription] = useState(false);
  // Menggunakan useNavigate untuk navigasi
  const navigate = useNavigate(); // Tambahkan ini

  // Mengambil data produk menggunakan API
  const [dataProduct, setDataProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const result = await getProductByName(jenis);
  //       if (result && result.length > 0) {
  //         // Mengambil produk pertama dari array
  //         const product = result[0];

  //         // Cek apakah foto_produk adalah Buffer
  //         if (product.foto_produk && product.foto_produk.type === "Buffer") {
  //           const base64String = Buffer.from(product.foto_produk.data).toString(
  //             "base64"
  //           );
  //           product.foto_produk = `data:image/jpeg;base64,${base64String}`; // Sesuaikan dengan format gambar
  //           console.log(
  //             "Converted foto_produk to base64:",
  //             product.foto_produk
  //           ); // Debugging
  //         } else {
  //           console.log(
  //             "foto_produk is not a Buffer, value:",
  //             product.foto_produk
  //           ); // Debugging
  //         }

  //         setDataProduct(product);
  //       } else {
  //         setDataProduct(null); // Atau set error jika tidak ada produk
  //       }
  //       console.log("Fetched Product Data:", result);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [jenis]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log(`Fetching data for: ${jenis}`);
        const result = await getProductByName(jenis);
        console.log(result);

        if (result) {
          // Cek jika foto_produk ada dan konversi jika perlu
          if (result.foto_produk && result.foto_produk.type === "Buffer") {
            const base64String = Buffer.from(result.foto_produk.data).toString(
              "base64"
            );
            result.foto_produk = `data:image/jpeg;base64,${base64String}`;
          }

          setDataProduct(result); // Set dataProduct ke objek hasil
        } else {
          setDataProduct(null); // Set null jika tidak ada produk yang ditemukan
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [jenis]);

  const openDetailModal = () => {
    setIsModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsModalOpen(false);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!dataProduct) {
    return <div>No product data available.</div>;
  }

  // Fungsi untuk kembali ke halaman home
  const backProduct = () => {
    navigate("/"); // Gunakan navigate untuk berpindah halaman
  };

  const cartSection = (dataProduct) => {
    const productString = encodeURIComponent(JSON.stringify(dataProduct)); // Konversi objek ke string JSON
    navigate(`/cart?produk=${productString}`); // Kirim data sebagai parameter query
  };

  return (
    <section className="section-produk-detail">
      <div className="wrapping-our-product">
        <div className="back-link" onClick={() => backProduct()}>
          Back
        </div>
        <div className="title-produk-detail">Our Product</div>
        <div className="content-produk-detail">
          <div className="left-section-produk-detail">
            <img
              height="400px"
              width="300px"
              // alt={dataProduct.nama_produk}
              src={dataProduct.foto_produk} // Gunakan foto_produk yang sudah dikonversi
            />
          </div>
          <div className="right-section-produk-detail">
            <h2>{dataProduct.judul_produk}</h2>
            <p>Item Stock: {dataProduct.stok_produk} | Terjual: xx</p>
            <div className="price">Rp {dataProduct.harga_produk}</div>
            <p>
              {showFullDescription
                ? dataProduct.deskripsi_produk
                : `${dataProduct.deskripsi_produk.substring(0, 400)}...`}
              <a className="btn-selengkapnya" onClick={openDetailModal}>
                Selengkapnya
              </a>
            </p>

            <button
              className="purchase-button"
              onClick={() => cartSection(dataProduct)}
            >
              Purchase Now
            </button>
          </div>
        </div>
      </div>

      <DetailModal
        show={isDetailModalOpen}
        closeModal={closeDetailModal}
        productData={dataProduct}
      />
      {isDetailModalOpen && <div className="blur-background"></div>}
    </section>
  );
};

export default ProductDetail;

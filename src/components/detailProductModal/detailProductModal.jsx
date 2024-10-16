import React from "react";
import "./detailProductModal.css";
import backImg from "../../img/back.png";

const DetailProductModal = ({ show, closeModal }) => {
  if (!show) return null;

  return (
    <section className="section-detail-modal">
      <div className="top-wrapper-detail-modal">
        <div className="topleft-detail-modal">
          <div className="title-detail-modal">
            ID CARD MANAJEMEN INFORMATIKA
          </div>
          <div className="subtitle-detail-modal">
            Item Stock : 25 | Terjual : xx
          </div>
          <div className="price-detail-modal">Rp 30.000</div>
        </div>
        <div className="topright-detail-modal">
          <img
            className="close-modal-detail"
            src={backImg}
            alt="Close"
            onClick={closeModal}
          />
        </div>
      </div>
      <div className="features-detail-modal">
        <p>Keunggulan ID Card Program Studi:</p>
        <ul>
          <li>
            Desain Eksklusif: Menampilkan logo resmi program studi dan kampus,
            memberikan tampilan profesional dan elegan.
          </li>
          <li>
            Keamanan Terjamin: Dilengkapi dengan barcode atau chip untuk akses
            mudah ke fasilitas kampus seperti perpustakaan, laboratorium, dan
            area khusus lainnya.
          </li>
          <li>
            Material Tahan Lama: Dibuat dari bahan PVC berkualitas tinggi yang
            tahan air dan goresan, sehingga ID Card Anda tetap awet dan terlihat
            seperti baru.
          </li>
          <li>
            Kemudahan Identifikasi: Foto, nama, dan nomor identifikasi tercetak
            jelas, memudahkan proses identifikasi dan administrasi di berbagai
            aktivitas akademik.
          </li>
          <li>
            Simbol Kebanggaan: Membawa ID Card ini adalah bukti nyata komitmen
            Anda terhadap pendidikan dan kontribusi dalam dunia akademik.
          </li>
        </ul>
        <br />
        <p>
          Tunjukkan identitas Anda dengan bangga dan akses berbagai fasilitas
          kampus dengan mudah. ID Card Program Studi, lebih dari sekadar kartu,
          ini adalah simbol dedikasi Anda!
        </p>
        <p>
          Pesan sekarang dan jadilah bagian dari komunitas profesional yang
          solid!
        </p>
      </div>
      <a href="#" className="purchase-button-detail-modal">
        Purchase Now
      </a>
    </section>
  );
};

export default DetailProductModal;

// src/services/productService.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/products"; // Ganti dengan URL backend Anda

// Fungsi untuk mendapatkan semua produk
export const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Fungsi untuk mendapatkan produk berdasarkan nama
export const getProductByName = async (jenis) => {
  const response = await axios.get(`${API_URL}/${jenis}`); // Sesuaikan dengan rute API Anda
  return response.data;
};

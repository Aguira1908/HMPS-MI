import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getProducts = async () => {
  try {
    const responseProductData = await axios.get(`${API_URL}/products`);
    return responseProductData.data;
  } catch (err) {
    console.log(`Error Getting Products: ${err.message}`);
    return null;
  }
};

export const getProductByName = async (nameProduct) => {
  try {
    const responseProductDataByName = await axios.get(
      `${API_URL}/products/name/${nameProduct}`
    );
    return responseProductDataByName.data;
  } catch (err) {
    console.log(`Error Getting Product by Name: ${err.message}`);
    return null;
  }
};

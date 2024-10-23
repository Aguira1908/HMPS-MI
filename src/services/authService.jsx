import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const register = async (username, password) => {
  try {
    const responseRegister = await axios.post(`${API_URL}/register`, {
      username,
      password,
    });
    return responseRegister.data;
  } catch (err) {
    throw new Error("error registering user");
  }
};

export const login = async (username, password) => {
  try {
    const responseLogin = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    if (responseLogin.data.token) {
      localStorage.setItem("token", responseLogin.data.token);
    }
    return responseLogin.data;
  } catch (err) {
    throw new Error("Error Loging In");
  }
};

export const logout = async () => {
  localStorage.removeItem("token");
};

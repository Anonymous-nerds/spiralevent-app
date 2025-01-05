import axios from "axios";

//********************** Variables from env file **********************//
const API_DEV_LINK = import.meta.env.VITE_BACKEND_DEVELOPMENT_API_LINK; // Development API link
// const API_PRO_LINK = import.meta.env.VITE_BACKEND_PRODUCTION_API_LINK; // Production API link

//********************** Create an axios instance **********************//
const api = axios.create({
  baseURL: API_DEV_LINK, // Backend API URL
});

//********************** Include token in authenticated requests (if using JWT) **********************//
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Fetch token from local storage
  if (token) { config.headers.Authorization = `Bearer ${token}`; } // Set token in headers
  return config; // Return the config object
});

export default api;
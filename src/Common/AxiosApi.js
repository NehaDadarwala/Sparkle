import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://sparkle-api.onrender.com",
});

export default axiosApi;
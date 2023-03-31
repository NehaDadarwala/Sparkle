//Auther : Sakshi Chaitanya Vaidya, B00917159

import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://sparkle-api.onrender.com",
  //baseURL: "http://localhost:3000/",

});

export default axiosApi;
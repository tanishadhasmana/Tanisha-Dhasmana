// src/axios.js

import axios from "axios";

// Change this to your backend URL
const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Update with your backend server URL
});

export default instance;

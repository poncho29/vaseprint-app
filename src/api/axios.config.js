import axios from "axios";

const api = axios.create({
  // baseURL: "http://sebasdev.tech/api",
  baseURL: "http://localhost:8080/api",
  timeout: 5000,
  headers: {'x-token': localStorage.getItem('tokenVsprint') || ''}
});

export default api;
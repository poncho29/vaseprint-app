import axios from "axios";

const api = axios.create({
  baseURL: "http://sebasdev.tech/api",
  timeout: 5000,
  headers: {Authorization: localStorage.getItem('x-token') || ''}
});

export default api;
import api from "./../api/axios.config";

export const getProducts = async() => {
  const defError = 'Error getting products';

  try {
    const { data } = await api.get("/products");
    return data;
  } catch (error) {
    return { err: error.message || defError };
  }
};
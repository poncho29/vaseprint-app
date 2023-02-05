import api from '../api/axios.config';

export const getUsers = async() => {
  const defError = 'Error getting products';

  try {
    const { data } = await api.get('/users');
    return data;
  } catch (error) {
    return { err: error.message || defError };
  }
}
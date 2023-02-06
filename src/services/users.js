import api from '../api/axios.config';

export const getUsers = async(currentPage = 1, limit = 5) => {
  const defError = 'Error getting products';

  try {
    const { data } = await api.get(`/users?offset=${currentPage}&limit=${limit}`);
    return data;
  } catch (error) {
    return { err: error.message || defError };
  }
}

export const deleteUser = async(id) => {
  const defError = 'error deleting user';

  try {
    const response = await api.delete(`/users/${id}`);
    return response;
  } catch (error) {
    const { response } = error;
    return response || defError;
  }
}
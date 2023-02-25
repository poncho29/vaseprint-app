import api from '../api/axios.config';

export const getUser = async(id = '') => {
  const defError = 'Error getting user';

  try {
    const response = await api.get(`/users/${id}`);
    return response;
  } catch (error) {
    const { response } = error;
    return response || defError;
  }
}

export const getUsers = async(currentPage = 1, limit = 5) => {
  const defError = 'Error getting users';

  try {
    const { data } = await api.get(`/users?offset=${currentPage}&limit=${limit}`);
    return data;
  } catch (error) {
    return { err: error.message || defError };
  }
}

export const createUser = async(user) => {
  const defError = 'error creating user';

  try {
    const { data } = await api.post('/users', user);
    return data;
  } catch (error) {
    const { response } = error;
    return response || defError;
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
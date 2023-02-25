import api from '../api/axios.config';

export const uploadFile = async (file) => {
  const defError = 'Error uploaded file';

  try {
    const { data } = await api.post('/uploads', file);
    return data;
  } catch (error) {
    return { err: error.message || defError };
  }
};

export const deleteFile = async (file) => {
  const defError = 'Error deleting image';

  try {
    const { data } = await api.delete(`/uploads/${file}`, );
    return data;
  } catch (error) {
    return { err: error.message || defError };
  }
}
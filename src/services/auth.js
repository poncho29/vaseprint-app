import api from "../api/axios.config";

export const createUser = async(user) => {
  const defError = 'Error creating user';

  try {
    const { data } = await api.post("/users", user);
    return data;
  } catch (error) {
    const { response } = error;
    return response.data || defError;
  }
}

export const login = async(user) => {
  const defError = 'Surgio un error al iniciar sesión';

  try {
    const response = await api.post("/auth/login", user);
    return response;
  } catch (error) {
    const { response } = error;
    return response || defError
  }
}
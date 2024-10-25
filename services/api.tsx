import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getWorks = async () => {
  try {
    const response = await api.get('/works');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar obras:", error);
    throw error;
  }
};

export const getEmployees = async () => {
    try {
      const response = await api.get('/employess');
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar colaboradores:", error);
      throw error;
    }
  };

export const createWork = async (work) => {
  try {
    const response = await api.post('/works', work);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar obras:", error);
    throw error;
  }
};

export default api;
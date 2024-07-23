import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/compromissos';

export const listarTodos = () => {
  return axios.get(apiUrl);
};

export const buscarPorId = (id) => {
  return axios.get(`${apiUrl}/${id}`);
};

export const salvar = (compromisso) => {
  return axios.post(apiUrl, compromisso);
};

export const deletarPorId = (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};

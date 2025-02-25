import axios from 'axios';
import config from '../config';

// Supondo que você tenha o token armazenado em algum lugar, por exemplo, no localStorage
const token = localStorage.getItem('token');

// Configurar o cabeçalho Authorization com o Bearer Token
const api = axios.create({
  baseURL: config.apiUrl, // Substitua pela URL da sua API
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export default api;
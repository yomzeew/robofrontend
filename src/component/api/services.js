import axios from 'axios';
const api = axios.create({
  baseURL: 'http://172.20.10.3:3004', // Replace with your API base URL
});

export default api;
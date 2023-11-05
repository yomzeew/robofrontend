import axios from 'axios';
const api = axios.create({
  baseURL: 'http://13.48.138.21:3004', // Replace with your API base URL
});

export default api;
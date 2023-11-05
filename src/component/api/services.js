import axios from 'axios';
const api = axios.create({
  baseURL: 'https://roboadvisor-70d5c6f14585.herokuapp.com', // Replace with your API base URL
});

export default api;
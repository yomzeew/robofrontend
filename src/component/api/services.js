import axios from 'axios';
const api = axios.create({
  baseURL: 'http://ec2-13-48-138-21.eu-north-1.compute.amazonaws.com:3004', // Replace with your API base URL
});

export default api;

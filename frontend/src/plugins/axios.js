import axios from 'axios';

const axiBeast = axios.create({
  baseURL: 'http://localhost:18000/api/',
});

export default axiBeast;

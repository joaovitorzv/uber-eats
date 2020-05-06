import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.152:3333/customer'
});

export default api;
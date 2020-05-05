import { create } from 'apisauce';

const api = create({
  baseURL: 'https://localhost:3333/customer',
});

export default api;

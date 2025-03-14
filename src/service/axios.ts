import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://oil-api-production.up.railway.app/api/oils',
  headers: {
    'Content-Type': 'application/json',
  },
});

import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://reg-oil-api.onrender.com/api/oils/',
  headers: {
    'Content-Type': 'application/json',
  },
});

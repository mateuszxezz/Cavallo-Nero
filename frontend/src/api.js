// frontend/src/api.js

import axios from 'axios';

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/printfulRoute`,
});

export const fetchSyncedProducts = () => API.get('/synced');

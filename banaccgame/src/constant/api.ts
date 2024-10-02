import axios from "axios";
export const apiClient = axios.create({ 
    baseURL: 'http://localhost:39743',
    timeout: 1000 * 60 * 30 * 3, // 90 minutes
  });

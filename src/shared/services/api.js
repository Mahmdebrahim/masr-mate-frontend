import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.masr-mate.local",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  try {
    const saved = localStorage.getItem("masr-mate-auth");
    if (saved) {
      const auth = JSON.parse(saved);
      if (auth?.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }
    }
  } catch (error) {
    // ignore parse issues, continue without token
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error?.response?.data || error);
  },
);

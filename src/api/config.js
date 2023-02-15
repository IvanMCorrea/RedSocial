import axios from "axios";

const backendApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

backendApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return config;
});

export default backendApi;

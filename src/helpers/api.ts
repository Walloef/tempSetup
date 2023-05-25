import axios from "axios";

export const axiosCreater = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
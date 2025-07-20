import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://gundamapp-production.up.railway.app/api";

const api = axios.create({
  baseURL: API_URL,
});

export default api;

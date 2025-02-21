import axios from "axios";

const baseURL =
  typeof window === "undefined"
    ? "http://152.70.250.19:3000/api"
    : "/api"; // 클라이언트에서는 Vercel 프록시 활용


const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
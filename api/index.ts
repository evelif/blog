import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://152.70.250.19:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
import { removeTokensStorage } from "@/services/auth/auth.helper";
import { AuthService } from "@/services/auth/auth.services";
import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:5555/api",
});

instance.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("refreshToken");
    if (config.headers && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        await AuthService.getNewTokens();
        return instance(originalRequest);
      } catch (e) {
        removeTokensStorage();
      }
    }

    return Promise.reject(error);
  }
);

export default instance;

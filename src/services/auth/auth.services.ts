import Cookies from "js-cookie";
import { removeTokensStorage, saveToStorage, saveUserDataToStorage } from "./auth.helper";
import instance from "@/api/interceptors";

export const AuthService = {
  async register({email, password, name, surname}: any) {
    const response = await instance.post<any>(
        '/auth/register',
      {
        name: name,
        surname: surname,
        email: email,
        password: password,
      }
    );
    if (response.data.accessToken) {
      saveToStorage(response.data);
      saveUserDataToStorage(response.data)
    }
    return response;
  },

  async login(email: string, password: string) {
    const response = await instance.post<any>(
      "/auth/login",
      {
        email: email,
        password: password,
      }
    );
    
    if (response.data.accessToken) {
      saveToStorage(response.data);
      saveUserDataToStorage(response.data)
    }
    return response;
  },

  logout() {
    removeTokensStorage();
  },

  async changeUserRole(id: string, role: string) {
    const response = await instance.patch<any>(
      `/auth/changeRole/${id}`, 
      { 
        role: role
      }
    );
    if (response.data) {
      // console.log(response.data);
      saveUserDataToStorage(response.data)
    }
    return response;
  },

  async getNewTokens() {
    const refreshToken = Cookies.get("refreshToken");
    const response = await instance.post<any>(
      "/login/access-token",
      {
        refreshToken,
      },
    );
    if (response.data.accessToken) {
      saveToStorage(response.data);
    }
    return response;
  },
};
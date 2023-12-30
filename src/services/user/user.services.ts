import instance from "@/api/interceptors";
import Cookies from "js-cookie";

export const UserService = {
  async getUser(userID: string) {
    const value = JSON.parse(userID);
    const response = await instance.get(`auth/getUser/${value._id}`);

    return response.data;
  },
};

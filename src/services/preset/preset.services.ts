import instance from "@/api/interceptors";
import Cookies from "js-cookie";

export const PresetService = {
  async getCards() {
    const response = await instance.get<any>("/preset/cards");
    return response.data;
  },

  async paymentPreset(Props: any) {
    const rawUserData: any = Cookies.get('user')
    const userID = JSON.parse(rawUserData)

    const response = await instance.patch<any>(`/preset/${userID._id}/paymentPreset`, Props);
    return response;
  },
};

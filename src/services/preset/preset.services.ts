import instance from "@/api/interceptors";

export const PresetService = {
  async getCards() {
    const response = await instance.get<any>('/preset/cards');
    return response.data;
  }
}
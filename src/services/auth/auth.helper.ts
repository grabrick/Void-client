import Cookies from "js-cookie";
// import { IAuthResponse, ITokens } from "../../store/user/user.interface";

type TUserData = {
  user: {
    _id: string;
    email: string;
    name: string;
    role: string;
  },
  refreshToken: string;
};

export const saveTokensStorage = (data: TUserData) => {
  // Cookies.set("accessToken", data.accessToken);
  Cookies.set("refreshToken", data.refreshToken);
};

export const saveToStorage = (data: TUserData) => {
  saveTokensStorage(data);
};

export const saveUserDataToStorage = (data: TUserData) => {
  Cookies.set(
    "user",
    JSON.stringify({
      _id: data.user._id,
      email: data.user.email,
      name: data.user.name,
      role: data.user.role,
    }), {
      expires: 30, 
      // secure: true, 
      sameSite: 'strict'
    }
  );
};

export const removeTokensStorage = () => {
  // Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

import { createSlice } from "@reduxjs/toolkit";
import { IRootOptions } from "@/types/types";
import RainyDayPark from '@/assets/gifs/kerryParkRainy.gif'

type State = {
  rootOptions: IRootOptions;
};

const initialState: State = {
  rootOptions: {
    nameTheme: 'RainyDay',
    // themes: [
    //   {
    //     id: 0,
    //     name: 'Default',
    //     textColor: '#fff',
    //     backColor: '#252525',
    //     buttonColor: '#fff',
    //     buttonTextColor: '#252525',
    //     iconsColor: 'dark',
    //     backImage: null,
    //   },
    //   {
    //     id: 1,
    //     name: 'RainyDay',
    //     textColor: '#fff',
    //     backColor: 'rgba(37, 37, 37, 0.50)',
    //     buttonColor: 'linear-gradient(135deg, #44b8cd 0%, #0e7b91 100%)',
    //     buttonTextColor: '#fff',
    //     iconsColor: 'white',
    //     backImage: RainyDayPark,
    //   },
    //   {
    //     id: 2,
    //     name: 'SunnyHills',
    //     textColor: '#fff',
    //     backColor: 'rgba(37, 37, 37, 0.50)',
    //     buttonColor: 'linear-gradient(135deg, #44b8cd 0%, #0e7b91 100%)',
    //     buttonTextColor: '#fff',
    //     iconsColor: 'white',
    //     backImage: RainyDayPark,
    //   }
    // ]
  }
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setChangeTheme: (state, action) => {
      state.rootOptions.nameTheme = action.payload;
    }
  },
});

export const { setChangeTheme } = optionsSlice.actions;
export default optionsSlice.reducer;
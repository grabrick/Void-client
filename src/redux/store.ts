import { combineReducers, configureStore } from "@reduxjs/toolkit";
import optionsSlice from "./slices/optionsSlice";

const rootReducer = combineReducers({
  optionsSlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
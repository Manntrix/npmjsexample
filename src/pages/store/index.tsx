import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { menuSlice } from "store/slices/menuSlice";
import { modeSlice } from "./slices/mode";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [menuSlice.name]: menuSlice.reducer,
      [modeSlice.name]: modeSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);

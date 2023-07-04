import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../index";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface DarkMode {
  theme: string | null;
}

// Initial state
const initialState: DarkMode = {
  theme:
    typeof window !== "undefined"
      ? window.localStorage.getItem("mode")
      : "light",
};

// Actual Slice
export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    // Action to set the authentication status
    setDarkModeState(state, action) {
      localStorage.setItem("mode", action.payload);
      state.theme = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setDarkModeState } = modeSlice.actions;

export const selectDarkModeState = (state: AppState) => state.mode.theme;

export default modeSlice.reducer;

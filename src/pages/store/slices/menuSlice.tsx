"use client";

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../index";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface Collapsed {
  collapsedState: boolean;
}

// Initial state
const initialState: Collapsed = {
  collapsedState: false,
};

// Actual Slice
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    // Action to set the authentication status
    setCollapsedState(state, action) {
      state.collapsedState = action.payload;
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

export const { setCollapsedState } = menuSlice.actions;

export const selectCollapsedState = (state: AppState) =>
  state.menu.collapsedState;

export default menuSlice.reducer;

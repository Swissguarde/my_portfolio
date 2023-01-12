import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface NavState {
  isOpen: boolean;
}
const initialState: NavState = {
  isOpen: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNav: (state: NavState) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleNav } = navbarSlice.actions;
export const selectNavState = (state: RootState) => state.navbar.isOpen;
export default navbarSlice.reducer;

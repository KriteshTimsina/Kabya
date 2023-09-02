import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ITheme {
  darkMode: boolean;
}

const initialState: ITheme = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const selectTheme = (state: RootState) => state.theme.darkMode;

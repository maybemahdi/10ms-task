import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TLanguageState = {
  language: "en" | "bn";
};

const initialState: TLanguageState = {
  language: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      const { language } = action.payload;
      state.language = language;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;

export const selectCurrentLanguage = (state: RootState) =>
  state.language.language;

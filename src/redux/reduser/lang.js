import { createSlice } from "@reduxjs/toolkit";
export const langSlice = createSlice({
  name: "lang",
  initialState: { value: "uz" },
  reducers: {
    changeLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeLanguage } = langSlice.actions;
export default langSlice.reducer;

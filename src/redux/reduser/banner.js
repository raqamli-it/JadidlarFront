import { createSlice } from "@reduxjs/toolkit";
export const bannerSlice = createSlice({
  name: "banner",
  initialState: { value: null },
  reducers: {
    getBanner: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getBanner } = bannerSlice.actions;
export default bannerSlice.reducer;

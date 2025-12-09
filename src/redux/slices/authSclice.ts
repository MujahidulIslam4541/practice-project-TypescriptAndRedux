import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  token: null | string;
};

const savedToken = localStorage.getItem("authToken");

const initialState: TInitialState = {
  token: savedToken ? savedToken : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUserInfo: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("authToken", action.payload); 
    },
    removeUserInfo: (state) => {
      state.token = null;
      localStorage.removeItem("authToken"); 
    },
  },
});

export const { storeUserInfo, removeUserInfo } = authSlice.actions;
export default authSlice.reducer;

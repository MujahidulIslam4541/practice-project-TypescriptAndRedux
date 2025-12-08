// src/redux/endpoints/authApi.ts
import { api } from "../api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    // 🔹 USER LOGIN
    userLogin: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    // 🔹 USER REGISTRATION
    userRegister: build.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserRegisterMutation,
} = authApi;

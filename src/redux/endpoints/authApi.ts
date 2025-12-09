// src/redux/endpoints/authApi.ts
import { api } from "../api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      }),
    }),
  }),
});

export const { useUserLoginMutation } = authApi;

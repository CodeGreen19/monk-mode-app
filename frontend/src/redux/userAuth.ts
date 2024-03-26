import { LoginInput, SignUpInput, UserModel } from "@/types/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface FetchType {
  message: string;
  user?: UserModel;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
    credentials: "include",
  }),
  tagTypes: ["LoadUser"],
  endpoints: (builder) => ({
    signUp: builder.mutation<FetchType, SignUpInput>({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["LoadUser"],
    }),
    login: builder.mutation<FetchType, LoginInput>({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["LoadUser"],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
      invalidatesTags: ["LoadUser"],
    }),
    me: builder.query<FetchType, void>({
      query: () => "/user/me",
      providesTags: ["LoadUser"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} = authApi;

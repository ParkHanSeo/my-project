import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import { loginCredential } from "./auth";

export const authOptions = {
    providers: [
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.KAKAO_CLIENT_SECRET_KEY!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "email" },
              password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              const res = await loginCredential(credentials?.username ?? "", credentials?.password ?? "");

              if (!res) {
                return null;
              }

              return {
                id: res.id,
                email: res.email,
                nickname: res.nickname,
              }
            }
        }),        
    ],
}

export default NextAuth(authOptions)
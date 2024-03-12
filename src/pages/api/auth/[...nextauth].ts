import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
export const authOptions = {
    providers: [
      KakaoProvider({
        clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID ?? "",
        clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET_KEY ?? ""
      }),
    ],
  }
  export default NextAuth(authOptions)
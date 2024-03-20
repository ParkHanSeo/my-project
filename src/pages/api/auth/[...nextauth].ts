import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import { 
  loginCredential,
  kakaoLoginCredential
} from "./auth";

export const authOptions = {
    providers: [
        KakaoProvider({
              clientId: process.env.KAKAO_CLIENT_ID!,
              clientSecret: process.env.KAKAO_CLIENT_SECRET_KEY!,
              async profile(profile) {
                  const res = await kakaoLoginCredential(profile.id);
                  console.log("데이터 완료");
                  console.log(res);
                  return {
                      id: ""
                  }
              }
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
    callback: {
        async session({ session, token, user }: any) {
            session.user = token.user;
            if (session.user != null && token.hasAcceptedTerms != null) {
                session.user.hasAcceptedTerms = token?.hasAcceptedTerms;
            }
            return Promise.resolve(session);
        },
        async jwt({ token, account, profile }: any) {
            if (account) {
              token.accessToken = account.access_token
              token.id = profile.id
            }
            return Promise.resolve(token);
        },
    }
}

export default NextAuth(authOptions)
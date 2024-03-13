import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import { loginTest } from "./auth";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "email" },
              password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                await loginTest(credentials?.username ?? "", credentials?.password ?? "")
                return null
            }
        }),
        KakaoProvider({
            clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID ?? "",
            clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET_KEY ?? "",
            authorization: {
                params: {
                    scope: "account_email",
                },
            },
            async profile(profile) {
                const findUser = {
                    id: "testId",
                    nickname: "testNickName",
                    state_message: "testtesttest",
                };
                return {
                    id: findUser.id,
                    nickname: findUser.nickname,
                    state_message: findUser.state_message,
                };
            },    
        }),
    ],
    callbacks: {
        async jwt({ token, trigger, session, user, account, profile }: any) {
            if (account) {
                token.accessToken = account.access_token
                token.id = profile.id
              }
              return token;
        },        
        async session({ session, token }: any) {
            session.user = token.user;
            if (session.user != null && token.hasAcceptedTerms != null) {
                session.user.hasAcceptedTerms = token?.hasAcceptedTerms;
            }
            return Promise.resolve(session);
        },
    }
}

export default NextAuth(authOptions)
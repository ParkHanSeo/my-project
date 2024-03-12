import type { AppProps } from "next/app";
import '@/styles/_globals.scss';
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { Layout } from "@/layouts/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import type { AppPropsWithLayout } from '@/pages/types';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const [queryClient] = useState(() => new QueryClient());
    const getLayout = Component.getLayout || "/";

    console.log("Component 체크");
    console.log(pageProps);

    return (
        <RecoilRoot>
            <SessionProvider>
                <QueryClientProvider client={queryClient}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </QueryClientProvider>
            </SessionProvider>
        </RecoilRoot>
    );
}
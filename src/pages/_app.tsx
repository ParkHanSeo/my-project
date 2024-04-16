import type { AppProps } from "next/app";
import '@/styles/_globals.scss';
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { Layout } from "@/components/layouts/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

export default function App({ 
    Component, 
    pageProps: { session, ...pageProps },
}: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <RecoilRoot>
            <SessionProvider session={session}>
                <QueryClientProvider client={queryClient}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </QueryClientProvider>
            </SessionProvider>
        </RecoilRoot>
    );
}
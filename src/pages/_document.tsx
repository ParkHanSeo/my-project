import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <meta name="apple-mobile-web-app-capable" content="yes" />

                <title>PROJECT</title>

                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" sizes="192x192" href="/image/icon-192x192.png" />
                <link rel="apple-touch-icon" sizes="512x512" href="/image/icon-512x512.png" />
                <meta name="theme-color" content="#1689D8" />
            </Head>
            <body>
                <Main/>
                <NextScript />
            </body>
        </Html>
    );
}
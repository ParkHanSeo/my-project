import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" sizes="150x150" href="/image/mstile-150x150.png" />
                <link rel="apple-touch-icon" sizes="310x310" href="/image/mstile-310x310.png" />
                <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'></link>
                <meta name="theme-color" content="#1689D8" />
            </Head>
            <body>
                <Main/>
                <NextScript />
            </body>
        </Html>
    );
}
import { Fragment } from "react";
import Head from "next/head";

import "../public/css/default.css";
import "../public/css/layout.css";
import "../public/css/media-queries.css";
import "../styles/App.css";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="theme-color" content="#000000" />
                <link rel="manifest" href="/manifest.json" />
                <title>Juan Navas</title>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <meta
                    name="description"
                    content="I'm Full Stack Web Developer, I works with React.js, Node.js, Laravel, MySQL, MongoDB, Docker, Git, ... "
                />
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}

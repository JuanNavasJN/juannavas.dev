import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="theme-color" content="#121212" />
                    <meta
                        name="description"
                        content="Juan Navas - I'm a Full Stack Developer, I work with React.js, Node.js, Flutter, MongoDB, Docker, Git, AWS ... "
                    />
                    <meta
                        name="og:title"
                        property="og:title"
                        content="Juan Navas - Full Stack Developer"
                    ></meta>
                    <meta
                        name="twitter:card"
                        content="Juan Navas - Full Stack Developer"
                    ></meta>
                    <link rel="icon" href="/favicon.ico"></link>
                    <link rel="canonical" href="https://juannavas.dev"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

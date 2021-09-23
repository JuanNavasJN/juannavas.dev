import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Head>
                <title>Juan Navas</title>
                <meta name="theme-color" content="#121212" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
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
                <link rel="canonical" href="https://juannavas.dev"></link>
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
};

export default Layout;

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

                {/* <!-- Matomo --> */}

                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
             var _paq = window._paq = window._paq || [];
             /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
             _paq.push(['trackPageView']);
             _paq.push(['enableLinkTracking']);
             (function() {
                 var u="//matomo.juannavas.dev/";
                 _paq.push(['setTrackerUrl', u+'matomo.php']);
                 _paq.push(['setSiteId', '1']);
                 var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                 g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
             })();            
            `,
                    }}
                />
                {/* <!-- End Matomo Code --> */}
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}

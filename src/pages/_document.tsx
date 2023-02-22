import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#202429" />
        <meta
          name="og:title"
          property="og:title"
          content="Juan Navas - Fullstack Web Developer"
        ></meta>
        <meta
          name="twitter:card"
          content="Juan Navas - Fullstack Web Developer"
        ></meta>
        <meta
          name="description"
          content="Juan Navas - Fullstack Web Developer. I've worked with React.js, Node.js, MongoDB, Docker, Git, AWS, PHP, Laravel..."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://juannavas.dev"></link>
        {/* <script
          data-host="https://microanalytics.io"
          data-dnt="false"
          src="https://microanalytics.io/js/script.js"
          id="ZwSg9rf6GA"
          async
          defer
        ></script>
        <script
          async
          defer
          data-website-id="54890e73-54f0-48b9-9ff1-9d8b77c2de99"
          src="https://umami.veest.net/umami.js"
        ></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

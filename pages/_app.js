import Head from 'next/head';
import Layout from '../components/_App/Layout';

import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/boxicons.min.css';
import '../public/css/flaticon.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
import '../public/css/custom.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>Juan Navas</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          data-host="https://microanalytics.io"
          data-dnt="false"
          src="https://microanalytics.io/js/script.js"
          id="ZwSg9rf6GA"
          async
          defer
        ></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

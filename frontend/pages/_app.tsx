import { wrapper } from "../redux/store";
import { GlobalStyle } from "../theme";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(MyApp);

import * as React from "react";
import Head from "next/head";
import { NativeBaseProvider } from "native-base";
import { theme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Toko Abah</title>
        <meta
          name="description"
          content="Belanja Murah Dan Mudah Dengan Toko Abah."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NativeBaseProvider theme={theme}>
        <Component {...pageProps} />
      </NativeBaseProvider>
    </>
  );
}

export default MyApp;

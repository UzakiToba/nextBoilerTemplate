import React from 'react';
import { AppProps, AppContext, AppInitialProps } from 'next/app';
import Head from 'next/head';

import * as style from '@/styles';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>hogehogeTest</title>
      </Head>
      <style.normalize />
      <style.base />
      <Component {...pageProps} />
    </>
  );
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;

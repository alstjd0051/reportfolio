import "../styles/globals.css";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRef, useState } from "react";
import { defaultComponents } from "@portabletext/react";
import { NextComponentType } from "next";
import Script from "next/script";
import Head from "next/head";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[#242424] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6667ab] relative">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8322923444929146"
        crossOrigin="anonymous"
      />
      <Head>
        <meta
          name="google-site-verification"
          content="i1u4yIbhC41SOpFzuW4UTjueqO6j69ZxyTTNMZs-x-g"
        />
      </Head>
      <QueryClientProvider client={queryClientRef.current}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  );
};

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;

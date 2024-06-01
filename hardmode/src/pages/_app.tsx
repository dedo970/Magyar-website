import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import {
  ChakraBaseProvider,
} from '@chakra-ui/react'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (  
    <SessionProvider session={session}>
            <Head>
        <title>Magyar</title>
        <meta name="description" content="Whitelisted minecraft server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      
    </SessionProvider>
    
  );
};

export default api.withTRPC(MyApp);

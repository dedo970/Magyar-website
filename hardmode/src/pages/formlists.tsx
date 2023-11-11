import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";
import * as skinview3d from "skinview3d";
import { api } from "~/utils/api";
import { getServerAuthSession } from "~/server/auth";
import { useEffect,useRef, useState } from "react";
import CreateUser from "~/components/createUser";

import {
  ClientRoute,
  ClientRouter,
  ClientRouterProvider,
} from "../utils/client-router";
import Loading from "~/components/test/Loading";
import DashboardScreen from "~/screens/DashboardScreen";
import ProfileViewScreen from "~/screens/ProfileViewScreen";
import ProfileView from "~/components/ProfileView";
import ProfileList from "~/components/ProfileList";
import FormList from "~/components/ProfileList";

const formlists: NextPage = () => {
  const session = useSession();

  return (
    <> 
      <Head>
        <title>Create T3 App</title>
        <meta content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" name="description"  />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {session.data?.user.role === "Admin" && (
        <>
        {/* <ClientRouterProvider>
                  <ClientRouter whileLoading={<Loading />}>
                      <ClientRoute path="/formlists" Component={DashboardScreen} />
                      <ClientRoute path="/view/id" Component={ProfileViewScreen} />
                  </ClientRouter>
              </ClientRouterProvider> */}
              <div className=" flex justify-center h-screen">
              <div className="my-auto text-center flex justify-center">
              <ProfileList/>
              </div>
              </div>
              </>
          )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession({
    req: context.req,
    res: context.res,
  });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default formlists;
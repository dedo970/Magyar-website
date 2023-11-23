import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";
import * as skinview3d from "skinview3d";
import { api } from "~/utils/api";
import { getServerAuthSession } from "~/server/auth";
import { useEffect,useRef, useState } from "react";
import CreateUser from "~/components/createUser";
import MinecraftCrafting from "~/components/minecraftCrafting/index";
import {
  ClientRoute,
  ClientRouter,
  ClientRouterProvider,
} from "../utils/client-router";
import Loading from "~/components/test/Loading";
import DashboardScreen from "~/screens/DashboardScreen";
import ProfileViewScreen from "~/screens/ProfileViewScreen";
import ProfileList from "~/components/ProfileList";

const Dashboard: NextPage = () => {
  const session = useSession();
  const [loading, setLoading] = useState<boolean>();
  const secret = api.protected.getSecretMessage.useQuery();

  const [rerender, setRerender] = useState(false);
  const ref = useRef(null);
  function MyComponent() {
  useEffect(() => {
  const element = ref.current

  const viewer = new skinview3d.SkinViewer({
    canvas: element,
    width: 300,
    height: 400,
    skin: `https://crafatar.com/skins/${session.data?.user.uiid}`,
    animation: new skinview3d.IdleAnimation(),
    fovAnimation: 70,
    setSize: 300,
    enableRotate: true,
    enableZoom: false,
    enablePan: false,
    
    
  }); 
  viewer.controls.enableRotate = true;
  viewer.controls.enableZoom = false;
  viewer.controls.enablePan = false;

  console.log('mounted')

}, []);
return (
  <div className="touch-none resize-none">
  <canvas className="touch-none resize-none cursor-grab" ref={ref}></canvas>
  </div>
)
  }
  return (
    <> 
      <Head>
        <title>Magyar</title>
        <meta content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no Access-Control-Allow-Origin" name="description"  />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="mt-40 radius grid grid-cols-2 gap-4 items-center p-4">
        {/* <canvas ref={ref}></canvas> */}
        <MyComponent/>
        <div className="border p-4">
          <h1 className="text-lg">Dashboard - Protected</h1>
          <p>{JSON.stringify(session)}</p>
          <p>{session.data?.user?.email}</p>
                    <p>{session.data?.user?.email}</p>
          <p>{secret.data ? secret.data : "Loading tRPC query..."}</p>
          {session.data?.user.role === "Admin" && (
          <p>
            <CreateUser/>
            <div className=" text-center flex justify-center">
              {/* <ProfileList/> */}
              </div>
            </p>
          )}
                    {session.data?.user.role === "User" && (
          <p>
            Uvedom sa lmao
            </p>
          )}
          <div className="flex items-center space-x-3">
              <div className="account">
                <img src={`https://cravatar.eu/avatar/${session.data?.user?.email}/64.png`} />
</div>
            </div>
          </div>
        </div>
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

export default Dashboard;
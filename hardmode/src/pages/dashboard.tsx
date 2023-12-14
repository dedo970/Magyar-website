import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import {  useSession } from "next-auth/react";
// import * as skinview3d from "skinview3d";
import { api } from "~/utils/api";
import { getServerAuthSession } from "~/server/auth";
// import { useRef, useState } from "react";
import CreateUser from "~/components/createUser";
import Header from "~/components/header";
import Footer from "~/components/footer";
import Image from "next/image";

const Dashboard: NextPage = () => {
  const session = useSession();
  const secret = api.protected.getSecretMessage.useQuery();

  // const [rerender, setRerender] = useState(false);
  // const ref = useRef(null)
//   function MyComponent() {
//   useEffect(() => {
//   const element = ref.current

//   const viewer = new skinview3d.SkinViewer({
//     canvas: document.getElementById("skin_container"),
//     width: 300,
//     height: 400,
//     skin: `https://mineskin.eu/skin/${session.data?.user?.uiid}`,
//     animation: new skinview3d.IdleAnimation(),
//     fovAnimation: 70,
//     setSize: 300,
//     enableRotate: true,
//     enableZoom: false,
//     enablePan: false,
    
    
//   }); 
//   viewer.controls.enableRotate = true;
//   viewer.controls.enableZoom = false;
//   viewer.controls.enablePan = false;

//   console.log('mounted')

// }, []);
// return (
//   <div className="touch-none resize-none">
//   {/* <canvas className="touch-none resize-none cursor-grab" ref={ref}></canvas> */}
//   <canvas className="touch-none resize-none cursor-grab" id="skin_container"></canvas>
//   </div>
// )
//   }
  return (
    <> 
      <Head>
        <title>Magyar</title>
        <meta content="Whitelisted minecraft server" name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <div className="mt-40 radius grid grid-cols-1 h-96 gap-4 items-center mb-60">
        {/* <canvas ref={ref}></canvas> */}
        {/* <MyComponent/> */}
        <div className="flex justify-center text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold">
          Coming Soon
                    {session.data?.user.role === "User" && (
          <p>
            Uvedom sa lmao
            </p>
          )}
          <div className="flex items-center space-x-3">
              <div className="account">
</div>
            </div>
          </div>
        </div>
        <Footer/>
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
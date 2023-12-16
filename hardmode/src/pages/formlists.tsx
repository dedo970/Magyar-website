import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "~/server/auth";
import ProfileList from "~/components/ProfileList";
import Header from "~/components/header";
import Footer from "~/components/footer";

const Formlists: NextPage = () => {
  const session = useSession();

  return (
    <> 
      <Head>
        <title>Create T3 App</title>
        <meta content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" name="description"  />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {session?.data?.user?.role === "Admin" && (
        <>
<Header/>
              <div className=" flex justify-center h-auto py-10 mt-5 ">
              <div className="my-auto text-center flex justify-center  ">
              <ProfileList/>
              </div>
              </div>
              <Footer/>
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

export default Formlists;
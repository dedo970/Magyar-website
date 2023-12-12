import Head from "next/head";
import React from "react";
import LoginForm from "~/components/LoginForm";
import type { GetServerSideProps } from "next";

import { getServerAuthSession } from "~/server/auth";


const Auth: React.FC = () => {
  return (
    <>
      <Head>
        <title>Magyar</title>
        <meta name="description" content="Whitelisted minecraft server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col items-center justify-center">
        {/* <Up delay={0.2}>
        <form className="max-width: 350px; margin: auto;" onSubmit={(e) => signIn(e)}>
        <h2 className="mb-2 text-gradient">Přihlášení</h2>
        <p className="mt-2 text-blob">Přihlas se ke svému Enchant účtu.</p>
        <div className="inp fwidth">
            <input  className="Nick" placeholder=" " type="text" onChange={(e) => setUserName(e.target.value)}/>
                <label>Herní nick</label></div>
                <div className="inp fwidth">
                    <input className="Password" placeholder=" " type="password"
                     onChange={(e) => setPassword(e.target.value)}/>
                    <label>Heslo</label></div>
                    <input className="btn" type="submit" value="Přihlásit se"/>

                    </form>
        </Up> */}
        <LoginForm/>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession({
    req: context.req,
    res: context.res,
  });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
export default Auth;
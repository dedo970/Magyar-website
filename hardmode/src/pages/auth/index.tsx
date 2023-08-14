import { useState } from "react";
import Head from "next/head";
import { signIn, signOut } from "next-auth/react";

import { Button } from "~/ui";
import { Github } from "~/ui/icons";
import { toast } from "sonner";
import Up from "~/animations/up";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Link from 'next/link';
import { FormEvent } from 'react';
import { api } from "../../utils/api";
import LoginForm from "~/components/LoginForm";
import type { GetServerSideProps, NextPage } from "next";

import { getServerAuthSession } from "~/server/auth";

type TForm = {
  username: string;
  password: string;
};

const Auth: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setPassword] = useState<string>("");
  const hello2 = api.example.hello2.useMutation();
  const signIn = async (e: React.FormEvent) => {
    
    e.preventDefault();
    console.log(e);
    if (!userName || !userPassword) return;
    const result = await hello2.mutateAsync({
      username: userName,
      password: userPassword,
    });
    console.log(result);
  };

  return (
    <>
      <Head>
        <title>Auth - Project Hackathon</title>
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
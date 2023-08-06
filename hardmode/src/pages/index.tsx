import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { api } from "~/utils/api";
import Up from "~/animations/up";
export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  function Event(props) {
    const isEvent = props.isEvent;
    if (isEvent === false) {
      return <div className="inner home-grid ">
        <div>
        <Up>
          <h1 className="text-8xl font-extrabold fontTitle">Enchant</h1>
          </Up>
          <a href="/prihlaska" className="">
          <Up>
            <button className="prihlaska-btn">Přihláška</button>
            </Up>
            </a>
            </div>
            <Up>
            <img src="/Hardmode-logo.png"/>
            </Up>
    </div>
    }
    return <div className="inner ">
      <Up>
        <img src="/Hardmode-logo.png" className=""/>
        </Up>
        <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-10">text</h1>
</div>;
  }
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="head">
        <div className="top-bg">
          </div>
          
    {/* // ak je event tak daj true */}

        <Event isEvent={false} />
        </div>
        <div className="page">
          <div className="inner text-center">
      <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
            </div>
<div className="dark-zone">
            <div className="inner text-center">
      <h1>hello</h1>
      </div>

    </div>
    <div className="inner text-center">
        <h1>Heloodsdasdoasoo</h1>

      </div>
    </div>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Up from "~/animations/up";
import Header from "~/components/header";
import Footer from "~/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
// const url = "https://api.7games.ga/v1/players/?ip=ms9.hicoria.cloud:43045";
// const [APIdata, setData] = useState([]);

// useEffect(() => {
//    axios.get(url)
//    .then((response) => {
//      setData(response.data);
// })
// }, [])
// console.log(APIdata)
// let data = Array.from(APIdata)



  function Event(props: { isEvent: boolean; }) {
    const isEvent = props.isEvent;
    if (isEvent === false) {
      return <div className="inner home-grid ">
            <img alt="no photo" className="logo" src="/Hardmode-logo.png" width={44} height={44} />
        <div>
          <h1 className="text-7xl font-extrabold title">Magyar</h1>
          <p className="title font-bold my-5 text-2xl">whitelisted Vanilla Server</p>
          <Link href="/form" className="">
            <button className=" prihlaska-kkt">Přihláška</button>
            </Link>
            </div>
    </div>
    }
    return <div className="inner ">
      <Up>
        <Image alt="no photo" src="/Hardmode-logo.png" className="" width={44} height={44}  />
        </Up>
        <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-10">text</h1>
</div>;
  }
  return (
    <>
      <Head>
        <title>Magyar</title>
        <meta name="description" content="Whitelisted minecraft server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="head">
        <div className="top-bg">
          </div>
          
    {/* // ak je event tak daj true */}

        <Event isEvent={false} />
        </div>
        <div className="page">
          <div className="inner text-center">
         <h2 className="text-5xl my-4 font-bold">Trošku nostalgie</h2>
<p className="text-blob invite">Pokiaľ patríš medzi Minecraftové legendy určite si spomínaš, aké to bolo... žiadne residencie, žiadne pluginy.</p>

<p className="text-blob invite">Tieto serveri stáli celé predovšetkým na komunite hráčov, na ich spoločných projektoch.</p>

<p className="text-blob invite">Tak staň sa minecraftu kráľ a buď maďarom. ❤️</p>
            </div>
<div className="dark-zone">
            <div className="inner text-center">
            <h2 className="text-5xl my-4 font-bold">V čom sme iní?</h2>
            <div className="ul-centered">
            <ul className="mx-2 " style={{ listStyleType: 'disc' }}>
<p className="">Tu sú hlavné veci, v čom sa odlišujeme.</p>

<li>Nemáme žiadne miesta, kde by sa &quot;nedalo ničiť&quot;.</li>
<li>Sme komunita autistov, čo nemajú problém sa zabaviť.</li>
<li>Na spawne je možné si postaviť obchod alebo varňu.</li>
<li>Sme whitelisted - na server sa dostanú len tí, ktorí prejdú náborom.</li>
</ul>
</div>
            {/* {
    data.map((dataObj, index) => {
        return(

              <p key={index}style={{ fontSize: 20, color: 'white' }}>{dataObj.players }</p>
            )
  })
} */}
      </div>
      {/* <span data-playercounter-ip="85.13.106.109:43045">0</span> */}
    </div>
    <div className="inner text-center py-12">
      <h1 className="text-5xl font-bold title my-9">Pridaj sa k nám</h1>
    <div className="invite text-blob">Budeme radi, ked sa pridáš k našej komunite a zapojíš sa do tvorenia nášho serveru.</div>
   <div className="ul-centered">
   <ul className="mx-2 " style={{ listStyleType: 'disc' }}>
      <li className="">Adresa serveru: 
      <b className="text-white font-semibold"> ms9.hicoria.cloud:43045</b>
      </li>

      <li className="">Discord serveru:&nbsp;         
      <a className="hover:underline text-white font-semibold " href="https://discord.gg/dTa4A7rFGY">discord.magyar.sk</a>
      </li>

    </ul>
    </div>
    </div>
      <div className="text-center">

    </div>
    </div>
    <Footer />
    {/* <script src="https://cdn.jsdelivr.net/gh/leonardosnt/mc-player-counter/dist/mc-player-counter.min.js"></script> */}
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();


  return (
    <div className="flex flex-col items-center justify-center gap-4">
<h1>hello</h1>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

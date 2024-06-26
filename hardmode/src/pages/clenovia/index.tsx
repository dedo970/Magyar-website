import Head from "next/head";
import { useState, useEffect } from "react";
import Loading from "~/components/test/Loading";
import Header from "~/components/header";
import Footer from "~/components/footer";
import Image from "next/image";

// import data from './clenovia.json';

export default function Clenovia() {

  interface Clenovia {
    nick: string,
    date: string,
    uiid: string,
   }

    const [data,setData]=useState([]);
    const [loading, setLoading] = useState(false);
    const getData=()=>{
      fetch('clenovia.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )

        .then(function(response){
            setLoading(true);
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
      setLoading(false);
    },[])
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

    <div className="inner text-center">
          <h1 className="text-5xl font-extrabold">Členovia</h1>
          <p className="my-4 text-xl font-bold desc">Zoznam všetkých členov serveru</p>
            </div>
        </div>
        {loading ? 
        <div className="page inner member-grid max-w-[1200px] m-auto py-10 px-6">

            {data.map((item: Clenovia) => 
            <div key={item.nick} className=" clenoviabg">
            {/* <img src={`https://cravatar.eu/avatar/${Chleba_}/64.png`} /> */}
            {/* <img className="rounded-md shadow" loading="lazy" src="https://cravatar.eu/avatar/Chleba_/64.png" /> */}
            <Image alt="" className="rounded-md shadow" loading="lazy" width={66} height={66} src={`https://minotar.net/helm/${item?.uiid}/64.png`} />
            
            <div className="text-right">
            <h1 className="text-2xl font-bold w-auto">{item?.nick}</h1>
            <h1 className="md:text-xl sm:text-md clenoviadisc">{item?.date}</h1>
            </div>
            </div>
            )}
    </div>
                :
                <Loading/>}
                    <Footer />
    </>
  );
}



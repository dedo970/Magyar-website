import Head from "next/head";
import Header from "~/components/header";
import Footer from "~/components/footer";

// import data from './clenovia.json';

export default function pravidla() {
  return (
    <>
      <Head>
        <title>Magyar</title>
        <meta name="description" content="Whitelisted minecraft server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="head w-full">
        <div className="top-bg">
          
          </div>
          <div className="inner text-center">
          <h1 className="text-5xl font-extrabold">Pravidlá</h1>
          <p className="my-4 text-xl font-bold desc">Základné pravidlá serveru, ktorými sa riadia hráči</p>
            </div>
          


    </div>
      <div className="page rules">
        <div className="inner" style={{maxWidth:"900px"}}>
          
        <strong>Hranie na serveri</strong>
        <ul className="pl-12" style={{ listStyleType: 'disc' }}>
          <li>Na celom serveri je zakázané použivanie  
          <b> cheatov</b>, <b>hackov</b>.
          </li>
          </ul>

          <strong>Spawn</strong>
          <ul className="pl-12" style={{ listStyleType: 'disc' }}>
            <li>Na nástenku na Spawne je môžeš písať čo chceš.</li>
          <li>Vyhradzujeme si právo odstrániť stavbu zo Spawnu po upozornení, pokiaľ</li>
          <ul className="pl-12" style={{ listStyleType: 'circle' }}>
            <li>je jej majiteľ neaktívny alebo retardovaný</li>
          <li>v prípade prázdneho obchodu bude stavba odstránená</li>
          </ul>
          </ul> 
            <strong>Ostatní hráči</strong>
            <ul className="pl-12" style={{ listStyleType: 'disc' }}>
              <li>Griefing a krádeže v cudzích stavbách v ich okolí (100 blockov) sú zakázané.</li>
            <li><strong>Zabíjanie ostatných hráčov je bez ich súhlasu &quot;zakazáné&quot;.</strong></li>
            <li><strong>Je &quot;zakazané&quot; nadávať ostatným hráčom alebo ich urážať.</strong></li>
            </ul>
            
            <strong>Discord</strong>
            <ul className="pl-12" style={{ listStyleType: 'disc' }}>
              <li>Každý člen servera musí byť pripojený na našom Discorde.</li>
            <li>Vo vlastnom záujme by mal mať každý člen nastavenú na Discorde prezývku, ktorú používa v hre, aby ho bolo možné v prípade potreby kontaktovať.</li>
            </ul>
            
            <strong>Admin Team</strong> (AT)
             <ul className="pl-12" style={{ listStyleType: 'disc' }}>
              <li>Každý hráč je povinný poslúchať povely člena Admin Teamu, čiže mňa.</li>
            <li>V prípade dôležitého upozornenia bude hráč upozornený, ak na to nezabudnem.</li>
            <li>Admin Team(ja) si vyhradzuje všetky práva aj o rozhodovaní o členoch na whiteliste.</li>
            </ul>
            </div>
            </div>
        <Footer />
    </>
  );
}



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
          <p className="my-4 text-xl font-bold desc">Základne pravidlá servera, ktorými se riadia hráči</p>
            </div>
          


    </div>
      <div className="page rules">
        <div className="inner" style={{maxWidth:"900px"}}>
          
        <strong>Hranie na serveru</strong>
        <ul className="pl-12" style={{ listStyleType: 'disc' }}>
          <li>Na celom serveri je zakázané použivanie 
          <b>cheatov</b>, <b>hackov</b>.
          </li>
          </ul>

          <strong>Spawn</strong>
          <ul className="pl-12" style={{ listStyleType: 'disc' }}>
            <li>Na nástenku na Spawne je možné umiestňovať oznámenie bez povolenia.</li>
          <li>Vyhradzujeme si právo odstrániť stavbu zo Spawnu po upozornení, pokiaľ</li>
          <ul className="pl-12" style={{ listStyleType: 'circle' }}>
            <li>je jej majiteľ neaktivny dlhšie ako 1 rok alebo</li>
          <li>v prípade prázdneho obchodu je jeho majiteľ neaktivny dlhšie než 4 mesiace.</li>
          </ul>
          </ul> 
            <strong>Ostatní hráči</strong>
            <ul className="pl-12" style={{ listStyleType: 'disc' }}>
              <li>Griefing a krádeže v cudzích stavbách a ich okoliu (100 blockov) sú zakázané.</li>
            <li>Zabíjenie ostatných hráčov je bez ich súhlasu &quot;zakázáné&quot;.</li>
            <li>Je &quot;zakázané&quot; nadávať ostatným hráčom alebo ich urážať.</li>
            </ul>
            
            <strong>Discord</strong>
            <ul className="pl-12" style={{ listStyleType: 'disc' }}>
              <li>Každý člen servera musí byť pripojený na našom Discord serveri.</li>
            <li>Vo vlastnom záujme by mal mať každý člen nastavenú na Discorde prezývku, ktorú používa v hre, aby ho bolo možné v prípade potreby kontaktovať.</li>
            </ul>
            
            <strong>Admin Team</strong> (AT)
             <ul className="pl-12" style={{ listStyleType: 'disc' }}>
              <li>Každý hráč je povinný poslúchať povely člena Admin Teamu, čiže mňa.</li>
            <li>V prípade dôležitého upozornenia bude hráč upozornený ak na to nezabudnem.</li>
            <li>Vedenie servera si vyhradzuje všetky práva aj o rozhodovaní o členoch na whiteliste.</li>
            </ul>
            </div>
            </div>
        <Footer />
    </>
  );
}



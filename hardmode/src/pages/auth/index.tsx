import { useState } from "react";
import Head from "next/head";
import { signIn, signOut } from "next-auth/react";

import { Button } from "~/ui";
import { Github } from "~/ui/icons";
import { toast } from "sonner";
import Up from "~/animations/up";
import { useSession } from "next-auth/react";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const userSession = useSession();
  console.log("session: ...", userSession ); 

  const { data: sessionData } = useSession();
  const handleLogin = async (provider: string) => {
    setLoading(true);
    try {
      await signIn(provider, {
        callbackUrl: `/`,
      });
    } catch (error) {
      toast.error("Unable to log in. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Auth - Project Hackathon</title>
      </Head>
      <div className="flex h-screen flex-col items-center justify-center">
        <Up>
          <h1 className="mb-4 text-2xl font-medium">
            {loading ? "Logging in..." : ""}
          </h1>
        </Up>
        <Up delay={0.2}>
        <form className="max-width: 350px; margin: auto;">
        <h2 className="mb-2 text-gradient">Přihlášení</h2>
        <p className="mt-2 text-blob">Přihlas se ke svému Enchant účtu.</p>
        <div className="inp fwidth">
            <input className="Nick" placeholder=" " type="text"/>
                <label>Herní nick</label></div>
                <div className="inp fwidth">
                    <input className="Password" placeholder=" " type="password"/>
                    <label>Heslo</label></div>
                    <input className="btn" type="submit" value="Přihlásit se" onClick={AuthShowcase}/>

                    </form>
        </Up>
        <AuthShowcase/>
      </div>
    </>
  );
};
const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  const userSession = useSession();
  console.log("session: ...", userSession); 
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
export default Auth;
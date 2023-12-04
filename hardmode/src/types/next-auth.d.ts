import { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface Session {
    user: {
      id: string;
      uiid: string;
      role: "User" | "Admin";
      email: string;
      name:string;

    } & DefaultSession["user"];
  }

  interface User {
    role: string;
  }
  
}

declare module "next-auth/jwt" {
  interface JWT  {
    role: string;
  }
}


export { DefaultSession };

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";
import { loginSchema } from "~/validation/auth";

/**
 * change the session type like this
 * this same in the prisma schema the role
 * you can change the role to whatever you want
 *  */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      uiid: string;
      role: "User" | "Admin";
      email: string;
      name:string;

    } & DefaultSession["user"];
  }

  interface User {
    // ...other properties
    role: "User" | "Admin";
  }
}

export const authOptions: NextAuthOptions = {
  /**
   * change the callback like this
   * and dont worry about the ts-ignore because it still works and i have no idea why this erros
   *  but i haved to npm run build to see the errors and i have no errors and it works
   *
   * DONT WORRY ABOUT THE TS-IGNORE
   */

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      session.user = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: token.id,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        role: token.role,
      };
      return Promise.resolve(session);
    },
  },
  
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      // ignore error eslint
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      authorize: async (credentials) => {
        const cred = await loginSchema.parseAsync(credentials);
        const user = await prisma.user.findFirst({
          where: { email: cred.email },
        });
        if (!user) {
          return null;
        }
        const isValidPassword = (
          cred.password,
          user.password
        );
        if (!isValidPassword) {
          return null;
        }
        return {
          id: user.id,
          email: user.email,
          username: user.username,
          uiid: user.uiid,
          role: user.role,
        };
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    newUser: "/register",
    error: "/login",
  }

};

export default NextAuth(authOptions);
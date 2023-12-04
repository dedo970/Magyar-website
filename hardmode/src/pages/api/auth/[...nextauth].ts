import NextAuth, { type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { env } from "~/env.mjs";
import { prisma } from "~/server/db";
import { loginSchema } from "~/validation/auth";
import {type DefaultSession} from "next-auth"
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
      uiid: string;
      role: "User" | "Admin";
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    // ...other properties
    role: "User" | "Admin";
  }
}


export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.uiid = user.uiid;
        token.role = user.role;
        
      }

      return Promise.resolve(token);;
    },
   session: async ({ session, token }) => {
    session.user = {
        id: token.id as string,
        uiid: token.uiid,
        role: token.role,
      }

      return Promise.resolve(session);
    },







  },
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
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
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
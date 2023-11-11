import NextAuth, { type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { env } from "~/env.mjs";
import { prisma } from "~/server/db";
import { loginSchema } from "~/validation/auth";

export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.uiid = user.uiid;
        token.role = user.role;
        
      }

      return token;
    },
   async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.uiid = token.uiid;
        session.user.role = token.role;
      }

      return session;
    },
  },
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    newUser: "/register",
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
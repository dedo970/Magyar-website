import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthUser, jwtHelper, tokenOneDay, tokenOnWeek } from "~/utils/jwtHelper";
import bcrypt from 'bcrypt';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      // ...other properties
      // role: UserRole;
    };
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "next-auth",
      name: "Login with email",
      async authorize(credentials, req) {
        try {
          const user = await prisma.user.findFirst({
            where: {
              name: credentials?.username
            }
          });

          if (user && credentials){
            const validPassword = await bcrypt.compare(credentials?.password, user.password); 

            if (validPassword){
              return {
                id: user.id,
                name: user.name,
              }
            }
          } 
        } catch(error){
          console.log(error)
        }
        return null
      },
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

    })
  ],
  callbacks: {
    async jwt({token, user, profile, account, isNewUser}){

      // credentials provider:  Save the access token and refresh token in the JWT on the initial login
      if (user){
        const authUser = {id: user.id, name: user.name} as AuthUser;

        const accessToken = await jwtHelper.createAcessToken(authUser);
        const refreshToken = await jwtHelper.createRefreshToken(authUser);
        const accessTokenExpired = Date.now() /1000 + tokenOneDay;
        const refreshTokenExpired = Date.now() /1000 + tokenOnWeek;

        return {
          ...token, accessToken, refreshToken, accessTokenExpired, refreshTokenExpired,
          user: authUser
        }

      } else {
        if (token){
          // In subsequent requests, check access token has expired, try to refresh it
          if (Date.now() /1000 > token.accessTokenExpired){
            const verifyToken = await jwtHelper.verifyToken(token.refreshToken);

            if (verifyToken){

              const user = await prisma.user.findFirst({
                where: {
                  name: token.user.name
                }
              });

              if (user){
                const accessToken = await jwtHelper.createAcessToken(token.user);
                const accessTokenExpired = Date.now() /1000 + tokenOneDay;

                return {...token, accessToken, accessTokenExpired}
              } 
            }

            return {...token, error: "RefreshAccessTokenError"}
          }
        }
      }

      return token
    },

    async session({ session, token }){
      if (token){
        session.user = {
          name: token.user.name,
          userId: token.user.id
        }
      }
      session.error = token.error;
      return session;
    }
  }
}

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};

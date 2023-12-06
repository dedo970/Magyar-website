
import {
  getServerSession,
} from "next-auth";
import { type GetServerSidePropsContext } from "next";
import { authOptions } from "~/pages/api/auth/[...nextauth]";


export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return await getServerSession(ctx.req, ctx.res, authOptions);
};
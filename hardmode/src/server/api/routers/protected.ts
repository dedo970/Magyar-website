import { publicProcedure, protectedProcedure } from "../trpc";
import { createTRPCRouter } from "../trpc";

export const protectedRouter = createTRPCRouter({
  // getSession: publicProcedure.query(({ ctx }) => {
  //   return ctx.session;
  // }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
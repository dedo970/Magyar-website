import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

// Schemas:
import {
  newHackathonSchema,
} from "~/schema/hackathon";

export const hackathonRouter = createTRPCRouter({

  // all users hackatons =>
  hackathons: publicProcedure.query(({ ctx }) => {
    const hackathons = ctx.prisma.hackathon.findMany({
    });
      return Promise.all([hackathons]).then((values) => {
      return {
        hackathon: values[0],

      };
    });
  }),
  // Create new hackathon =>
  createHackathon: publicProcedure
    .input(newHackathonSchema)
    .mutation(({ ctx, input }) => {
      const newHackathon = ctx.prisma.hackathon.create({
        data: {
          ...input,
        },
      });
      return newHackathon;
    }),
  //------
  // Delete hackathon =>
  deleteHackathon: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      const deleteHackathon = ctx.prisma.hackathon.delete({
        where: {
          id: input.id,
        },
      });
      return deleteHackathon;
    }),
  //------
  // Single hackathon with participants =>
})
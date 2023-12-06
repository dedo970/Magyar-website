import { createTRPCRouter } from "../trpc";
import { publicProcedure } from "../trpc";
// Schemas:
import {
    newUser,
} from "~/schema/user";

export const UserProfile = createTRPCRouter({

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
  createUser: publicProcedure
    .input(newUser)
    .mutation(({ ctx, input }) => {
      const newUserProfile = ctx.prisma.user.create({
        data: {
          ...input,
          
        },
      });
      return newUserProfile;
    }),
})
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";
import {
  newUserSchema,
} from "~/schema/profile";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const profileRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        dateOfBirth: z.string(),
        gender: z.union([z.number(), z.null()]),
        sports: z.array(z.string()),
        description: z.string(),
        location: z.string(),
        team: z.string(),
      })
    )
    .mutation( ({ctx, input, req}) => {

      const newProfile = ctx.prisma.profile.create(
          req.input
        );
      return { ...newProfile, _id: newProfile._id.toString() };
    }),
});

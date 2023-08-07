import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";

import { hackathonRouter } from "./routers/hackathon.router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  hackathon: hackathonRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

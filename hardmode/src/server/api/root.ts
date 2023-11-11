import { createTRPCRouter } from "~/server/api/trpc";
import { hackathonRouter } from "./routers/hackathon.router";
import { authRouter } from "./routers/auth";
import { protectedRouter } from "./routers/protected";
import { UserProfile} from "./routers/user.router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  hackathon: hackathonRouter,
  protected: protectedRouter,
  auth: authRouter,
  userProfile: UserProfile,
});

// export type definition of API
export type AppRouter = typeof appRouter;

import { collectRouter } from "./routers/collect";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  collect: collectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

import { userRouter } from "./routers/user";
import { createTRPCRouter } from "./init";

export const appRouter = createTRPCRouter({
  user: userRouter,
});

export type AppRouter = typeof appRouter;

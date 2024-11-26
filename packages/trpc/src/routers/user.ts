import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../init";

export const userRouter = createTRPCRouter({
  getUsers: publicProcedure.query(() => {
    return [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ];
  }),

  addUser: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
      })
    )
    .mutation(({ input: { id, name } }) => {
      // Simulate a db query
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      });

      return { id, name };
    }),
});

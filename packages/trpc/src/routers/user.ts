import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../init";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];


export const userRouter = createTRPCRouter({
  
  getUsers: publicProcedure.query(() => {
    return users;
  }),

  addUser: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
      })
    )
    .mutation(({ input: { id, name } }) => {

      console.log({ id, name });

      users.push({ id, name });

      // return { id, name };
    }),
});

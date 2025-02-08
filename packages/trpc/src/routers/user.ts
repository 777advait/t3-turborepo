import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../init";
import { userRepository } from "../repository";

export const userRouter = createTRPCRouter({
  getUsers: publicProcedure.query(async () => {
    return await userRepository.getUsers();
  }),

  addUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
      })
    )
    .mutation(({ input: { name, email } }) => {
      return userRepository.addUser({ name, email });

      // return { id, name };
    }),
});

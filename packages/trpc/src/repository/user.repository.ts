import { db } from "@repo/db";
import { userSchema } from "@repo/db/schema";
import { InserUser, SelectUser } from "@repo/db/types";
import { TRPCError } from "@trpc/server";

class UserRepository {
  async getUsers(): Promise<SelectUser[]> {
    try {
      return await db.query.userSchema.findMany();
    } catch (error) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }

  async addUser(user: InserUser): Promise<SelectUser> {
    try {
      const newUser = await db.insert(userSchema).values(user).returning();

      return newUser[0];
    } catch (error) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }
}

export const userRepository = new UserRepository();

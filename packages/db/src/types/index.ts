import { userSchema } from "../schema";

export type SelectUser = typeof userSchema.$inferSelect;
export type InserUser = typeof userSchema.$inferInsert;

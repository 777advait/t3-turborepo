import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const userSchema = pgTable("user", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  email: text().notNull(),
});

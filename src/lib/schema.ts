import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const notesTable = sqliteTable("notes", {
  id: text("id").notNull().primaryKey(),
  content: text("content").notNull(),
  username: text("username")
    .notNull()
    .references(() => userTable.username),
  commentApproved: integer("comment_approved").default(0),
});

export const userTable = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  github_id: text("github_id").unique().notNull(),
  username: text("username").unique().notNull(),
});

export const sessionTable = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: integer("expires_at").notNull(),
});

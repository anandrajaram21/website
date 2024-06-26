import { defineConfig } from "drizzle-kit";

const { TURSO_AUTH_TOKEN, TURSO_CONNECTION_URL } = process.env;

export default defineConfig({
  schema: "./src/lib/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: TURSO_CONNECTION_URL!,
    authToken: TURSO_AUTH_TOKEN!,
  },
});

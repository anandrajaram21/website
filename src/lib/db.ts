import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { TURSO_CONNECTION_URL, TURSO_AUTH_TOKEN } from "astro:env/server";

import * as schema from "@/lib/schema";

const client = createClient({
  url: TURSO_CONNECTION_URL,
  authToken: TURSO_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });

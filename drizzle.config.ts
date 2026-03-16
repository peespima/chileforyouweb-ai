import { defineConfig } from "drizzle-kit";

// Use SQLite for local development and Railway deployments
// SQLite stores data in a local file (data.db) which persists across restarts
const dbPath = process.env.DATABASE_URL || "./data.db";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: dbPath,
  },
});

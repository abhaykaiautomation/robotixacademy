import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

export const sql = neon(process.env.DATABASE_URL);

export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS enrollments (
      id          SERIAL PRIMARY KEY,
      parent_name TEXT        NOT NULL,
      child_name  TEXT        NOT NULL,
      age         INTEGER     NOT NULL,
      email       TEXT        NOT NULL,
      phone       TEXT        NOT NULL,
      program     TEXT        NOT NULL,
      message     TEXT,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

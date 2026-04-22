import { neon } from "@neondatabase/serverless";
import type { NeonQueryFunction } from "@neondatabase/serverless";

let _sql: NeonQueryFunction<false, false> | null = null;

export function getSql() {
  if (!_sql) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    _sql = neon(process.env.DATABASE_URL);
  }
  return _sql;
}

export async function initDb() {
  const sql = getSql();
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

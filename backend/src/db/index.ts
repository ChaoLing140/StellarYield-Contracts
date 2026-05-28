import pg from "pg";
import { config } from "../config.js";

const { Pool } = pg;

export const pool = new Pool({ connectionString: config.db.url });

export async function query<T = Record<string, unknown>>(
  sql: string,
  params?: unknown[],
): Promise<T[]> {
  const result = await pool.query(sql, params);
  return result.rows;
}

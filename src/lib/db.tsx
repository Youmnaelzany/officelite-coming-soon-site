import { Pool } from "@neondatabase/serverless";
import fs from "fs";
import path from "path";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Check and apply schema if needed
async function initializeDb() {
  try {
    const sql = fs.readFileSync(
      path.join(process.cwd(), "sql/01_create_form_submissions.sql"),
      "utf8"
    );
    await pool.query(sql);
    console.log("Database schema verified");
  } catch (err) {
    console.error("Database initialization failed:", err);
  }
}

// Run initialization (only in development)
if (process.env.NODE_ENV !== "production") {
  initializeDb();
}

export async function getDb() {
  return pool;
}

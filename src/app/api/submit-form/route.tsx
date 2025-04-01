import { NextResponse } from "next/server";

import { getDb } from "@/lib/db";

export async function POST(request: Request) {
  const db = await getDb();
  const data = await request.json();

  try {
    const result = await db.query(
      `INSERT INTO form_submissions (name, email, plan, phone, company)
       VALUES ($1, $2, $3, $4, $5)`,
      [data.name, data.email, data.plan, data.phone, data.company]
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error.code === "23505") {
      // Unique violation
      return NextResponse.json(
        { error: "This email is already registered" },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

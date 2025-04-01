import { NextResponse } from "next/server";

import { db } from "@/app/db";
import { formSubmissions } from "@/app/db/schema";

export async function POST(request: Request) {
  const data = await request.json();

  try {
    await db.insert(formSubmissions).values({
      name: data.name,
      email: data.email,
      plan: data.plan,
      phone: data.phone,
      company: data.company,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Submission failed (possibly duplicate email)" },
      { status: 400 }
    );
  }
}

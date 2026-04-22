import { NextResponse } from "next/server";
import { sql, initDb } from "@/lib/db";

export async function GET() {
  try {
    await initDb();

    const rows = await sql`
      SELECT id, parent_name, child_name, age, email, phone, program, message, created_at
      FROM enrollments
      ORDER BY created_at DESC
    `;

    return NextResponse.json({ enrollments: rows });
  } catch (err) {
    console.error("Admin enrollments API error:", err);
    return NextResponse.json(
      { error: "Failed to fetch enrollments." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { getSql, initDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { parentName, childName, age, email, phone, program, message } = body;

    if (!parentName || !childName || !age || !email || !phone || !program) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    await initDb();

    const result = await getSql()`
      INSERT INTO enrollments (parent_name, child_name, age, email, phone, program, message)
      VALUES (${parentName}, ${childName}, ${Number(age)}, ${email}, ${phone}, ${program}, ${message || null})
      RETURNING id, created_at
    `;

    return NextResponse.json(
      { success: true, id: result[0].id, createdAt: result[0].created_at },
      { status: 201 }
    );
  } catch (err) {
    console.error("Enroll API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

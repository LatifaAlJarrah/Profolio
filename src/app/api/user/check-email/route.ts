// src/app/api/user/check-email/route.ts
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ exists: false }, { status: 400 });
  }

  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    return NextResponse.json({ exists: !!user }, { status: 200 });
  } catch (error) {
    console.error("Error checking email:", error);
    return NextResponse.json({ exists: false }, { status: 500 });
  }
}

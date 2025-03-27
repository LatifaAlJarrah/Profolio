import { NextResponse } from "next/server";
import { signOut } from "@/auth";

export async function GET() {
  await signOut({ redirectTo: "/" });
  return NextResponse.json({ success: true });
}

import { NextResponse } from "next/server";
import { auth } from "@/auth"; // استخدم auth بدل getServerSession
import { db } from "@/lib/db";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  const session = await auth(); // هذا هو البديل الصحيح
  if (!session?.user?.email) {
    return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
  }

  const { password } = await req.json();
  if (!password || password.length < 6) {
    return NextResponse.json({ error: "كلمة مرور قصيرة" }, { status: 400 });
  }

  const hashedPassword = await hash(password, 10);

  await db.user.update({
    where: { email: session.user.email },
    data: { password: hashedPassword },
  });

  return NextResponse.json({ success: true });
}

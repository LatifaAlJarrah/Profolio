import { hash } from "bcrypt";
import { auth } from "@/auth"; // تأكدي من مسار ملف auth
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const session = await auth();
  if (!session || !session.user?.email) {
    return new Response(JSON.stringify({ error: "غير مصرح" }), { status: 401 });
  }

  const { password } = await req.json();
  if (!password || password.length < 6) {
    return new Response(JSON.stringify({ error: "كلمة المرور قصيرة جدًا" }), {
      status: 400,
    });
  }

  const hashed = await hash(password, 10);

  await db.user.update({
    where: { email: session.user.email },
    data: { password: hashed },
  });

  return new Response(JSON.stringify({ success: true }));
}

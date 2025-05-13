// src/app/auth/link/page.tsx
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function LinkAccountPage({
  searchParams,
}: {
  searchParams: { provider?: string; email?: string };
}) {
  const session = await auth();
  if (!session?.user || session.user.email !== searchParams.email) {
    return redirect("/auth/signin");
  }

  const provider = searchParams.provider;
  if (!provider || !["google", "facebook"].includes(provider)) {
    return redirect("/auth/error?error=InvalidProvider");
  }

  await signIn(provider, { redirectTo: "/projects" });
  return <div>Linking account...</div>;
}

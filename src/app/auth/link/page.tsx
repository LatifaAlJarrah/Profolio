import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function LinkAccountPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await auth();
  const email = Array.isArray(searchParams.email)
    ? searchParams.email[0]
    : searchParams.email;
  if (!session?.user || (email && session.user.email !== email)) {
    return redirect("/auth/signin");
  }

  const provider = Array.isArray(searchParams.provider)
    ? searchParams.provider[0]
    : searchParams.provider;
  if (!provider || !["google", "facebook"].includes(provider)) {
    return redirect("/auth/error?error=InvalidProvider");
  }

  await signIn(provider, { redirectTo: "/projects" });
  return <div>Linking account...</div>;
}
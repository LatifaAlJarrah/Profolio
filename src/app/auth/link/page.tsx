import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function LinkAccountPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Promise solution to get searchParams values
  const resolvedSearchParams = await searchParams;

  // Verify that there is a session and that the email matches
  const session = await auth();
  const email = Array.isArray(resolvedSearchParams.email)
    ? resolvedSearchParams.email[0]
    : resolvedSearchParams.email;
  if (!session?.user || (email && session.user.email !== email)) {
    return redirect("/auth/signin");
  }

  // Provider validation
  const provider = Array.isArray(resolvedSearchParams.provider)
    ? resolvedSearchParams.provider[0]
    : resolvedSearchParams.provider;
  if (!provider || !["google", "facebook"].includes(provider)) {
    return redirect("/auth/error?error=InvalidProvider");
  }

  // Link account
  await signIn(provider, { redirectTo: "/projects" });
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      <span className="ml-2">Linking account...</span>
    </div>
  );
}

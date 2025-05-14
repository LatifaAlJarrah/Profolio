// // src/app/auth/conflict/page.tsx
// "use client";

// import { useSearchParams } from "next/navigation";
// import { signIn } from "next-auth/react";
// import { useError } from "@/app/context/ErrorContext";
// import Logo from "@/app/components/logo/Logo";

// export default function ConflictPage() {
//   const searchParams = useSearchParams();
//   const { setErrorMessage } = useError();

//   const email = searchParams.get("email");
//   const provider = searchParams.get("provider");
//   const existingProvider = searchParams.get("existingProvider");

//   if (!email || !provider || !existingProvider) {
//     setErrorMessage("Invalid conflict parameters");
//     return null;
//   }

//   const handleSignIn = async () => {
//     await signIn(existingProvider, {
//       callbackUrl: `/auth/link?provider=${provider}&email=${encodeURIComponent(
//         email
//       )}`,
//     });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <div className="flex flex-col items-center mb-6">
//           <Logo />
//           <h2 className="text-lg font-semibold text-red-600">
//             Account Conflict
//           </h2>
//         </div>
//         <p className="text-gray-700 text-center mb-4">
//           The email <strong>{email}</strong> is already registered with{" "}
//           {existingProvider}. Please sign in with {existingProvider} to link
//           your {provider} account.
//         </p>
//         <button
//           onClick={handleSignIn}
//           className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//         >
//           Sign in with {existingProvider}
//         </button>
//         <button
//           onClick={() => (window.location.href = "/auth/signin")}
//           className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
//         >
//           Back to Sign In
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useError } from "@/app/context/ErrorContext";
import Logo from "@/app/components/logo/Logo";

export default function ConflictPage() {
  const searchParams = useSearchParams();
  const { setErrorMessage } = useError();

  const email = searchParams.get("email");
  const provider = searchParams.get("provider");
  const existingProvider = searchParams.get("existingProvider");

  if (!email || !provider || !existingProvider) {
    setErrorMessage("Invalid conflict parameters");
    return null;
  }

  const handleSignIn = async () => {
    await signIn(existingProvider, {
      callbackUrl: `/auth/link?provider=${provider}&email=${encodeURIComponent(
        email
      )}`,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <Logo />
          <h2 className="text-lg font-semibold text-red-600">
            Account Conflict
          </h2>
        </div>
        <p className="text-gray-700 text-center mb-4">
          The email <strong>{email}</strong> is already registered with{" "}
          {existingProvider}. Please sign in with {existingProvider} to link
          your {provider} account.
        </p>
        <button
          onClick={handleSignIn}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Sign in with {existingProvider}
        </button>
        <button
          onClick={() => (window.location.href = "/auth/signin")}
          className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
        >
          Back to Sign In
        </button>
      </div>
    </div>
  );
}
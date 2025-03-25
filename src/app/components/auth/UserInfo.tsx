// // "use server";
// import React from "react";
// import { auth } from "@/auth";
// import Image from "next/image";

// export default async function UserInfo() {
//   const session = await auth();

//   if (session?.user) {
//     return (
//       <div>
//         <p>user signin with {session.user.name}</p>
//         <p>user signin with {session.user.email}</p>
//         {session.user.image && (
//           <Image
//             src={session.user.image}
//             width={48}
//             height={48}
//             alt={session.user.name ?? "Avatar"}
//           />
//         )}
//       </div>
//     );
//   }
//   //   return <div>UserInfo</div>;
// }
"use client";

import { useSession } from "next-auth/react";
import { login, logout } from "@/lib/actions/auth";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between">
      <h1 className="text-lg font-bold">MyApp</h1>
      {session?.user ? (
        <div className="flex items-center gap-4">
          <Image
            src={session.user.image!}
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span>{session.user.name}</span>
          <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={login} className="bg-blue-500 px-4 py-2 rounded">
          Login
        </button>
      )}
    </nav>
  );
}

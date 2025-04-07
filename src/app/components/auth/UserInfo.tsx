"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          <p>Signed in as {session.user?.name}</p>
          <Image
            src={session.user?.image || "/default-avatar.png"}
            alt="User avatar"
            width={40}
            height={40}
            quality={100}
            className="w-20 h-20 rounded-full"
          />
        </div>
      ) : (
        <p>Not signed in</p>
      )}
    </div>
  );
}

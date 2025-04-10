// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email: string | null;
      image?: string | null;
      username?: string | null;
    };
    accessToken?: string;
  }

  interface User {
    id: string;
    username?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    username?: string;
  }
}

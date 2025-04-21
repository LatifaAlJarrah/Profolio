// // types/next-auth.d.ts

// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       name?: string | null;
//       email?: string | null;
//       image?: string | null;
//       username?: string; // <-- أضيفي هذا السطر
//     };
//     accessToken?: string;
//   }

//   interface User {
//     id: string;
//     username?: string | null;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     accessToken?: string;
//     username?: string;
//   }
// }
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
      username?: string | null | undefined;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    username?: string | null | undefined;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    sub?: string;
    name?: string | null | undefined;
    picture?: string | null | undefined;
    username?: string | null | undefined;
  }
}
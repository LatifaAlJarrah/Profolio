import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import { compare } from "bcrypt";

// import { NextAuthOptions } from "next-auth";
type AuthConfig = Parameters<typeof NextAuth>[0];

export const authOptions: AuthConfig = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: { email: string; password: string }) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await db.user.findUnique({
          where: {
            email: credentials?.email
          },
        });
          
        if (!existingUser) {
          return null;
          }
          
        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
          );
          
        if (!passwordMatch) {
          return null;
        }
        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email,
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);

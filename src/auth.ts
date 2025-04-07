import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";
import { NextAuthConfig } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./lib/db";
import { compare } from "bcrypt";

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          // redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/github`,
          scope: "user:email", // Add additional scopes if needed
        },
      },
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "email,public_profile", // Add additional scopes as needed
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email || !password) {
          throw new Error("AUTH_ERROR:Missing email or password");
        }

        const user = await db.user.findUnique({ where: { email } });
         if (!user) {
           throw new Error("AUTH_ERROR:Email does not exist");
         }

        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error("AUTH_ERROR:Password is incorrect");
        }

        return {
          id: `${user.id}`,
          name: user.username,
          email: user.email,
          username: user.username,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub ?? "";
      session.user.name = token.name;
      session.user.image = token.picture || null;
      // session.user.username = token.username as string;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.name = user.name;
        token.picture = user.image || null;
        // token.username = (user as any).username || ""; // You can include any custom fields
      }
      return token;
    },
  },
};

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);

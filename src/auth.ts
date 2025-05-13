// src/auth.ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";
import { db } from "./lib/db";
import type { NextAuthConfig } from "next-auth";

// Utility function to generate a username
const generateUsername = (name: string | null | undefined, fallback: string): string =>
  name?.replace(/\s+/g, "").toLowerCase() ?? fallback;

// Validate environment variables
const validateEnvVariables = (): void => {
  const requiredEnvVars = [
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
    "FACEBOOK_CLIENT_ID",
    "FACEBOOK_CLIENT_SECRET",
    "NEXTAUTH_SECRET",
  ];
  requiredEnvVars.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  });
};

// Configure Providers
const providers = [
  Google({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        scope: "openid email profile",
      },
    },
    profile: (profile) => ({
      id: profile.sub,
      name: profile.name,
      email: profile.email,
      image: profile.picture,
      username: generateUsername(profile.name, profile.sub),
    }),
  }),
  Facebook({
    clientId: process.env.FACEBOOK_CLIENT_ID!,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    authorization: { params: { scope: "email,public_profile" } },
    profile: (profile) => ({
      id: profile.id,
      name: profile.name,
      email: profile.email,
      image: profile.picture?.data?.url ?? null,
      username: generateUsername(profile.name, profile.id),
    }),
  }),
  Credentials({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      const { email, password } = credentials as { email?: string; password?: string };
      if (!email || !password) {
        throw new Error("Missing email or password");
      }

      const user = await db.user.findUnique({ where: { email } });
      if (!user || !user.password) {
        throw new Error("Invalid email or password");
      }

      const isValid = await compare(password, user.password);
      if (!isValid) {
        throw new Error("Invalid email or password");
      }

      return {
        id: user.id.toString(),
        name: user.username,
        email: user.email,
        username: user.username,
        image: user.image,
      };
    },
  }),
];

// Callbacks
const callbacks: NextAuthConfig["callbacks"] = {
  async signIn({ user, account }) {
    if (!user.email) return false;

    if (account?.provider !== "credentials") {
      const existingUser = await db.user.findUnique({
        where: { email: user.email },
        include: { accounts: true },
      });

      if (existingUser) {
        const isLinked = existingUser.accounts.some((acc) => acc.provider === account?.provider);
        if (!isLinked && existingUser.accounts.length > 0) {
          const existingProvider = existingUser.accounts[0].provider;
          return `/auth/conflict?email=${encodeURIComponent(user.email)}&provider=${account?.provider}&existingProvider=${existingProvider}`;
        }
      }
    }
    return true;
  },
  async jwt({ token, user, account }) {
    if (account) {
      token.accessToken = account.access_token;
    }
    if (user) {
      token.sub = user.id;
      token.name = user.name;
      token.picture = user.image ?? null;
      token.username = user.username;
    }
    return token;
  },
  async session({ session, token }) {
    if (session.user) {
      session.user.id = token.sub!;
      session.user.name = token.name;
      session.user.image = token.picture ?? null;
      session.user.username = token.username as string;
      session.accessToken = token.accessToken as string;
    }
    return session;
  },
};

// Validate environment variables
validateEnvVariables();

// NextAuth configuration
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers,
  callbacks,
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
});
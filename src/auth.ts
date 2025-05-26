// src/auth.ts - Updated NextAuth configuration (استخدام API الموجود)
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import type { NextAuthConfig } from "next-auth";

// Utility function to generate a username
const generateUsername = (
  name: string | null | undefined,
  fallback: string
): string => name?.replace(/\s+/g, "").toLowerCase() ?? fallback;

// Validate environment variables
const validateEnvVariables = (): void => {
  const requiredEnvVars = ["NEXTAUTH_SECRET", "NEXTAUTH_URL"];
  requiredEnvVars.forEach((key) => {
    if (!process.env[key]) {
      console.error(`Missing required environment variable: ${key}`);
      throw new Error(`Missing required environment variable: ${key}`);
    }
  });
};

// Configure Providers
const providers = [
  Google({
    clientId: process.env.GOOGLE_CLIENT_ID || "dummy",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "dummy",
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
    clientId: process.env.FACEBOOK_CLIENT_ID || "dummy",
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "dummy",
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
    name: "credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      try {
        console.log("Credentials authorize called");

        if (!credentials?.email || !credentials?.password) {
          console.log("Missing email or password");
          return null;
        }

        const { email, password } = credentials;

        // استدعاء API endpoint الموجود بالفعل
        console.log("Calling existing login API endpoint");

        const response = await fetch(`http://localhost:3001/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        console.log("API response status:", response.status);
        const result = await response.json();
        console.log("API response data:", result);

        // تحقق من نجاح الاستجابة
        if (response.ok && result.user) {
          console.log("API login successful, returning user data");

          const user = result.user;
          return {
            id: user.id,
            name: user.name || user.email.split("@")[0], // استخدم جزء من الإيميل إذا لم يكن هناك اسم
            email: user.email,
            username: user.email.split("@")[0], // استخدم جزء من الإيميل كاسم مستخدم
            image: user.avatar,
            role: user.role,
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
          };
        } else {
          console.log("API login failed:", result.message || "Unknown error");
          return null;
        }
      } catch (error) {
        console.error("Authorization error:", error);
        return null;
      }
    },
  }),
];

// Callbacks
const callbacks: NextAuthConfig["callbacks"] = {
  async signIn({ user, account, profile }) {
    console.log("SignIn callback called", {
      user: user?.email,
      provider: account?.provider,
    });

    if (!user.email) {
      console.log("No email provided");
      return false;
    }

    if (account?.provider !== "credentials") {
      try {
        const existingUser = await db.user.findUnique({
          where: { email: user.email },
          include: { accounts: true },
        });

        if (existingUser) {
          const isLinked = existingUser.accounts.some(
            (acc) => acc.provider === account?.provider
          );
          if (!isLinked && existingUser.accounts.length > 0) {
            const existingProvider = existingUser.accounts[0].provider;
            console.log("Account conflict detected");
            return `/auth/conflict?email=${encodeURIComponent(
              user.email
            )}&provider=${
              account?.provider
            }&existingProvider=${existingProvider}`;
          }
        }
      } catch (error) {
        console.error("SignIn callback error:", error);
        return false;
      }
    }

    console.log("SignIn callback successful");
    return true;
  },

  async jwt({ token, user, account }) {
    console.log("JWT callback called");

    if (account) {
      token.accessToken = account.access_token;
    }
    if (user) {
      token.sub = user.id;
      token.name = user.name;
      token.picture = user.image ?? null;
      token.username = (user as any).username;
      token.role = (user as any).role;
      // حفظ الـ tokens من API
      if ((user as any).accessToken) {
        token.apiAccessToken = (user as any).accessToken;
      }
      if ((user as any).refreshToken) {
        token.apiRefreshToken = (user as any).refreshToken;
      }
    }
    return token;
  },

  async session({ session, token }) {
    console.log("Session callback called");

    if (session.user && token) {
      session.user.id = token.sub!;
      session.user.name = token.name;
      session.user.image = token.picture ?? null;
      (session.user as any).username = token.username as string;
      (session.user as any).role = token.role as string;
      (session as any).accessToken = token.accessToken as string;
      // إضافة الـ API tokens للجلسة
      (session as any).apiAccessToken = token.apiAccessToken as string;
      (session as any).apiRefreshToken = token.apiRefreshToken as string;
    }
    return session;
  },
};

// Validate environment variables
try {
  validateEnvVariables();
} catch (error) {
  console.error("Environment validation failed:", error);
}

// NextAuth configuration
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers,
  callbacks,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
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
  debug: process.env.NODE_ENV === "development",
});

// تأكد من أن API endpoint الموجود يرجع البيانات بالشكل التالي
// Expected API response format:
/*
{
  "user": {
    "id": "d2c2014d-0522-4e96-826c-5fb803544d1f",
    "email": "ww@gmail.com",
    "name": null,
    "role": "USER",
    "provider": null,
    "providerId": null,
    "avatar": null,
    "createdAt": "2025-05-25T09:06:28.441Z",
    "updatedAt": "2025-05-25T09:06:28.479Z"
  },
  "accessToken": "jwt_access_token",
  "refreshToken": "jwt_refresh_token"
}
*/

// Example of accessing session data in components:
/*
import { useSession } from 'next-auth/react';

function MyComponent() {
  const { data: session } = useSession();
  
  if (session) {
    console.log('User ID:', session.user.id);
    console.log('User Email:', session.user.email);
    console.log('User Role:', session.user.role);
    console.log('API Access Token:', session.apiAccessToken);
    console.log('API Refresh Token:', session.apiRefreshToken);
  }
  
  return <div>...</div>;
}
*/

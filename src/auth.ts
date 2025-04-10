import NextAuth, { type NextAuthConfig } from "next-auth";

import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "./lib/db";
import { getUserByEmail } from "./lib/getUserByEmail";

import { compare } from "bcrypt";

// const prisma = new PrismaClient();

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}


export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(db),

  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // authorization: {
      //   params: {
      //     redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/github`,
      //     scope: "user:email",
      //   },
      // },
      authorization: {
        params: {
          scope: "read:user user:email", // Requesting the email
        },
      },
      // profile(profile) {
      //   return {
      //     id: profile.id.toString(),
      //     name: profile.name,
      //     email: profile.email,
      //     image: profile.avatar_url,
      //     username:
      //       profile.login?.replace(/\s+/g, "").toLowerCase() ||
      //       profile.id.toString(), // أو أي قيمة بديلة
      //   };
      // },
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "email,public_profile",
        },
      },
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture?.data?.url || null,
          username:
            profile.name?.replace(/\s+/g, "").toLowerCase() || profile.id, // أو أي قيمة بديلة
        };
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
      //   async authorize(credentials) {
      //     const user = await getUserByEmail(credentials.email as string);

      //     if (!user) {
      //       throw new Error("AUTH_ERROR:Email does not exist");
      //     }

      //     const isPasswordValid = await compare(
      //       credentials.password as string,
      //       user.password || ""
      //     );

      //     if (!isPasswordValid) {
      //       throw new Error("AUTH_ERROR:Password is incorrect");
      //     }

      //     return {
      //       id: user.id.toString(),
      //       email: user.email,
      //       name: user.username,
      //     };
      //   },
    }),
  ],
  debug: true,

  session: {
    strategy: "jwt", // or 'database'
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        const existingUser = await db.user.findUnique({
          where: { email: user.email || "" },
        });

        // If the email exists but no account is linked to this provider, return false
        if (existingUser) {
          const linkedAccount = await db.account.findFirst({
            where: {
              userId: existingUser.id,
              provider: account?.provider || "",
            },
          });

          if (!linkedAccount) {
            // Optional: You can redirect to an error page with a message
            throw new Error(
              "OAUTH_ERROR:Email already exists with another provider"
            );
          }
          if (!user?.email) {
            console.error("GitHub email is missing");
            return false; // Prevent user creation if email is missing
          }
        }
      }

      return true; // Allow sign in
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string | undefined;

      session.user.id = token.sub ?? "";
      session.user.name = token.name;
      session.user.image = token.picture || null;
      // session.user.username = token.username as string;
      session.user.username = token.username as string;

      return session;
    },
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after sign in
      if (account) {
        token.accessToken = account.access_token;
      }
      if (user) {
        token.sub = user.id;
        token.name = user.name;
        token.picture = user.image || null;
        token.username = (user as any).username;

        // token.username = (user as any).username || ""; // You can include any custom fields
      }
      return token;
    },
  },
};

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);

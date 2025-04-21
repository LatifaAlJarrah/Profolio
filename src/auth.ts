import NextAuth, { type NextAuthConfig } from "next-auth";

import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "./lib/db";

import { compare } from "bcrypt";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(db),

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     scope: "https://www.googleapis.com/auth/userinfo.email",
      //   },
      // },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          scope: "openid email profile",
        },
      },

      profile(profile) {
        console.log("GOOGLE PROFILE", profile); // <- مؤقتاً للتأكد

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          username:
            profile.name?.replace(/\s+/g, "").toLowerCase() || profile.sub, // أو أي قيمة بديلة
        };
      },
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

        // const isPasswordValid = await compare(password, user.password);
        const isPasswordValid = await compare(password, user.password ?? '');
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

  // Improve cookie settings
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  // Debugging can help identify issues
  // debug: process.env.NODE_ENV !== "production",

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
        }
      }

      return true; // Allow sign in
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string | undefined;

      session.user.id = token.sub ?? "";
      session.user.name = token.name;
      session.user.image = token.picture || null;
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
        token.username = user.username;
      }
      return token;
    },
  },
};

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);
// import NextAuth from "next-auth";
// import type { User, Account, Session, Profile } from "next-auth";
// import type { JWT } from "next-auth/jwt";
// import Google from "next-auth/providers/google";
// import Facebook from "next-auth/providers/facebook";
// import Credentials from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { AdapterUser } from "@auth/core/adapters";
// import { compare } from "bcrypt";
// import { db } from "./lib/db";

// // Utility function to generate a username from a name or fallback to an ID
// const generateUsername = (
//   name: string | undefined | null,
//   fallback: string
// ): string => {
//   return name?.replace(/\s+/g, "").toLowerCase() ?? fallback;
// };

// /**
//  * Validates required environment variables for OAuth providers
//  * @throws {Error} If required environment variables are missing
//  */
// const validateEnvVariables = (): void => {
//   const requiredEnvVars = [
//     { key: "GOOGLE_CLIENT_ID", value: process.env.GOOGLE_CLIENT_ID },
//     { key: "GOOGLE_CLIENT_SECRET", value: process.env.GOOGLE_CLIENT_SECRET },
//     { key: "FACEBOOK_CLIENT_ID", value: process.env.FACEBOOK_CLIENT_ID },
//     {
//       key: "FACEBOOK_CLIENT_SECRET",
//       value: process.env.FACEBOOK_CLIENT_SECRET,
//     },
//     { key: "NEXTAUTH_SECRET", value: process.env.NEXTAUTH_SECRET },
//   ];

//   for (const envVar of requiredEnvVars) {
//     if (!envVar.value) {
//       throw new Error(`Missing required environment variable: ${envVar.key}`);
//     }
//   }
// };

// /**
//  * Configure Google OAuth provider
//  * @returns Google provider configuration
//  */
// const configureGoogleProvider = () =>
//   Google({
//     clientId: process.env.GOOGLE_CLIENT_ID ?? "",
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
//     authorization: {
//       params: {
//         prompt: "consent",
//         access_type: "offline",
//         scope: "openid email profile",
//       },
//     },
//     profile: (profile) => ({
//       id: profile.sub,
//       name: profile.name,
//       email: profile.email,
//       image: profile.picture,
//       username: generateUsername(profile.name, profile.sub),
//     }),
//   });

// /**
//  * Configure Facebook OAuth provider
//  * @returns Facebook provider configuration
//  */
// const configureFacebookProvider = () =>
//   Facebook({
//     clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
//     clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
//     authorization: {
//       params: {
//         scope: "email,public_profile",
//       },
//     },
//     profile: (profile) => ({
//       id: profile.id,
//       name: profile.name,
//       email: profile.email,
//       image: profile.picture?.data?.url ?? null,
//       username: generateUsername(profile.name, profile.id),
//     }),
//   });

// /**
//  * Configure Credentials provider for email/password login
//  * @returns Credentials provider configuration
//  */
// const configureCredentialsProvider = () =>
//   Credentials({
//     name: "Credentials",
//     credentials: {
//       email: { label: "Email", type: "email", placeholder: "john@gmail.com" },
//       password: { label: "Password", type: "password" },
//     },
//     async authorize(credentials) {
//       const email = credentials?.email as string | undefined;
//       const password = credentials?.password as string | undefined;

//       if (!email || !password) {
//         throw new Error("AUTH_ERROR: Missing email or password");
//       }

//       const user = await db.user.findUnique({ where: { email } });
//       if (!user) {
//         throw new Error("AUTH_ERROR: Email does not exist");
//       }

//       if (!user.password) {
//         throw new Error("AUTH_ERROR: No password set for this user");
//       }

//       const isPasswordValid = await compare(password, user.password);
//       if (!isPasswordValid) {
//         throw new Error("AUTH_ERROR: Password is incorrect");
//       }

//       return {
//         id: user.id.toString(),
//         name: user.username,
//         email: user.email,
//         username: user.username,
//       };
//     },
//   });

// /**
//  * Callback to handle sign-in logic
//  * Prevents sign-in if the email is already linked to another provider
//  */
// const signInCallback = async ({
//   user,
//   account,
//   profile,
//   email,
//   credentials,
//   isNewUser,
// }: {
//   user: User | AdapterUser;
//   account?: Account | null | undefined;
//   profile?: Profile | undefined;
//   email?: { verificationRequest?: boolean | undefined };
//   credentials?: Record<string, string> | undefined;
//   isNewUser?: boolean | undefined;
// }): Promise<boolean> => {
//   if (account?.provider !== "credentials") {
//     const existingUser = await db.user.findUnique({
//       where: { email: user.email ?? "" },
//     });

//     if (existingUser) {
//       const linkedAccount = await db.account.findFirst({
//         where: {
//           userId: existingUser.id,
//           provider: account?.provider ?? "",
//         },
//       });

//       if (!linkedAccount) {
//         throw new Error(
//           "OAUTH_ERROR: Email already exists with another provider"
//         );
//       }
//     }
//   }
//   return true;
// };

// /**
//  * Callback to update the session with token data
//  */
// const sessionCallback = async ({
//   session,
//   token,
// }: {
//   session: Session;
//   token: JWT;
// }): Promise<Session> => {
//   session.accessToken = token.accessToken;
//   session.user.id = token.sub ?? "";
//   session.user.name = token.name;
//   session.user.image = token.picture ?? null;
//   session.user.username = token.username;
//   return session;
// };

// /**
//  * Callback to update the JWT with user and account data
//  */
// const jwtCallback = async ({
//   token,
//   account,
//   user,
// }: {
//   token: JWT;
//   user?: User | AdapterUser;
//   account?: Account | null | undefined;
//   profile?: Profile | undefined;
//   isNewUser?: boolean | undefined;
// }): Promise<JWT> => {
//   if (account) {
//     token.accessToken = account.access_token;
//   }
//   if (user) {
//     token.sub = user.id;
//     token.name = user.name;
//     token.picture = user.image ?? null;
//     token.username = user.username;
//   }
//   return token;
// };

// // Validate environment variables before initializing NextAuth
// validateEnvVariables();

// // NextAuth configuration
// export const { auth, handlers, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(db),
//   providers: [
//     configureGoogleProvider(),
//     configureFacebookProvider(),
//     configureCredentialsProvider(),
//   ],
//   cookies: {
//     sessionToken: {
//       name: "next-auth.session-token",
//       options: {
//         httpOnly: true,
//         sameSite: "lax",
//         path: "/",
//         secure: process.env.NODE_ENV === "production",
//       },
//     },
//   },
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     signIn: signInCallback,
//     session: sessionCallback,
//     jwt: jwtCallback,
//   },
// });
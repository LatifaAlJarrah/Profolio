// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";

// export const {auth, handlers, signIn, signOut} = NextAuth({
//   providers: [GitHub],
// });
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub ?? "";
      session.user.name = token.name;
      session.user.image = token.picture;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
  },
};

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);
